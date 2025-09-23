---
sidebar_position: 10
---
# Bot Settings Configuration

The Bot Settings system provides comprehensive configuration options for customizing your AI chat bot's appearance, behavior, and functionality. This feature allows administrators to personalize the chatbot's interface, configure AI models, and set up embedding options.

## Overview

The Bot Settings system offers:

- **General Settings**: Bot name, status, purpose, and profile photo
- **Visual Customization**: Color schemes and interface themes
- **Chat Settings**: Instructions, domain boundaries, and tone configuration
- **AI Model Selection**: Choose between different AI models and APIs
- **Embed Settings**: Generate embed codes for website integration
- **Live Preview**: Real-time preview of chatbot appearance and behavior

## Main Interface

### Navigation Structure
```
Dashboard > Chat Bot > Bot Setting
```

The interface features a split-screen design with:
- **Left Panel**: Configuration settings and options
- **Right Panel**: Live chatbot preview
- **Real-time Updates**: Changes reflect immediately in the preview
- **Modern Design**: Clean, professional interface with intuitive controls

## General Settings

### Bot Profile Configuration

#### Profile Photo
- **Default Avatar**: White robot icon on dark blue background
- **Add Profile Photo**: Blue button to upload custom profile image
- **Image Support**: Support for various image formats
- **Preview**: Real-time preview of profile photo in chat interface

#### Bot Information
- **Bot Name**: Text input for chatbot name (e.g., "maths magic")
- **Bot Status**: Radio buttons for "Active" or "Deactive" status
- **Bot Purpose**: Text input for bot purpose (e.g., "Learning")
- **Real-time Updates**: Changes reflect immediately in preview

### Color Customization

