---
layout: page
title: LLM Questionnaire Processing
description: tool to respond to customer security questionnaires using an LLM
img: assets/img/12.jpg
importance: 1
category: work
related_publications: true
---

One of the most time consuming activities for many organizations with business customers is responding to inquiries about security practices. Most customers have a questionnaire they want completed to help them evaluated how well the company meets their requirements. Completing the questionnaire usually requires an analyst to review each question and provide a response. 

In order to provide an accurate response, the analyst needs to be someone who understands the company's security policies and standards as well as the company's products and services.

An LLM seems like an ideal tool to automate the generation of responses. I created a proof of concept to have an LLM respond to questions based on a set of policies.

Initially I implemented a RAG approach, which worked well for my test policy documents. When I tested a large, single policy document, it exceeded the context window for the model and the responses would get stuck on the table of contents.

A commercial provider had a similar issue, as shown here:

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/SCF-Control-Mapper.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Screenshot of processing a policy with over 100 pages.
</div>

After some experimentation, I designed an agentic approach that leverages the excellent searching capabilities of grep to find the relevant sections within the appropriate policies. This is then fed to the LLM to generate the response.

More details to come....
