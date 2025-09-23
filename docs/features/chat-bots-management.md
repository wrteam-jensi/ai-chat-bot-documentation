---
sidebar_position: 12
---
# Chat Bots Management

The Chat Bots Management system provides a comprehensive dashboard for managing multiple AI chat bots. This feature allows administrators to view, control, and manage all their chat bots from a single interface, including performance monitoring, status management, and configuration access.

## Overview

The Chat Bots Management system offers:

- **Multi-Bot Dashboard**: View and manage all your chat bots in one place
- **Performance Monitoring**: Track usage and performance metrics for each bot
- **Status Management**: Activate or deactivate chat bots
- **Quick Actions**: Edit, reset, and delete chat bots
- **Bot Creation**: Create new chat bots with custom configurations
- **Analytics**: Monitor user engagement and bot effectiveness

## Main Interface

### Navigation Structure
```
Dashboard > Chat Bots
```

The interface features a clean, modern design with:
- **Header**: "With Your Chatbots" title with descriptive subtitle
- **Add Button**: Blue "+ Add Chatbot" button for creating new bots
- **Bot Cards**: Grid layout showing all chat bots
- **Performance Metrics**: Visual graphs and usage statistics
- **Action Controls**: Edit, reset, and delete operations

## Interface Components

### Header Section
- **Page Title**: "With Your Chatbots" prominently displayed
- **Subtitle**: "See and control every chatbot you've created, along with their performance."
- **Add Button**: Blue "+ Add Chatbot" button in top-right corner
- **User Profile**: Admin profile dropdown in top-right corner

### Success Notifications
- **Green Banner**: "Chatbot reset successfully!" confirmation message
- **Visual Feedback**: Clear indication of successful operations
- **Auto-Dismiss**: Notifications disappear automatically
- **User Experience**: Immediate feedback on actions

## Chat Bot Cards

### Card Structure
Each chat bot is displayed in a card format with:

#### Bot Information
- **Icon**: Unique robot icon with color coding
- **Name**: Bot name (e.g., "Let's test", "Travel", "Jupiter")
- **Description**: Bot purpose (e.g., "Student support", "Travel Info", "to know")
- **Status**: Active (green) or Deactive (red) status indicator

#### Performance Metrics
- **Usage Graph**: Blue line graph showing bot usage over time
- **User Count**: "Users 0" with date information
- **Activity Indicators**: Visual representation of bot activity
- **Performance Trends**: Track usage patterns and growth

#### Action Buttons
- **Edit Button**: Blue button with pencil icon for editing bot settings
- **Reset Button**: Orange button with refresh icon for resetting bot data
- **Delete Button**: Red button with trash can icon for deleting bot

### Sample Chat Bots

#### "Let's test" Bot
- **Icon**: Purple robot icon
- **Name**: "Let's test"
- **Description**: "Student support"
- **Status**: Active (green)
- **Performance**: Blue spike graph showing recent activity
- **Users**: 0 users, Jul 26
- **Actions**: Edit, reset, delete buttons

#### "Travel" Bot
- **Icon**: Purple robot icon
- **Name**: "Travel"
- **Description**: "Travel Info"
- **Status**: Deactive (red)
- **Performance**: "Chatbot Has No Users" message
- **Actions**: Edit, reset, delete buttons

#### "Jupiter" Bot
- **Icon**: Dark gray robot icon
- **Name**: "Jupiter"
- **Description**: "to know"
- **Status**: Active (green)
- **Performance**: Blue spike graph showing recent activity
- **Actions**: Edit, reset, delete buttons

## Bot Management Actions

### Edit Bot Settings
1. **Click Edit Button**: Click the blue "Edit" button on any bot card
2. **Navigate to Settings**: Automatically redirects to bot settings page
3. **Configure Settings**: Access all bot configuration options
4. **Save Changes**: Save and apply configuration changes
5. **Return to Dashboard**: Navigate back to chat bots dashboard

### Reset Bot Data
1. **Click Reset Button**: Click the orange "reset" button
2. **Reset Modal**: "Reset Chatbot" modal appears
3. **Select Data to Reset**: Choose what data to reset:
   - Delete FAQs
   - Delete Knowledge Hub
   - Delete Documents
   - Delete Conversation Logs
4. **Confirm Reset**: Click "Reset" button to confirm
5. **Success Notification**: "Chatbot reset successfully!" message appears

### Delete Bot
1. **Click Delete Button**: Click the red "Delete" button
2. **Confirmation Modal**: "Are you sure you want to delete [Bot Name]?" modal appears
3. **Confirm Deletion**: Click "Yes, Delete" to confirm
4. **Bot Removal**: Bot is permanently deleted from dashboard
5. **Dashboard Update**: Bot card is removed from interface

## Create New Chat Bot

### Bot Creation Modal
The "Create Chatbot" modal provides comprehensive bot setup:

#### Basic Information
- **Profile Photo**: Circular blue icon with upload option
- **Bot Name**: Text input with "Enter Bot Name" placeholder
- **Bot Purpose**: Text input with "For Customer Support" placeholder
- **Required Fields**: All fields marked with red asterisks

