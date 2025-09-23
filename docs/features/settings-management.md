---
sidebar_position: 13
---
# Settings Management

The Settings Management system provides comprehensive configuration options for AI chat bots, including AI model selection, language management, and system configuration. This feature allows administrators to configure the core functionality and behavior of their chat bots.

## Overview

The Settings Management system offers:

- **AI Model Configuration**: Select and configure AI models (OpenAI or Gemini)
- **Language Management**: Add, edit, and manage multiple languages
- **API Key Management**: Secure API key configuration
- **Model Selection**: Choose specific AI model versions
- **Translation Support**: Upload and manage translation files
- **System Configuration**: Configure bot behavior and settings

## Main Interface

### Navigation Structure
```
Dashboard > Settings
```

The interface features a clean, modern design with:
- **Header**: "Settings" title with user profile dropdown
- **AI Model Section**: Configuration for AI model selection
- **Languages Section**: Management of supported languages
- **Success Notifications**: Real-time feedback for operations
- **Action Controls**: Save and cancel operations

## Interface Components

### Header Section
- **Page Title**: "Settings" prominently displayed
- **Language Selector**: "English-en" dropdown for UI language
- **User Profile**: "Admin" dropdown with user avatar
- **Success Notifications**: Green banners for successful operations

### Success Notifications
- **Settings Saved**: "Settings saved successfully" confirmation
- **Language Created**: "Language created successfully! 🎉" with party emoji
- **Languages Loaded**: "Languages loaded successfully" confirmation
- **Visual Feedback**: Clear indication of successful operations
- **Auto-Dismiss**: Notifications disappear automatically

## AI Model Configuration

### Select AI Model Section
The AI Model section provides comprehensive configuration options:

#### Model Options
- **Open AI (Chat GPT)**: Radio button option for OpenAI integration
- **Gemini**: Radio button option for Google Gemini integration
- **API Key Management**: Secure input fields for API keys
- **Model Selection**: Dropdown for specific model versions

#### Configuration Fields
- **Add API Key**: Text input with masked characters for security
- **Select Model**: Dropdown with available model versions
- **Model Versions**: Extensive list of available models including:
  - `gemini-1.5-pro-latest`
  - `gemini-1.5-pro-002`
  - `gemini-1.5-flash-latest`
  - `gemini-2.5-pro-preview-03-25`
  - And many more options

#### Action Buttons
- **Cancel Button**: White button to cancel changes
- **Save Button**: Blue button to save configuration

## Language Management

### Languages Section
The Languages section provides comprehensive language management:

#### Language Table Structure
- **No.**: Serial number for each language
- **Language Name**: Full name of the language
- **Language Code**: Short code (e.g., "en" for English)
- **RTL / LTR**: Text direction indicator
- **Actions**: Edit and delete operations

#### Language Operations
- **Add Language**: Blue "Add Language" button
- **Edit Language**: Pencil icon for editing
- **Delete Language**: Trash can icon for deletion
- **Language Status**: Active/inactive status management

### Add Language Modal

#### Modal Structure
The "Add Language" modal provides comprehensive language setup:

#### Basic Information
- **Language Name**: Text input with "Enter Language" placeholder
- **Language Code**: Text input with "Enter Code" placeholder
- **Required Fields**: All fields marked with red asterisks

#### Language Configuration
- **RTL / LTR Selection**: Radio buttons for text direction
  - **RTL**: Right-to-Left languages (Arabic, Hebrew)
  - **LTR**: Left-to-Right languages (English, Spanish)
- **Default Language**: Radio buttons for default status
  - **Yes**: Set as default language
  - **No**: Regular language option

#### File Upload System
- **Update File**: Required field for translation files
- **Drag & Drop Zone**: Large rectangular upload area
- **File Format**: "Supported formats: JSON files only"
- **Upload Instructions**: "Drag & Drop or choose file to upload"
- **File Management**: Remove uploaded files option

#### Download Options
- **Download Sample File**: Template for translation files
- **Download Labels File**: Existing label files
- **File Templates**: Pre-configured translation templates

#### Action Buttons
- **Cancel Button**: White button to cancel creation
- **Save Button**: Blue button to create language

### Edit Language Modal

#### Edit Configuration
The "Edit Language" modal provides language modification:

#### Pre-filled Information
- **Language Name**: Pre-filled with existing name
- **Language Code**: Pre-filled with existing code
- **Current Settings**: RTL/LTR and default status

#### File Management
- **Update File**: Upload new translation files
- **Download Uploaded File**: Access existing files
- **File Replacement**: Replace existing translation files
- **Version Control**: Manage file versions

#### Modification Options
- **Language Details**: Edit name and code
- **Text Direction**: Change RTL/LTR setting
- **Default Status**: Modify default language setting
- **File Updates**: Upload new translation files

## Language Operations

### Adding New Languages
1. **Click Add Language**: Click the blue "Add Language" button
2. **Fill Details**: Enter language name and code
3. **Configure Settings**: Set RTL/LTR and default status
4. **Upload Files**: Add translation JSON files
5. **Save Language**: Click "Save" to create language

### Editing Existing Languages
1. **Click Edit Icon**: Click the pencil icon for any language
2. **Modify Details**: Update language information
3. **Update Files**: Upload new translation files
4. **Save Changes**: Click "Save" to update language

### Deleting Languages
1. **Click Delete Icon**: Click the trash can icon
2. **Confirmation Modal**: "Are you sure you want to delete question?" appears
3. **Confirm Deletion**: Click "Yes, Delete" to confirm
4. **Language Removal**: Language is permanently deleted

