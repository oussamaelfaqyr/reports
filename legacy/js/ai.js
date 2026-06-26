// ReportForge AI Module — Gemini API Integration
ReportForge.AI = (function() {
    async function callGemini(prompt) {
        const response = await fetch('/api/ai/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt })
        });
        
        if (!response.ok) {
            let err = {};
            try {
                err = await response.json();
            } catch (e) {}
            throw new Error(err.error || `API Error: ${response.status}`);
        }
        
        const data = await response.json();
        return data.result || '';
    }

    return {
        // Correct grammar and improve phrasing of given text
        async fixGrammar(text) {
            const prompt = `You are a professional editor. Correct the grammar, spelling, and improve the clarity and flow of the following text. Return ONLY the corrected text with no explanations, no markdown formatting, and no added comments:\n\n${text}`;
            return callGemini(prompt);
        },

        // Rewrite text in a specific tone
        async rewriteTone(text, tone) {
            const toneDescriptions = {
                professional: 'formal, authoritative, and business-appropriate',
                creative: 'vivid, engaging, imaginative, and energetic',
                persuasive: 'compelling, benefit-focused, and action-driving',
                technical: 'precise, data-driven, concise, and analytical',
                academic: 'scholarly, well-structured, referenced, and objective'
            };
            const desc = toneDescriptions[tone] || 'professional';
            const prompt = `Rewrite the following text in a ${desc} tone. Return ONLY the rewritten text, no explanations:\n\n${text}`;
            return callGemini(prompt);
        },

        // Generate a section based on a title and context
        async generateSection(sectionTitle, reportContext) {
            const prompt = `You are a professional report writer. Write a detailed, well-structured section for a report.

Report context: "${reportContext}"
Section title: "${sectionTitle}"

Write the section content using the following formatting rules (ONLY these plain-text rules, no markdown symbols like # or **):
- Use "> " at the start of a line for a key quote or highlighted insight
- Use "- " at the start of a line for bullet points
- Use "1. ", "2. " etc. for numbered lists
- Use regular paragraphs for body text
- Separate paragraphs with a blank line

Write 3-5 paragraphs or a well-structured mix of formats. Return ONLY the section content.`;
            return callGemini(prompt);
        },

        // Generate a full report (title, subtitle, and all sections) from a topic description
        async generateFullReport(topic, numSections = 4) {
            const prompt = `You are a professional report writer and strategist. Create a complete, high-quality report outline and content based on this topic:

"${topic}"

Return your response as a valid JSON object with this exact structure:
{
  "title": "The main report title",
  "subtitle": "A compelling subtitle summarizing the report purpose",
  "author": "Author Name",
  "role": "Professional Role or Organization",
  "sections": [
    {
      "title": "Section Title",
      "content": "Full section content using:\\n> For highlighted quotes\\n- For bullets\\n1. For numbered points\\n\\nUse blank lines between paragraphs. Write real, meaningful content."
    }
  ]
}

Generate exactly ${numSections} sections. Make the content rich, professional, and insightful. Return ONLY valid JSON, no markdown code blocks.`;
            const raw = await callGemini(prompt);
            // Strip markdown code fences if present
            const cleaned = raw.replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/```\s*$/i, '').trim();
            try {
                return JSON.parse(cleaned);
            } catch (e) {
                throw new Error('AI returned invalid JSON. Please try again.');
            }
        },

        // Suggest a title and subtitle based on content
        async suggestTitles(content) {
            const prompt = `Based on the following report content, suggest 3 compelling title and subtitle pairs.

Content: "${content.substring(0, 800)}"

Return ONLY a valid JSON array like this:
[
  {"title": "Title 1", "subtitle": "Subtitle 1"},
  {"title": "Title 2", "subtitle": "Subtitle 2"},
  {"title": "Title 3", "subtitle": "Subtitle 3"}
]
No markdown, no extra text.`;
            const raw = await callGemini(prompt);
            const cleaned = raw.replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/```\s*$/i, '').trim();
            try {
                return JSON.parse(cleaned);
            } catch (e) {
                throw new Error('AI returned invalid response. Please try again.');
            }
        },

        // Expand a short bullet or note into a full paragraph
        async expandText(text) {
            const prompt = `Expand the following note or bullet point into a well-written, detailed paragraph for a professional report. Return ONLY the paragraph:\n\n${text}`;
            return callGemini(prompt);
        },

        // Summarize section content
        async summarize(text) {
            const prompt = `Summarize the following text into a concise executive-style paragraph of 2-3 sentences. Return ONLY the summary:\n\n${text}`;
            return callGemini(prompt);
        }
    };
})();