#### Color Configuration
- **Main Color**: Blue swatch (#2563EB) for primary elements
- **Background**: White swatch (#FFFFFF) for chat background
- **Bot Chat Background**: Light blue swatch (#E9EFFD) for bot messages
- **Bot Chat Text Color**: Black swatch (#000000) for bot text
- **User Chat Background**: Blue swatch (#2563EB) for user messages
- **User Chat Text Color**: White swatch (#FFFFFF) for user text

#### Action Buttons
- **Cancel Button**: White button to cancel creation
- **Create Button**: Blue button to create new bot

## Reset Bot Modal

### Reset Configuration
The "Reset Chatbot" modal provides detailed reset options:

#### Reset Options
- **Delete FAQs**: Remove all FAQ entries
- **Delete Knowledge Hub**: Remove knowledge base content
- **Delete Documents**: Remove uploaded documents
- **Delete Conversation Logs**: Remove chat history

#### Warning System
- **Warning Message**: "All data will be permanently deleted if you reset. Please ensure you have backed up important information."
- **Red Warning Box**: Prominent warning about data loss
- **Confirmation Required**: User must explicitly confirm reset
- **Irreversible Action**: Clear indication that reset cannot be undone

#### Action Buttons
- **Cancel Button**: White button to cancel reset
- **Reset Button**: Red button to confirm reset

## Performance Monitoring

### Usage Analytics
- **Line Graphs**: Visual representation of bot usage over time
- **User Counts**: Track number of users for each bot
- **Activity Spikes**: Identify periods of high activity
- **Trend Analysis**: Monitor usage patterns and growth

### Status Management
- **Active Bots**: Green status indicators for active bots
- **Inactive Bots**: Red status indicators for inactive bots
- **Status Updates**: Real-time status updates
- **Performance Impact**: Monitor how status affects performance

### User Engagement
- **User Metrics**: Track user engagement with each bot
- **Conversation Data**: Monitor conversation quality and length
- **Feedback Analysis**: Analyze user feedback and satisfaction
- **Improvement Opportunities**: Identify areas for bot improvement

## Best Practices

### Bot Management
1. **Regular Monitoring**: Check bot performance regularly
2. **Status Management**: Keep bots active when needed
3. **Performance Analysis**: Monitor usage patterns and trends
4. **User Feedback**: Collect and analyze user feedback
5. **Continuous Improvement**: Update bots based on performance data

### Bot Creation
1. **Clear Naming**: Use descriptive names for bots
2. **Purpose Definition**: Clearly define bot purpose and scope
3. **Color Coordination**: Choose colors that work well together
4. **Testing**: Test new bots before making them active
5. **Documentation**: Document bot configurations and purposes

### Data Management
1. **Regular Backups**: Backup important bot data regularly
2. **Reset Planning**: Plan resets carefully to avoid data loss
3. **Performance Monitoring**: Monitor bot performance after changes
4. **User Communication**: Inform users about bot changes
5. **Rollback Plans**: Have rollback plans for major changes

## Technical Features

### Performance
- **Fast Loading**: Quick dashboard rendering and updates
- **Real-time Updates**: Live performance metrics and status
- **Responsive Design**: Works across all device sizes
- **Efficient Operations**: Quick bot management operations

### Data Management
- **Secure Operations**: Safe bot creation, editing, and deletion
- **Data Validation**: Input validation for all bot configurations
- **Backup Systems**: Automatic backup of bot configurations
- **Audit Logging**: Track all bot management operations

### Integration
- **Settings Integration**: Seamless navigation to bot settings
- **Performance Tracking**: Integration with analytics systems
- **User Management**: Integration with user management systems
- **Notification Systems**: Integration with notification systems

## Troubleshooting

### Common Issues
- **Bot Not Loading**: Check bot status and configuration
- **Performance Issues**: Monitor bot performance and usage
- **Reset Problems**: Verify reset options and data backup
- **Delete Issues**: Check bot dependencies and relationships

### Solutions
1. **Refresh Dashboard**: Reload page to resolve temporary issues
2. **Check Bot Status**: Verify bot is active and properly configured
3. **Monitor Performance**: Check usage patterns and performance metrics
4. **Contact Support**: Contact support for persistent issues

---

*This documentation covers the comprehensive Chat Bots Management system. The system provides powerful tools for managing multiple AI chat bots, monitoring their performance, and configuring their settings effectively.*

## Visual Examples

### Main Dashboard
![Chat Bots Dashboard](../../static/img/ai-feature/bot-list.png)
*The main Chat Bots dashboard showing all chat bots with performance metrics*

### Create Bot Modal
![Create Bot Modal](../../static/img/ai-feature/bot-create.png)
*Modal dialog for creating new chat bots with configuration options*

### Reset Bot Modal
![Reset Bot Modal](../../static/img/ai-feature/bot-reset.png)
*Modal dialog for resetting bot data with detailed options*

### Reset Success Notification
![Reset Success](../../static/img/ai-feature/bot-reset-sucess.png)
*Success notification confirming successful bot reset*

### Delete Confirmation
![Delete Confirmation](../../static/img/ai-feature/bot-delete.png)
*Confirmation modal for deleting chat bots*

### After Delete Success
![After Delete](../../static/img/ai-feature/bot-after-delete.png)
*Dashboard after successful bot deletion*

## Step-by-Step Visual Guide

### 1. Accessing Chat Bots Dashboard
![Chat Bots Dashboard](../../static/img/ai-feature/bot-list.png)
*Navigate to Dashboard > Chat Bots to view all chat bots in grid layout*

### 2. Creating New Chat Bots
![Create Bot Modal](../../static/img/ai-feature/bot-create.png)
*Click the blue "+ Add Chatbot" button to open the creation modal*

### 3. Resetting Bot Data
![Reset Bot Modal](../../static/img/ai-feature/bot-reset.png)
*Click the orange "reset" button to open the reset options modal*

### 4. Reset Success Confirmation
![Reset Success](../../static/img/ai-feature/bot-reset-sucess.png)
*Green success banner appears after successful reset operation*

### 5. Deleting Chat Bots
![Delete Confirmation](../../static/img/ai-feature/bot-delete.png)
*Click the red "Delete" button to open the deletion confirmation modal*

### 6. After Delete Success
![After Delete](../../static/img/ai-feature/bot-after-delete.png)
*Dashboard updates automatically after successful bot deletion*