## Success Notifications

### Settings Saved Successfully
- **Green Banner**: "Settings saved successfully" message
- **Checkmark Icon**: Visual confirmation of success
- **Auto-Dismiss**: Notification disappears automatically
- **User Feedback**: Clear indication of successful save

### Language Created Successfully
- **Green Banner**: "Language created successfully! 🎉" message
- **Party Emoji**: Celebration indicator for successful creation
- **Visual Feedback**: Clear indication of successful operation
- **User Experience**: Positive feedback for user actions

### Languages Loaded Successfully
- **Green Banner**: "Languages loaded successfully" message
- **Checkmark Icon**: Visual confirmation of successful loading
- **Data Refresh**: Indicates successful data retrieval
- **System Status**: Confirms system is working properly

## Best Practices

### AI Model Configuration
1. **API Key Security**: Keep API keys secure and updated
2. **Model Selection**: Choose appropriate models for your use case
3. **Performance Testing**: Test different models for optimal performance
4. **Cost Management**: Monitor API usage and costs
5. **Backup Configuration**: Keep backup of working configurations

### Language Management
1. **Translation Quality**: Ensure high-quality translation files
2. **File Format**: Use proper JSON format for translation files
3. **Testing**: Test all languages before making them active
4. **Documentation**: Document language configurations
5. **Regular Updates**: Keep translation files updated

### System Configuration
1. **Regular Backups**: Backup all configuration settings
2. **Testing**: Test changes in development environment
3. **Monitoring**: Monitor system performance after changes
4. **User Communication**: Inform users about significant changes
5. **Rollback Plans**: Have rollback plans for major changes

## Technical Features

### Performance
- **Fast Loading**: Quick settings rendering and updates
- **Real-time Updates**: Live configuration updates
- **Responsive Design**: Works across all device sizes
- **Efficient Operations**: Quick settings management operations

### Security
- **API Key Protection**: Secure storage of API keys
- **Data Validation**: Input validation for all configurations
- **Access Control**: Secure access to settings
- **Audit Logging**: Track all configuration changes

### Integration
- **AI Model Integration**: Seamless AI model configuration
- **Language Support**: Comprehensive language management
- **File Management**: Secure file upload and management
- **Notification Systems**: Real-time feedback for operations

## Troubleshooting

### Common Issues
- **Settings Not Saving**: Check API key validity and permissions
- **Language Not Loading**: Verify translation file format
- **Model Not Working**: Check API key and model availability
- **File Upload Issues**: Verify file format and size

### Solutions
1. **Refresh Page**: Reload page to resolve temporary issues
2. **Check API Keys**: Verify API keys are valid and active
3. **Validate Files**: Ensure translation files are properly formatted
4. **Contact Support**: Contact support for persistent issues

---

*This documentation covers the comprehensive Settings Management system. The system provides powerful tools for configuring AI models, managing languages, and maintaining optimal chat bot performance.*

## Visual Examples

### Main Settings Interface
![Settings UI](../../static/img/ai-feature/setting-ui.png)
*The main Settings interface showing AI model selection and language management*

### Add Language Modal
![Add Language Modal](../../static/img/ai-feature/setting-add-lang.png)
*Modal dialog for adding new languages with configuration options*

### Edit Language Modal
![Edit Language Modal](../../static/img/ai-feature/setting-edit-lang.png)
*Modal dialog for editing existing language settings*

### Fill Details Form
![Fill Details Form](../../static/img/ai-feature/setting-fill-details.png)
*Form for entering language details and configuration*

### Select Model Dropdown
![Select Model Dropdown](../../static/img/ai-feature/setting-select-modal.png)
*Dropdown menu showing available AI model options*

### Save Modal
![Save Modal](../../static/img/ai-feature/setting-save-modal.png)
*Save confirmation modal for language operations*

### Delete Language Confirmation
![Delete Language Confirmation](../../static/img/ai-feature/setting-delete-lang.png)
*Confirmation modal for deleting languages*

### Success Notifications
![Success Notifications](../../static/img/ai-feature/setting-sucess-land-add.png)
*Success notifications for language operations*

## Step-by-Step Visual Guide

### 1. Accessing Settings
![Settings UI](../../static/img/ai-feature/setting-ui.png)
*Navigate to Dashboard > Settings to access configuration options*

### 2. Configuring AI Model
![Select Model Dropdown](../../static/img/ai-feature/setting-select-modal.png)
*Select AI model and configure API keys*

### 3. Adding New Languages
![Add Language Modal](../../static/img/ai-feature/setting-add-lang.png)
*Click "Add Language" to open the creation modal*

### 4. Filling Language Details
![Fill Details Form](../../static/img/ai-feature/setting-fill-details.png)
*Enter language name, code, and configuration settings*

### 5. Saving Language
![Save Modal](../../static/img/ai-feature/setting-save-modal.png)
*Click "Save" to create the new language*

### 6. Editing Languages
![Edit Language Modal](../../static/img/ai-feature/setting-edit-lang.png)
*Click the edit icon to modify existing languages*

### 7. Deleting Languages
![Delete Language Confirmation](../../static/img/ai-feature/setting-delete-lang.png)
*Click the delete icon and confirm deletion*

### 8. Success Notifications
![Success Notifications](../../static/img/ai-feature/setting-sucess-land-add.png)
*View success notifications for completed operations*

