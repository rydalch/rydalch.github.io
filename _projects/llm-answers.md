---
layout: distill
title: llm questionnaire processing
description: tool to generate accurate responses to customer security questionnaires using an LLM
img: assets/img/SCF-Control-Mapper.png
importance: 1
category: work
related_publications: false
---

### **From Naive RAG to a File-Navigating Agent: A Journey in Automating Security Questionnaires**

One of the most time consuming activities for many organizations with business customers is responding to inquiries about security practices. Most customers have a questionnaire they want completed to help them evaluated how well the company meets their requirements. Completing the questionnaire usually requires an analyst to review each question and provide a response.

In order to provide an accurate response, the analyst needs to be someone who understands the company's security policies and standards as well as the company's products and services.

An LLM seems like an ideal tool to automate the generation of responses. I created a proof of concept to have an LLM respond to questions based on a set of policies. Initially I implemented a RAG approach, which worked well for my test policy documents. When I tested a large, single policy document, it exceeded the context window for the model and the responses would get stuck on the table of contents.

A commercial provider had a similar issue, as shown here:

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/SCF-Control-Mapper.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Screenshot of processing a policy with over 100 pages.
</div>

So I tried an agentic approach that led to much better and more consistent outcomes. It works with a large, single policy document with over a hundred pages, and it works with a set of smaller, 3 to 5 page each, policy documents.

This has been a fascinating journey, moving far beyond my initial scope into the nuanced and often challenging world of building truly robust agents. I went from an initial RAG idea, through a "RAG Obituary" paradigm shift, to the local, file-navigating agent.

#### **Phase 1: The RAG Illusion**

The initial idea was straightforward. The problem seemed custom-made for Retrieval-Augmented Generation (RAG), the go-to architecture for question-answering over a private knowledge base.

The setup was simple:

1.  **Ingest:** Process all our security documents—PDFs, DOCX files, etc.—into clean text.
2.  **Embed & Store:** Use a sentence-transformer model to convert text chunks into vector embeddings and store them in a ChromaDB vector database.
3.  **Retrieve & Generate:** When a question came in, use similarity search to find the most relevant chunks and feed them to an LLM to synthesize an answer.

The first results were deceptively promising. But as soon as a questionnaire used slightly different terminology (asking about "business continuity" when our policy said "resilience management") the system failed silently. It was a black box that either worked or it didn't, and I had little visibility into why.

#### **Phase 2: The Paradigm Shift – The "RAG Obituary"**

<aside>
Around the same time, Anthropic published an article with similar takaways titled <a href="https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents" target="_blank">Effective context engineering for AI agents</a>
</aside>

The turning point came from an article I came across on Hacker News titled "[The RAG Obituary: Killed by Agents, Buried by Context Windows](https://www.nicolasbustamante.com/p/the-rag-obituary-killed-by-agents)." It argued that the entire RAG pipeline of chunking, embedding, and vector databases was a clever workaround for an era of small context windows. The future, it claimed, belonged to **investigator agents** that could navigate and read entire documents directly, much like a human would, using simple but powerful tools like `grep`.

This was a profound shift in thinking. The goal was no longer to find the most similar fragment of text but to build an agent that could investigate a file system to find the correct answer.

#### **Phase 3: Building the Investigator – An Agent with Tools**

Embracing this new philosophy meant a complete architectural overhaul:

1.  **Goodbye, Vector Database:** I scrapped ChromaDB. The knowledge base became a simple folder of clean `.txt` files.
2.  **Hello, Command-Line Power:** I created a set of Python functions that acted as the agent's "hands," using the `subprocess` module to call `grep`. The primary tools were:
    - `search_content`: Searches the entire content of all files for keywords and returns the names of the files that contain them.
    - `read_file`: Reads the beginning of a document, perfect for grabbing a Table of Contents.
    - `go_to_section`: A navigation tool to jump directly to a specific section ID (e.g., "AC-12") within a large document.
3.  **The Agent Core:** Using LangChain, I built a "ReAct" (Reason-Act) loop. The agent was given a persona and a core directive: analyze the question, choose a tool, execute it, observe the result, and repeat until you have the answer.

This was no longer a static pipeline; it was a dynamic, thinking process.

#### **Phase 4: The Gauntlet – Where the Real Learning Happened**

Theory is one thing; practice is another. Making the agent work reliably, especially with local open-source models, was a challenge.

**Lesson 1: The Hallucination Menace**
The first major failure came when the agent was asked for a "public privacy policy link" as one of the test questions in the security questionnaire. It ignored the documents entirely and confidently provided the URL to its own creator's (xAI's) privacy policy. It "broke character."

- **The Fix:** A much stricter prompt persona. We had to explicitly command it: **"You are a factual Q&A assistant. Your _only_ source of knowledge is the set of tools you have been given. You must not use any external knowledge. Do not make up information or filenames."** This constraint was crucial to keeping it grounded.

**Lesson 2: The Monolithic Document Trap**
When I tested the agent against a single, 300-page security manual, it failed consistently. It would correctly use `read_file` to see the Table of Contents, find the perfect section title on page 150, but the navigation tool was too simplistic. It would get stuck in the long Table of Contents, never reaching the actual content deep within the document.

- **The Fix:** A smarter tool. The tool was rewritten to not just stop the first time it found a match for a string, but to find all matches within the document (and a few lines before and after) and then intelligently extract a complete answer.

**Lesson 3: The Local Model Dilemma**
While commercial models like GPT-4 followed the turn-by-turn logic well, local models like Llama 3.1 Instruct and Hermes 7B struggled. They would often "hallucinate" an entire multi-step investigation in a single turn, inventing fake tool outputs and presenting a final answer without ever actually using the tools. They were trying to solve the whole problem in one go.

- **The Fix:** Radical prompt simplification. The elegant, multi-part strategy in the prompt was confusing the model. We had to replace it with a blunt, rigid set of rules: **"You must only call ONE tool per step. Do not plan multiple steps ahead."** This reduced the model's "creative freedom" and forced it into the step-by-step reasoning loop we needed.

#### **Phase 5: The Final Architecture – A Model-Agnostic Investigator**

The final system is a testament to this iterative journey. It is:

1.  **Agentic, Not RAG-based:** It doesn't rely on semantic similarity. It performs a true investigation by discovering, navigating, and reading documents.
2.  **Flexible and Adaptable:** The prompt now teaches a universal strategy. The agent starts by discovering files. If it finds many specific policy documents, it reads them. If it finds one large manual, it switches to the TOC-navigation strategy. It adapts to its environment.
3.  **Model-Agnostic:** By using LangChain's core tool-calling abstractions, the agent is no longer tied to a specific model's output format. I can swap between a local Llama 3 model and a commercial API like Claude 3 by changing a single line in a config file.
4.  **Fast and Efficient:** Using `grep` for file searching is orders of magnitude faster than loading, chunking, and embedding files. The entire process for answering a question now takes seconds, not minutes.

#### **The Takeaway: Build Your Agent's Brain and Body Together**

This project drove home a core lesson of the post-RAG era: an agent's intelligence is not just in the LLM. It's in the co-design of its "brain" (the prompt and strategy) and its "body" (the tools it has to work with). The initial hallucination problems weren't solved by a better model, but by a better prompt. The navigation problems weren't solved by a better prompt, but by a better tool.

Moving from a simple pipeline to this robust investigator was a shift from asking "Can an LLM answer this?" to "How can I build a reliable, verifiable process where an LLM is a constrained and supervised component?" The result is a system that feels less like magic and more like a tireless, highly competent junior analyst—and in the world of security and compliance, that's exactly what you need.