#### Main Color Settings
- **Main Color**: Dark blue swatch (#050c76) for primary interface elements
- **Background**: Light purple swatch (#dfdbff) for chat background
- **Bot Chat Background**: Dark blue swatch (#050c76) for bot message bubbles
- **Bot Chat Text Color**: White swatch (#ffffff) for bot message text
- **User Chat Background**: Dark blue swatch (#050c76) for user message bubbles
- **User Chat Text Color**: White swatch (#FFFFFF) for user message text

#### Color Management
- **Hex Code Input**: Direct hexadecimal color code entry
- **Color Swatches**: Visual color selection interface
- **Live Preview**: Real-time color updates in chat preview
- **Consistent Theming**: Coordinated color scheme across all elements

## Chat Settings

### Bot Behavior Configuration

#### Instructions
- **Custom Instructions**: Text input for bot behavior instructions
- **Example**: "Hello i am your chat assistant! How are You?"
- **Behavior Control**: Define how the bot should respond and interact
- **Context Setting**: Provide specific instructions for bot personality

#### Domain Boundary
- **Scope Definition**: Text input for defining bot's knowledge domain
- **Placeholder**: "Enter domain boundary"
- **Knowledge Limits**: Set boundaries for bot's expertise area
- **Focus Control**: Keep bot responses within specific topics

#### Initial Message
- **Welcome Message**: Text input for bot's first message to users
- **Example**: "Hello! I'm Happy Bot your virtual assistant. How can I help you?"
- **User Experience**: Set the tone for initial interactions
- **Brand Alignment**: Align with your brand voice and messaging

#### Tone Configuration
- **Communication Style**: Text input for defining bot's tone
- **Placeholder**: "Enter tone"
- **Personality Setting**: Define how formal or casual the bot should be
- **Consistency**: Ensure consistent communication style

### Advanced Settings

#### Custom Prompt
- **Toggle Switch**: Enable/disable custom prompt feature
- **Warning Text**: "If you use this feature, then disable instructions, domain boundary, and tone."
- **Advanced Control**: Override default settings with custom prompts
- **Flexibility**: Complete control over bot behavior

#### Unknown Question Handling
- **Fallback Message**: Text input for unknown question responses
- **Example**: "sorry I don't have knowledge of your stupid question"
- **User Experience**: Handle cases where bot cannot provide answers
- **Brand Voice**: Maintain consistent tone even for unknown queries

#### Feedback System
- **Toggle Switch**: Enable/disable feedback system
- **Description**: "Users will see a feedback option after each chatbot response."
- **User Engagement**: Allow users to rate bot responses
- **Quality Improvement**: Collect feedback for bot improvement

## AI Model Selection

### Model Configuration

#### Default Chatbot API
- **Toggle Switch**: Enable/disable default chatbot API
- **Warning Text**: "If you use this feature, then disable instructions, domain boundary, and tone."
- **API Integration**: Use default API instead of custom configuration
- **Simplified Setup**: Easier configuration for basic use cases

#### AI Model Options
- **Open AI (Chat GPT)**: Radio button option for OpenAI integration
- **Gemini**: Radio button option for Google Gemini integration
- **Model Selection**: Choose between different AI providers
- **API Compatibility**: Ensure compatibility with your chosen model

#### API Configuration
- **API Key Input**: Secure input field for API keys
- **Masked Display**: API keys are hidden for security
- **Model Selection**: Dropdown for specific model versions (e.g., "gemini-1.5-pro")
- **Security**: Secure handling of API credentials

## Bot Embed Settings

### Website Integration

#### Embed Link
- **URL Input**: Text input for chatbot embed URL
- **Example**: "https://your-chatbot-link.com"
- **Website Integration**: Generate links for embedding chatbot
- **Custom Domain**: Use your own domain for chatbot access

#### Embed Code
- **HTML Code**: Complete HTML code for embedding chatbot
- **Copy Function**: "Copy Code" button for easy code copying
- **Iframe Integration**: Ready-to-use iframe code
- **Responsive Design**: Code works across different screen sizes

#### Embed Code Example
```html
<!-- Chatbot Embed -->
<div id="chatbot-container">
<iframe
src="https://your-chatbot-link.com"
width="100%"
height="100%"
style="border: none;"
title="Chatbot">
</iframe>
</div>
```

## Live Chat Preview

### Real-time Preview
The right panel shows a live preview of the chatbot interface:

#### Chat Interface
- **Header**: Robot icon and bot name ("maths magic")
- **Window Controls**: Expand and close buttons
- **Background**: Light purple background matching settings
- **Responsive Design**: Adapts to different screen sizes

#### Chat Messages
- **Bot Message**: Dark blue bubble with welcome message
- **User Message**: Dark blue bubble with user query
- **Message Actions**: Thumbs up, thumbs down, and copy icons
- **Color Coordination**: Messages use configured color scheme

#### Quick Replies
- **Suggested Questions**: Four dark blue buttons with common queries
- **Examples**: "What services do you offer?", "How can I contact support?"
- **User Experience**: Help users get started with common questions
- **Brand Consistency**: Buttons match the configured color scheme

#### Input Field
- **Text Input**: "Type Here..." placeholder text
- **Send Button**: Paper airplane icon for sending messages
- **User Interaction**: Easy message composition and sending
- **Accessibility**: Clear input field with intuitive controls

## Action Buttons

### Configuration Actions
- **Share Icon**: Network/branching symbol for sharing options
- **Cancel Button**: Gray button to cancel changes
- **Save Button**: Blue button to save configuration
- **Success Notification**: Green banner confirming successful updates

### Success Feedback
- **Notification Banner**: Green success message
- **Confirmation Text**: "Chatbot updated successfully!"
- **Visual Feedback**: Clear indication of successful configuration
- **User Experience**: Immediate feedback on configuration changes

## Best Practices

### Configuration Management
1. **Test Settings**: Use live preview to test all configurations
2. **Color Coordination**: Ensure colors work well together
3. **Brand Alignment**: Align bot personality with brand voice
4. **User Experience**: Consider user experience in all settings
5. **Regular Updates**: Keep bot settings current and relevant

### AI Model Selection
1. **API Compatibility**: Ensure chosen model works with your use case
2. **Performance**: Consider response time and accuracy
3. **Cost Management**: Monitor API usage and costs
4. **Security**: Keep API keys secure and updated
5. **Backup Options**: Have alternative models ready

### Embed Integration
1. **Website Compatibility**: Test embed code on your website
2. **Responsive Design**: Ensure chatbot works on all devices
3. **Performance**: Monitor chatbot performance on your site
4. **User Experience**: Ensure smooth integration with your site
5. **Analytics**: Track chatbot usage and effectiveness

## Technical Features

### Performance
- **Real-time Updates**: Instant preview of configuration changes
- **Fast Loading**: Quick interface response times
- **Responsive Design**: Works across all device sizes
- **Optimized Code**: Efficient embed code generation

### Security
- **API Key Protection**: Secure handling of API credentials
- **Input Validation**: Validation of all configuration inputs
- **Secure Transmission**: Safe data transmission
- **Access Control**: Role-based permissions for configuration

### Integration
- **Website Embedding**: Easy integration with websites
- **API Integration**: Seamless connection with AI models
- **Custom Domains**: Support for custom domain configuration
- **Cross-platform**: Works across different platforms and devices

## Troubleshooting

### Common Issues
- **Preview Not Updating**: Check if changes are saved properly
- **Color Not Applying**: Verify color codes are valid
- **API Errors**: Check API key validity and model selection
- **Embed Issues**: Verify embed code and URL configuration

### Solutions
1. **Refresh Interface**: Reload page to resolve temporary issues
2. **Check Configuration**: Verify all settings are properly configured
3. **Test API Keys**: Ensure API keys are valid and active
4. **Contact Support**: Contact support for persistent issues

---

*This documentation covers the comprehensive Bot Settings configuration system. The system provides powerful tools for customizing your AI chat bot's appearance, behavior, and functionality to match your brand and requirements.*

## Visual Examples

### General Settings Interface
![Bot Settings Phase 1](../../static/img/ai-feature/setting-phse-1.png)
*The main Bot Settings interface showing general settings and color customization*

### Chat Settings Configuration
![Bot Settings Phase 2](../../static/img/ai-feature/setting-phse-2.png)
*Chat settings configuration with instructions, domain boundary, and tone settings*

### AI Model and Embed Settings
![Bot Settings Phase 3](../../static/img/ai-feature/setting-phse-3.png)
*AI model selection and bot embed settings configuration*

### Settings Save Confirmation
![Settings Save](../../static/img/ai-feature/setting-save.png)
*Success notification confirming successful bot settings update*

## Step-by-Step Visual Guide

### 1. Accessing Bot Settings
- Navigate to Dashboard > Chat Bot > Bot Setting
- View the split-screen interface with settings and preview
- Familiarize yourself with the configuration options

### 2. General Settings Configuration
- Set bot name, status, and purpose
- Upload profile photo
- Configure color scheme
- Use live preview to see changes

### 3. Chat Settings Configuration
- Set bot instructions and behavior
- Configure domain boundaries
- Set initial message and tone
- Enable/disable feedback system

### 4. AI Model Selection
- Choose between OpenAI and Gemini
- Enter API keys securely
- Select specific model versions
- Test model configuration

### 5. Embed Settings
- Configure embed link and code
- Copy embed code for website integration
- Test embed functionality
- Save all settings


## Visual Examples

### General Settings Interface
![Bot Settings Phase 1](../../static/img/ai-feature/setting-phse-1.png)
*The main Bot Settings interface showing general settings and color customization*

### Chat Settings Configuration
![Bot Settings Phase 2](../../static/img/ai-feature/setting-phse-2.png)
*Chat settings configuration with instructions, domain boundary, and tone settings*

### AI Model and Embed Settings
![Bot Settings Phase 3](../../static/img/ai-feature/setting-phse-3.png)
*AI model selection and bot embed settings configuration*

### Settings Save Confirmation
![Settings Save](../../static/img/ai-feature/setting-save.png)
*Success notification confirming successful bot settings update*

## Step-by-Step Visual Guide

### 1. Accessing Bot Settings
- Navigate to Dashboard > Chat Bot > Bot Setting
- View the split-screen interface with settings and preview
- Familiarize yourself with the configuration options

### 2. General Settings Configuration
- Set bot name, status, and purpose
- Upload profile photo
- Configure color scheme
- Use live preview to see changes

### 3. Chat Settings Configuration
- Set bot instructions and behavior
- Configure domain boundaries
- Set initial message and tone
- Enable/disable feedback system

### 4. AI Model Selection
- Choose between OpenAI and Gemini
- Enter API keys securely
- Select specific model versions
- Test model configuration

### 5. Embed Settings
- Configure embed link and code
- Copy embed code for website integration
- Test embed functionality
- Save all settings

