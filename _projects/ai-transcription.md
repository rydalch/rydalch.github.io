---
layout: page
title: placeholder
description: Handwritting Transcription with AI
img: assets/img/7.jpg
importance: 3
category: work
---

# Building a Handwritten Journal OCR Pipeline: From TrOCR to Google Cloud Vision

I recently built a Python pipeline to transcribe handwritten journal pages into Markdown. The goal was simple: scan a journal page, run it through OCR, and get clean, searchable text. My sometimes not very legible handwritting proved to be a challenge. And the path to a working solution taught me more about OCR systems than I expected.

## The Initial Approach: TrOCR

I started with Microsoft's TrOCR, a transformer-based model specifically trained for handwriting recognition. The setup seemed promising:

- High DPI scanning (450) for maximum detail
- Advanced image preprocessing with OpenCV (grayscale conversion, Otsu's thresholding)
- TrOCR Large model for better accuracy
- Local LLM for post-processing cleanup

The result? Complete failure. My test file produced "1907" as output. Another file gave me "0 0".

## Understanding the Problem

The issue became clear after research: TrOCR is designed for line-level text recognition, not full-page OCR. I was feeding it entire page images when it expected cropped individual text lines. At 450 DPI, the images were massive, and TrOCR's fixed input size (384x384 pixels) meant aggressive downscaling that destroyed all the detail I'd carefully preserved.

The fundamental architecture mismatch meant no amount of preprocessing would fix this.

## Attempt Two: Tesseract

I pivoted to Tesseract, the traditional OCR engine that handles full pages. I reduced the DPI to 300, switched to Tesseract's LSTM neural net mode, and simplified the preprocessing pipeline.

It ran successfully. The output was terrible.

## The Working Solution: Google Cloud Vision API

Rather than continuing to fight with open-source tools, I evaluated Google Cloud Vision API:

- First 1,000 pages per month are free
- Specifically optimized for handwriting
- No preprocessing required
- Enterprise-grade accuracy

The implementation required:
- Google Cloud project setup
- Service account credentials
- API client integration
- Proper error handling for image size limits

The API has a 20MB limit per image, so I added automatic resizing logic. High-DPI scans get compressed to JPEG with quality optimization. If they're still too large, the script automatically downscales them while preserving readable detail.

## The Complete Pipeline

1. Extract pages from PDF at 300 DPI
2. Convert to RGB images (saved as JPEG for review)
3. Send to Google Cloud Vision API with automatic size optimization
4. Refine output with local LLM for cleanup and formatting
5. Save as Markdown

## Results

The Google Vision API consistently produces decent transcriptions of my challenging handwritten text, but still has some OCR type artifacts. The LLM refinement step (using LM Studio locally) cleans up those artifacts and structures the output into simple Markdown. Because the LLM understands natural language, it seems to do a good job at figuring out what a sentence meant to say.

I still manually reviewed the output against the original page and would sometimes find mistakes. But the results were much more accurate and clean than any other approach I've tried in the past. I have a few years of journals left to scan, and I'll continue to experiment for more accuracy and automation.
