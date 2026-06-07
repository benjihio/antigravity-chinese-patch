// ANTIGRAVITY_ZH_PATCH_V2_START
// Antigravity Chinese Interface Patch
if (typeof window !== 'undefined' && !window.__ANTIGRAVITY_ZH_PATCHED__) {
        window.__ANTIGRAVITY_ZH_PATCHED__ = true;
        // 2. Comprehensive Chinese Translation Dictionary
        const translateMap = {
            // ==================== Base Navigation & Chat Sidebar ====================
            'Chat': '对话',
            'New Chat': '新对话',
            'Settings': '设置',
            'Workspace': '工作区',
            'Show all': '显示全部',
            'Not in Project': '未在项目中',
            'Conversations': '对话',
            'Shortcuts': '快捷方式',
            'Provide Feedback': '提供反馈',
            'New Conversation': '新建对话',
            'Conversation History': '对话历史',
            'Scheduled Tasks': '计划任务',
            'No active workspace': '当前无活动工作区',
            'Select a workspace': '选择工作区',
            'Tools': '工具',
            'History': '历史',
            'Files': '文件',
            'Permission Required': '需要权限批准',
            'Approved': '已同意',
            'Rejected': '已拒绝',
            'Allow': '允许',
            'Deny': '拒绝',
            'Reason': '理由',
            'Command': '命令',
            'Run': '运行',
            'Run Command': '运行命令',
            'Cancel': '取消',
            'Submit': '提交',
            'Confirm': '确定',
            'Delete': '删除',
            'Rename': '重命名',
            'Recent': '最近',
            'Models': '模型',
            'Select a model': '选择模型',
            'Auto-Run': '自动运行',
            'Agent Configuration': '智能体配置',
            'Active Agents': '活动智能体',
            'Google internal': '谷歌内部',
            'User Settings': '用户设置',
            'Theme': '主题',
            'Dark': '深色',
            'Light': '浅色',
            'System': '系统',
            'Ask Antigravity...': '问问 Antigravity...',
            'Search workspace...': '搜索工作区...',
            'Active Tasks': '活动任务',
            'No active tasks': '当前无活动任务',
            'Create New Project': '创建新项目',
            'Open Folder': '打开文件夹',
            'Choose a directory to open': '选择要打开的目录',

            // ==================== Settings Left Sidebar ====================
            'General': '通用',
            'Account': '账号',
            'Permissions': '权限',
            'Appearance': '外观',
            'Customizations': '自定义',
            'Browser': '浏览器',
            'App': '应用',
            'Projects': '项目',

            // ==================== General & Account Panels ====================
            'Manage your plan, credentials, and general preferences.': '管理你的计划、凭证和通用偏好设置。',
            'Enable Telemetry': '启用遥测数据收集',
            'When toggled on, Antigravity collects usage data to help Google enhance performance and features.': '启用后，Antigravity 将收集使用数据，以帮助 Google 提升性能与功能。',
            'Marketing Emails': '接收营销邮件',
            'Receive product updates, tips, and promotions from Google Antigravity via email.': '通过电子邮件接收产品更新、使用技巧和 Google Antigravity 的促销信息。',

            // ==================== Permissions Panel ====================
            'Configure global allowed and denied resource permissions.': '配置全局允许和拒绝的资源权限。',
            'Learn more.': '了解更多。',
            'Learn more': '了解更多',
            'Project-Specific Settings': '项目特定设置',
            'Modify scoped permissions, folders, and agent settings like Sandbox and Terminal Command Execution.': '修改特定项目的权限、文件夹和智能体设置（如沙箱与终端命令执行）。',
            'Go To Projects': '转到项目设置',
            'Go to Projects': '转到项目设置',
            'File Permissions': '文件权限',
            'File Access Rules': '文件访问规则',
            'Configure allowed and denied paths for file reads and writes.': '配置允许和拒绝的文件读写路径。',
            'Network Permissions': '网络权限',
            'Network Access Rules': '网络访问规则',
            'Configure allowed and denied URLs for reading.': '配置允许和拒绝的 URL 读取路径。',
            'Terminal & Tooling Permissions': '终端与工具权限',
            'Terminal Commands': '终端命令',
            'Configure allowed terminal commands.': '配置允许的终端命令。',
            'Commands Outside Sandbox': '沙箱外的命令',
            'Configure allowed commands outside the sandbox.': '配置允许在沙箱外执行的命令。',
            'MCP Tools': 'MCP 工具',
            'Configure external tools via Model Context Protocol.': '通过模型上下文协议 (Model Context Protocol) 配置外部工具。',
            'Open': '打开',

            // ==================== Appearance Panel ====================
            'Configure the agent\'s visual theme and display preferences.': '配置智能体的视觉主题和显示偏好设置。',
            'Chat Settings': '聊天设置',
            'Verbose agent chat': '详细智能体聊天',
            'Display and preserve intermediate thinking steps': '显示并保留中间思考步骤',
            'Select light, dark, or inherit system settings.': '选择浅色、深色，或继承系统设置。',
            'Light Theme': '浅色主题',
            'Dark Theme': '深色主题',
            'Preset': '预设',
            'Default Light': '默认浅色',
            'Default Dark': '默认深色',
            'Background': '背景色',
            'Foreground': '前景色',
            'Accent': '强调色',

            // ==================== Models Panel ====================
            'Configure AI models and view your quota.': '配置 AI 模型并查看你的额度。',
            'Refresh': '刷新',
            'Model Credits': '模型额度',
            'Enable AI Credit Overages': '启用 AI 额外额度',
            'When toggled on, Antigravity will use your AI credits to fulfill model requests once you\'re out of model quota. Antigravity will always use your model quota first before using AI credits.': '启用后，当你的模型基本配额用尽时，Antigravity 将使用你的 AI 额外额度来满足模型请求。Antigravity 总是会先使用模型基本配额，然后再使用 AI 额外额度。',
            'Model Quota': '模型额度配额',

            // ==================== Customizations Panel ====================
            'Configure default behaviors, skills, and MCP servers.': '配置默认行为、技能和 MCP 服务器。',
            'Token Usage': 'Token 使用量',
            'The breakdown below shows token usage from customizations like skills, rules, and MCP. If the budget is exceeded, large customizations will be truncated automatically.': '下方明细显示了技能、规则和 MCP 等自定义项的 Token 使用量。如果超出预算，大型自定义项将被自动截断。',

            // ==================== Browser Panel ====================
            'Browser Settings': '浏览器设置',
            'Configure the browser subagent. It requires Google Chrome to be installed. The browser subagent can be invoked by typing /browser in the conversation input box.': '配置浏览器子智能体。这需要安装 Google Chrome。可以通过在对话输入框中输入 /browser 来调用浏览器子智能体。',
            'Browser Javascript Execution Policy': '浏览器 Javascript 执行策略',
            'Controls whether the agent can run custom JavaScript to automate complex browser actions.': '控制智能体是否可以运行自定义 JavaScript 来自动化复杂的浏览器操作。',
            'Always Proceed': '始终执行',
            'Actuation Permissions': '执行权限',
            'Browser Actuation Rules': '浏览器执行规则',
            'Configure allowed and denied URLs for browser actuation.': '配置允许和拒绝的浏览器执行 URL。',
            'Edit': '编辑',

            // ==================== Accounts & Quotas ====================
            'Your Plan: Google AI Pro': '当前计划：Google AI Pro',
            'Your Plan:': '当前计划：',
            'You can upgrade to a Google AI Ultra plan to receive the highest rate limits.': '您可以升级到 Google AI Ultra 计划以获得最高的速率限制。',
            'Upgrade': '升级',
            'Email': '电子邮箱',
            'Sign Out': '退出登录',
            'By using this app, you agree to its Terms of Service': '使用此应用即表示您同意其服务条款',
            'Terms of Service': '服务条款',
            'View your available model quota and AI credits. Model quota refreshes periodically based on your plan. Enable AI Credit Overages to continue using models when your quota is exhausted.': '查看您可用的模型额度与 AI 额度。模型额度会根据您的计划定期刷新。启用 AI 额外额度可以在您的额度用尽时继续使用模型。',
            'Installed MCP Servers': '已安装的 MCP 服务器',
            'Skills': '技能',
            'Rules': '规则',

            // ==================== App Settings ====================
            'App Settings': '应用设置',
            'Manage application settings.': '管理应用设置。',
            'Prevent Sleep': '防止休眠',
            'Prevent the computer from sleeping while the app is running.': '在应用运行时防止电脑进入休眠状态。',
            'Keep In Menu Bar': '常驻菜单栏',
            'The app will be accessible from the menu bar and will keep running in the background when all windows are closed.': '当所有窗口关闭时，该应用仍可通过菜单栏进行访问，并将在后台保持运行。',
            'Notifications': '通知',
            'Notification Settings': '通知设置',
            'To modify notification settings, open your operating system\'s system preferences.': '要修改通知设置，请打开您操作系统的系统偏好设置。',
            'Open System Preferences': '打开系统偏好设置',

            // ==================== Keyboard Shortcuts ====================
            'Keyboard shortcuts for quick navigation and control.': '用于快速导航和控制的键盘快捷键。',
            'RECOMMENDED': '推荐',
            'Open Conversation Picker': '打开对话选择器',
            'Open File Search': '打开文件搜索',
            'Focus Input': '聚焦输入框',
            'NAVIGATION': '导航',
            'Go Back': '后退',
            'Go Forward': '前进',
            'File Picker': '文件选择器',
            'Select Project': '选择项目',
            'Select Previous Conversation': '选择上一个对话',
            'Select Next Conversation': '选择下一个对话',
            'Open Settings': '打开设置',
            'CONVERSATION': '对话',
            'Toggle Model Selector': '切换模型选择器',
            'Toggle Voice Recording': '切换语音录制',
            'Find in Pane': '在面板中查找',
            'LAYOUT CONTROLS': '布局控制',
            'Zoom In': '放大',
            'Zoom Out': '缩小',
            'Reset Zoom': '重置缩放',

            // ==================== Feedback ====================
            'Feedback Type': '反馈类型',
            'Bug Report': '问题报告',
            'Feature Request': '功能建议',
            'Auth and Billing': '认证与计费',
            'General Feedback': '常规反馈',
            'Description': '描述',
            'Please describe the issue in detail. The more actionable your feedback, the quicker our team can address your request. Some helpful information includes:': '请详细描述该问题。您的反馈越具体，我们的团队就能越快地处理您的请求。以下是一些有帮助的信息：',
            'Steps to reproduce the issue': '复现该问题的步骤',
            'Expected behavior': '预期行为',
            'Actual behavior': '实际行为',
            'Any error messages': '任何错误信息',
            'Any relevant information': '任何相关信息',
            'Describe the bug you encountered...': '描述您遇到的问题...',
            'Steps to Reproduce': '复现步骤',
            'Please list the steps to reproduce the issue': '请列出复现该问题的具体步骤',
            'Attach a screenshot (optional)': '添加屏幕截图 (可选)',
            'Attach Antigravity server logs': '附带 Antigravity 服务端日志',

            // ==================== Common Extras ====================
            'Theme Mode': '主题模式',
            'Zoom Level': '缩放比例',
            'Default': '默认',
            'Save Changes': '保存修改',
            'Discard Changes': '放弃修改',
            'Custom Theme Seeds': '自定义主题种子',
            'Use AI Credits': '使用 AI 额度',
            'Toggle Sidebar': '切换侧边栏',
            'Working': '正在运行...',

            // ==================== Review & Panel Tabs ====================
            'Toggle Auxiliary Pane': '切换辅助面板',
            'Overview': '概览',
            'Review': '代码评审',
            'Review Changes': '评审变更',
            'View Split Diff': '拆分对比查看',
            'View Unified Diff': '统一对比查看',
            'Subagents': '子智能体',
            'Files Changed': '已修改的文件',
            'Artifacts': '生成物',
            'Background Tasks': '后台任务',

            // ==================== High Frequency Diff & Git Actions ====================
            'Collapse All': '折叠全部',
            'Expand All': '展开全部',
            'File Tree': '文件树',
            'File List': '文件列表',
            'Toggle View': '切换视图',
            'Stage Changes': '暂存更改',
            'Unstage Changes': '取消暂存',
            'Commit': '提交',
            'Discard': '放弃更改',
            'Submit Review': '提交评审',
            'Add Comment': '添加评论',
            'Open file': '打开文件',
            'Open in IDE': '在 IDE 中打开',
            'Go to project': '转到项目',
            'Go to Project': '转到项目',
            'Go To Project': '转到项目',
            'gotoproject': '转到项目',
	            
            // ==================== Chat & Operations ====================
            'Clear History': '清空历史记录',
            'Delete Conversation': '删除当前对话',
            'Export Chat': '导出对话记录',
            'Copy Code': '复制代码',
            'Copy Message': '复制消息',
            'Copy message': '复制消息',
            'Copy Response': '复制回复',
            'Copy response': '复制回复',
            'Copy to clipboard': '复制到剪贴板',
            'Copied!': '已复制!',
            'Try Again': '重新生成',
            'Stop Generating': '停止生成',
            'Regenerate Response': '重新生成回复',
            'Regenerate response': '重新生成回复',
            'Edit Message': '编辑消息',
            'Edit message': '编辑消息',
            'Undo': '撤销',
            'Undo Changes': '撤销更改',
            'Undo changes': '撤销更改',
            'Undo changes up to this point': '撤销到此处的更改',
            'Good response': '好评',
            'Bad response': '差评',
            'Read aloud': '朗读',
            'Stop reading': '停止朗读',
	            
            // ==================== Background Tasks & Statuses ====================
            'Idle': '空闲',
            'Paused': '已暂停',
            'Completed': '已完成',
            'Failed': '已失败',
            'View logs': '查看日志',
            'Terminate': '终止',
            'Kill Task': '终止任务',

            // ==================== Outside Projects Config Panel ====================
            'Agent settings and permissions for conversations outside of projects.': '项目外对话的智能体设置与权限。',
            'Agent Settings': '智能体设置',
            'Security Preset': '安全预设',
            'Choose a predefined security preset for the agent. This controls terminal auto-execution policy, and file access policy.': '为智能体选择预设的安全级别。这控制了终端自动执行策略以及文件访问策略。',
            'Learn more about Turbo mode': '了解更多关于 Turbo 模式的信息',
            'Agent Behavior': '智能体行为',
            'Artifact Review Policy': '生成物评审策略',
            'Specifies Agent\'s behavior when asking for review on artifacts, which are documents it creates to enable a richer conversation experience.': '指定智能体在请求对生成物（其创建的文档，用于提供更丰富的对话体验）进行评审时的行为。',
            'Local Permissions': '本地权限',
            'Inherits from': '继承自',
            'Inherits from global settings. Local permissions have higher priority.': '继承自全局设置。本地权限拥有更高的优先级。',

            // ==================== Global Systems, Popups, and Prompts ====================
            'Regenerate': '重新生成',
            'Copy': '复制',
            'Copied': '已复制',
            'Retry': '重试',
            'Close': '关闭',
            'Are you sure you want to delete this conversation?': '您确定要删除此对话吗？',
            'Are you sure you want to clear history?': '您确定要清空历史记录吗？',
            'Clear all': '全部清除',
            'Folder': '文件夹',
            'Search files...': '搜索文件...',
            'No files found': '未找到文件',
            'Loading...': '加载中...',
            'MCP Servers': 'MCP 服务器',
            'Installed Servers': '已安装的服务器',
            'Add Server': '添加服务器',
            'Registry': '注册表',
            'Save Settings': '保存设置',
            'Reset Settings': '重置设置',
            'Font Size': '字体大小',
            'Editor Settings': '编辑器设置',
            'Tab Size': '缩进大小',
            'Keybindings': '按键绑定',
            'Allow Once': '仅允许一次',
            'Always Allow': '总是允许',
            'Allow for Session': '在本次会话中允许',
            'Always Deny': '总是拒绝',
            'Running command...': '正在运行命令...',
            'Submitting...': '正在提交...',
            'Feedback submitted successfully!': '反馈提交成功！',
            'Failed to submit feedback': '反馈提交失败',

            // ==================== Customizations & Build ====================
            'Build With Google Plugins': '使用 Google 插件构建',
            'Customize': '自定义',

            // ==================== Dropdown & Gear settings ====================
            'Project Settings': '项目设置',
            'New Conversation in Project': '在项目中新建对话',
            'Mark As Unread': '标记为未读',
            'Mark As Read': '标记为已读',
            'Pin Conversation': '置顶对话',
            'Unpin Conversation': '取消置顶',
            'Archive Conversation': '归档对话',
            'Archive': '归档',

            // ==================== Security Presets & Links (New) ====================
            'Full Machine': '整机访问',
            'Turbo Mode': 'Turbo 模式',
            'Requires manual review for all terminal commands and file accesses outside of the working folders.': '对工作文件夹之外的所有终端命令和文件访问均需要手动评审。',
            'All terminal commands require review. The agent can read or write to any file in the machine.': '所有终端命令都需要评审。智能体可以读写机器上的任何文件。',
            'Disables all safety barriers for maximal iteration velocity.': '禁用所有安全屏障以获得最大迭代速度。',
            'Custom': '自定义',
            'global settings': '全局设置',
            'global settings.': '全局设置。',
            'Local permissions have higher priority.': '本地权限拥有更高的优先级。',
            'Mcp Tools': 'MCP 工具',
            'Configure the browser subagent. It requires': '配置浏览器子智能体。它需要',
            'Google Chrome': '谷歌浏览器',
            'to be installed. The browser subagent can be invoked by typing /browser in the conversation input box.': '才能安装。您可以通过在对话输入框中输入 /browser 来调用浏览器子智能体。',
            'By using this app, you agree to its': '使用此应用即表示您同意其',
            'By using this app, you agree to its Terms of Service': '使用此应用即表示您同意其服务条款',
            'Recommended': '推荐',
            'recommended': '推荐',
            'New Project': '新建项目',
            'Quick Start': '快速开始',
            'No Project': '无项目',
            'Ask anything, @ to mention, / for actions': '问任何问题，输入 @ 提及，/ 执行操作',
            'Record Audio': '录制音频',
            'Add Context': '添加上下文',
            'Inherits from': '继承自',
            'global settings. Local permissions have higher priority. Learn more.': '全局设置。本地权限拥有更高的优先级。了解更多。',
            '. Local permissions have higher priority.': '. 本地权限拥有更高的优先级。',
            'Local permissions have higher priority.': '本地权限拥有更高的优先级。',
            'Local permissions have higher priority': '本地权限拥有更高的优先级',
            'NAVIGATION': '导航',
            'Navigation': '导航',
            'navigation': '导航',
            'CONVERSATION': '对话',
            'Conversation': '对话',
            'conversation': '对话',
            'LAYOUT CONTROLS': '布局控制',
            'Layout Controls': '布局控制',
            'layout controls': '布局控制',
            'Display Options': '显示选项',
            'Display options': '显示选项',
            'display options': '显示选项',
            'Edit Conversation Title': '编辑对话标题',
            'Edit conversation title': '编辑对话标题',
            'edit conversation title': '编辑对话标题',
            'Search': '搜索',
            'search': '搜索',
            'Model': '模型',
            'model': '模型',
            'Select Model': '选择模型',
            'select model': '选择模型',
            'Ran': '已运行',
            'Explored': '已探索',
            'Exploring': '正在探索',
            'Searched': '已搜索',
            'Analyzed': '已分析',
            'Edited': '已编辑',
            'Created': '已创建',
            'Deleted': '已删除',
            'Written': '已写入',
            'of the customization budget is available.': '的自定义预算可用。',
            'of the customization budget is available': '的自定义预算可用。',
            'Loading Antigravity': '正在加载 Antigravity',
            'Learn more about Turbo mode': '了解更多关于 Turbo 模式的信息',
            'Learn more about Turbo mode ': '了解更多关于 Turbo 模式的信息',
            'learn more about turbo mode': '了解更多关于 Turbo 模式的信息',
            'file changed': '个文件已更改',
            'files changed': '个文件已更改',
            'Task': '任务',
            'task': '任务',
            'File': '文件',
            'file': '文件',
            'finished': '已完成',
            'Schedule one-shot timer': '调度一次性定时器',
            'Timer has expired': '定时器已过期',
            'Schedule one-shot timer: Timer has expired': '调度一次性定时器：定时器已过期',
            'Extract app.asar finished': '解包 app.asar 已完成',
            'Extract app.asar': '解包 app.asar',
            'Loading': '正在加载',
            'loading': '正在加载',
            'Loading...': '正在加载...',
            'loading...': '正在加载...',
            'Hide breakdown': '隐藏明细',
            'hide breakdown': '隐藏明细',
            'Hide breakdowns': '隐藏明细',
            'hide breakdowns': '隐藏明细',
            'Copy path': '复制路径',
            'copy path': '复制路径',
            'Learn more about': '了解更多关于',
            'Learn more about ': '了解更多关于',
            'learn more about': '了解更多关于',
            'Turbo mode': 'Turbo 模式',
            'Turbo Mode': 'Turbo 模式',
            'turbo mode': 'Turbo 模式',
            'Turbo mode ': 'Turbo 模式 ',
            'Turbo Mode ': 'Turbo 模式 ',
            'Fast': '快速',
            'fast': '快速',
            'Unlimited': '无限制',
            'unlimited': '无限制',
            'Limited': '有限制',
            'limited': '有限制',
            'Unlimited time': '无时间限制',
            'unlimited time': '无时间限制',
            'Limited time': '限时',
            'limited time': '限时',
            'Premium': '高级',
            'premium': '高级',
            'Full Machine': '整机访问',
            'Manually customize individual settings.': '手动自定义个人设置。',
            'Disabled': '已禁用',
            'disabled': '已禁用',
            'Block all browser JavaScript execution.': '阻止所有浏览器 JavaScript 执行。',
            'Request Review': '请求评审',
            'request review': '请求评审',
            'Prompt for approval before running browser scripts.': '在运行浏览器脚本前提示审批。',
            'Allow full browser script execution without prompting.': '允许在无需提示的情况下执行完整的浏览器脚本。',
            'Browser Actuation Permissions': '浏览器执行权限',
            'Execute URLs': '执行 URL',
            'Allow/deny agent browser actuation access to specific URLs.': '允许/拒绝智能体对特定 URL 进行浏览器操作访问。',
            'Add': '添加',
            'add': '添加',
            'Full machine': '整机访问',
            'full machine': '整机访问',
            'FULL MACHINE': '整机访问',
            'A high-risk mode that disables all safety barriers. The agent operates with full system access, auto-executes all terminal commands, and reads or writes to all local files without review prompts.': '一种禁用所有安全屏障的高风险模式。智能体运行具有完整的系统访问权限，会自动执行所有终端命令，并读写所有本地文件而无需评审提示。',
            'Open IDE': '在 IDE 中打开',
            'open ide': '在 IDE 中打开',
            'Media': '媒体',
            'media': '媒体',
            'Mentions': '提及',
            'mentions': '提及',
            'Actions': '操作',
            'actions': '操作',
            'Search conversations...': '搜索对话...',
            'Search conversations': '搜索对话',
            'search conversations...': '搜索对话...',
            'Filter': '筛选',
            'filter': '筛选',
            'Running': '正在运行',
            'running': '正在运行',
            'Complete': '已完成',
            'complete': '已完成',
            'Archived': '已归档',
            'archived': '已归档',
            'Outside of Project': '项目外',
            'Outside of project': '项目外',
            'outside of project': '项目外',
            '+ New': '+ 新建',
            '+ new': '+ 新建',
            'New': '新建',
            'new': '新建',
            'Search tasks...': '搜索任务...',
            'Search tasks': '搜索任务',
            'search tasks...': '搜索任务...',
            'No scheduled tasks configured.': '当前未配置计划任务。',
            'no scheduled tasks configured.': '当前未配置计划任务。',
            'New Scheduled Task': '新建计划任务',
            'new scheduled task': '新建计划任务',
            'Name': '名称',
            'name': '名称',
            'Project': '项目',
            'project': '项目',
            'Schedule': '计划调度',
            'schedule': '计划调度',
            'Prompt': '提示词',
            'prompt': '提示词',
            'Enter task name': '输入任务名称',
            'Enter a prompt for the agent': '输入给智能体的提示词',
            'Daily': '每天',
            'daily': '每天',
            'around': '大约在',
            'All tasks run as Flash.': '所有任务均在 Flash 模型下运行。',
            'Add Scheduled Task': '添加计划任务',
            'Hourly': '每小时',
            'hourly': '每小时',
            'Weekly': '每周',
            'weekly': '每周',
            'Monthly': '每月',
            'monthly': '每月',
            'Are you sure you want to quit?': '您确定要退出吗？',
            'Are you sure you want to quit': '您确定要退出吗？',
            'There may be agents or background tasks running.': '当前可能有智能体或后台任务正在运行。',
            'There may be agents or background tasks running': '当前可能有智能体或后台任务正在运行。',
            'Quit': '退出',
            'quit': '退出',
            'Cancel (^C)': '取消 (^C)',
            'cancel (^c)': '取消 (^C)',
            'Send Queued Message': '发送已入队的消息',
            'send queued message': '发送已入队的消息',
            'Always Ask': '始终询问',
            'always ask': '始终询问',
            'Danger Zone': '危险区域',
            'danger zone': '危险区域',
            'Delete Project': '删除项目',
            'delete project': '删除项目',
            'Permanently delete this project and all of its conversations.': '永久删除此项目及其所有对话。',
            'permanently delete this project and all of its conversations.': '永久删除此项目及其所有对话。',
            'Manage project folders, agent settings, and permissions.': '管理项目文件夹、智能体设置和权限。',
            'Folders': '文件夹',
            'folders': '文件夹',
            '+ Add Folder': '+ 添加文件夹',
            '+ add folder': '+ 添加文件夹',
            'Add Folder': '添加文件夹',
            'add folder': '添加文件夹',
            // ==================== Security Presets & Options Tooltips ====================
            'Useful for typical development with an emphasis on security. It prioritizes safety over speed by requiring manual approval for all terminal commands and files outside the project directory.': '适用于强调安全性的典型开发。它通过对所有终端命令和项目目录外的文件进行手动批准来优先考虑安全性，而非速度。',
            'Useful for tasks that require file access across your full machine. The agent has full read and write access to all local files, but all proposed terminal commands require manual approval before running.': '适用于需要跨整机进行文件访问的任务。智能体对所有本地文件具有完整的读写权限，但所有拟议的终端命令均需要手动审核和批准方可运行。',
            'Outside of folders file access policy': '文件夹外文件访问策略',
            'outside of folders file access policy': '文件夹外文件访问策略',
            'Configures how the agent tries to access files outside of its working folders.': '配置智能体如何尝试访问其工作文件夹之外的文件。',
            'configures how the agent tries to access files outside of its working folders.': '配置智能体如何尝试访问其工作文件夹之外的文件。',
            'Terminal Command Auto Execution': '终端命令自动执行',
            'terminal command auto execution': '终端命令自动执行',
            'Controls whether terminal commands require your approval before running.': '控制终端命令在运行前是否需要您的批准。',
            'controls whether terminal commands require your approval before running.': '控制终端命令在运行前是否需要您的批准。',
            'Enable Sandbox Mode (Preview)': '启用沙箱模式 (预览)',
            'enable sandbox mode (preview)': '启用沙箱模式 (预览)',
            'Restricts agent tools to a secure, isolated local sandbox.': '将智能体工具限制在安全、隔离的本地沙箱中。',
            'restricts agent tools to a secure, isolated local sandbox.': '将智能体工具限制在安全、隔离的本地沙箱中。',
            'Require Review': '需要评审',
            'require review': '需要评审',
            'Require review': '需要评审',
            'Instantly create a new project and folder to start building.': '立即创建新项目和文件夹以开始构建。',
            'instantly create a new project and folder to start building.': '立即创建新项目和文件夹以开始构建。',
            'New standalone conversation, outside of projects.': '新建独立对话（项目外）。',
            'new standalone conversation, outside of projects.': '新建独立对话（项目外）。',
            'No subagents': '无子智能体',
            'no subagents': '无子智能体',
            'No background tasks': '无后台任务',
            'no background tasks': '无后台任务',
            'The conversation was compacted while generating this response.': '在生成此响应时，对话已被压缩。',
            'the conversation was compacted while generating this response.': '在生成此响应时，对话已被压缩。',
            'The conversation was compacted while generating this response. ⓘ': '在生成此响应时，对话已被压缩。 ⓘ',
            'the conversation was compacted while generating this response. ⓘ': '在生成此响应时，对话已被压缩。 ⓘ',
            'Listed permissions': '已列出权限',
            'listed permissions': '已列出权限',
            'Result': '结果',
            'result': '结果',
            'Results': '结果',
            'results': '结果',
            'download script': '下载脚本',
            'Download script': '下载脚本',
            'download': '下载',
            'script': '脚本',
            'There was a network issue connecting to the server, please try again.': '连接服务器时网络异常，请重试。',
            'Unknown: There was a network issue connecting to the server, please try again.': '未知错误：连接服务器时网络异常，请重试。',
            'Error Unknown: There was a network issue connecting to the server, please try again.': '未知错误：连接服务器时网络异常，请重试。',
            'Check final model download': '检查最终模型下载',
            'Check final model download finish': '检查最终模型下载完成',
            'finish': '完成',
        };

        const regexRules = [
            {
                pattern: /\bSchedule\s+([\s\S]+?):\s*Timer\s+has\s+expired/i,
                replace: (match, p1) => `调度 ${translateWithShortcut(p1) || p1}：定时器已过期`
            },
            {
                pattern: /\bTimed\s+(\d+)\s+seconds?\b/i,
                replace: (match, p1) => `定时 ${p1} 秒`
            },
            {
                pattern: /\b(\d+)\s+tasks?\b/i,
                replace: (match, p1) => `${p1} 个任务`
            },
            {
                pattern: /\bRun\s+([\s\S]+)/,
                replace: (match, p1) => `运行 ${translateWithShortcut(p1) || p1}`
            },
            {
                pattern: /\bRunning\s+([\s\S]+)/,
                replace: (match, p1) => `正在运行 ${translateWithShortcut(p1) || p1}`
            },
            {
                pattern: /\b(\d+)\s+results?\b/,
                replace: (match, p1) => `${p1} 个结果`
            },
            {
                pattern: /\bWorked for\s+(\d+)\s*h\s*(\d+)\s*m\s*(\d+)\s*s/,
                replace: (match, p1, p2, p3) => `已运行 ${p1} 小时 ${p2} 分钟 ${p3} 秒`
            },
            {
                pattern: /\bWorked for\s+(\d+)\s*m\s*(\d+)\s*s/,
                replace: (match, p1, p2) => `已运行 ${p1} 分钟 ${p2} 秒`
            },
            {
                pattern: /\bWorked for\s+(\d+)\s*h/,
                replace: (match, p1) => `已运行 ${p1} 小时`
            },
            {
                pattern: /\bWorked for\s+(\d+)\s*m/,
                replace: (match, p1) => `已运行 ${p1} 分钟`
            },
            {
                pattern: /\bWorked for\s+(\d+)\s*s/,
                replace: (match, p1) => `已运行 ${p1} 秒`
            },
            {
                pattern: /(\d+:\d+)\s+AM/,
                replace: (match, p1) => `上午 ${p1}`
            },
            {
                pattern: /(\d+:\d+)\s+PM/,
                replace: (match, p1) => `下午 ${p1}`
            },
            {
                pattern: /Full\s*Machine/,
                replace: '整机访问'
            },
            {
                pattern: /(\d+)\s+tasks?\s+running/,
                replace: (match, p1) => `${p1} 个任务正在运行`
            },
            {
                pattern: /([\s\S]+?)\s+finished/,
                replace: (match, p1) => `${translateWithShortcut(p1) || p1} 已完成`
            },
            {
                pattern: /([\s\S]+?)\s+finish/,
                replace: (match, p1) => `${translateWithShortcut(p1) || p1} 完成`
            },
            {
                pattern: /(\d+)\s+files?\s+changed\s+(\+\d+)\s+(-\d+)/,
                replace: (match, p1, p2, p3) => `${p1} 个文件已更改 ${p2} ${p3}`
            },
            {
                pattern: /(\d+)\s+files?\s+changed/,
                replace: (match, p1) => `${p1} 个文件已更改`
            },
            {
                pattern: /(\d+(?:\.\d+)?%)\s+of the customization budget is available\./,
                replace: (match, p1) => `${p1} 的自定义预算可用。`
            },
            {
                pattern: /of the customization budget is available\./,
                replace: '的自定义预算可用。'
            },
            {
                pattern: /of the customization budget is available/,
                replace: '的自定义预算可用。'
            },
            {
                pattern: /\bExplored\s+(\d+)\s+files?,\s+(\d+)\s+folders?/,
                replace: (match, p1, p2) => `已探索 ${p1} 个文件，${p2} 个文件夹`
            },
            {
                pattern: /\bExplored\s+(\d+)\s+files?/,
                replace: (match, p1) => `已探索 ${p1} 个文件`
            },
            {
                pattern: /\bExplored\s+(\d+)\s+folders?/,
                replace: (match, p1) => `已探索 ${p1} 个文件夹`
            },
            {
                pattern: /\b(\d+)\s+folders?\b/i,
                replace: (match, p1) => `${p1} 个文件夹`
            },
            {
                pattern: /\b(\d+)\s+files?\b/i,
                replace: (match, p1) => `${p1} 个文件`
            },
            {
                pattern: /\bRan\s+([\s\S]+)/,
                replace: (match, p1) => `已运行 ${translateWithShortcut(p1) || p1}`
            },
            {
                pattern: /\bExploring\s+(\d+)\s+files?,\s+(\d+)\s+searches?/,
                replace: (match, p1, p2) => `正在探索 ${p1} 个文件，${p2} 次搜索`
            },
            {
                pattern: /\bExploring\s+(\d+)\s+files?,\s+(\d+)\s+search/,
                replace: (match, p1, p2) => `正在探索 ${p1} 个文件，${p2} 次搜索`
            },
            {
                pattern: /\bExploring\s+(\d+)\s+files?/,
                replace: (match, p1) => `正在探索 ${p1} 个文件`
            },
            {
                pattern: /\bExploring\s+(\d+)\s+search/,
                replace: (match, p1) => `正在探索 ${p1} 次搜索`
            },
            {
                pattern: /\bSearched\s+([\s\S]+?)\s+(\d+)\s+results?/,
                replace: (match, p1, p2) => `已搜索 ${translateWithShortcut(p1) || p1}，获得 ${p2} 个结果`
            },
            {
                pattern: /\bAnalyzed\s+([\s\S]+)/,
                replace: (match, p1) => `已分析 ${translateWithShortcut(p1) || p1}`
            },
            {
                pattern: /\bEdited\s+([\s\S]+?)\s+(\+\d+)\s+(-\d+)/,
                replace: (match, p1, p2, p3) => `已编辑 ${translateWithShortcut(p1) || p1} ${p2} ${p3}`
            },
            {
                pattern: /\bCreated\s+(\d+)\s+files?/,
                replace: (match, p1) => `已创建 ${p1} 个文件`
            },
            {
                pattern: /\bDeleted\s+(\d+)\s+files?/,
                replace: (match, p1) => `已删除 ${p1} 个文件`
            },
            {
                pattern: /\bWritten\s+(\d+)\s+files?/,
                replace: (match, p1) => `已写入 ${p1} 个文件`
            },
            {
                pattern: /\bFailed to\s+([\s\S]+)/,
                replace: (match, p1) => `未能${translateWithShortcut(p1) || p1}`
            },
            {
                pattern: /See all \((\d+)\)/,
                replace: (match, p1) => `查看全部 (${p1})`
            },
            {
                pattern: /Thought for ([^\s]+s)(\s*>)?/,
                replace: (match, p1, p2) => `思考了 ${p1}${p2 || ''}`
            },
            {
                pattern: /Media \(Today ([^\)]+)\)/,
                replace: (match, p1) => `媒体 (今天 ${p1})`
            },
            {
                pattern: /Media \(Yesterday ([^\)]+)\)/,
                replace: (match, p1) => `媒体 (昨天 ${p1})`
            },
            {
                pattern: /Media \((\d{4}-\d{2}-\d{2}) ([^\)]+)\)/,
                replace: (match, p1, p2) => `媒体 (${p1} ${p2})`
            },
            {
                pattern: /Send feedback as (.*)/,
                replace: (match, p1) => `发送反馈身份为 ${p1}`
            },
            {
                pattern: /Go [Tt]o Projects/,
                replace: '转到项目设置'
            },
            {
                pattern: /\bGo\s+[Tt]o\s+[Pp]roject\b/,
                replace: '转到项目'
            },
            {
                pattern: /\bgotoproject\b/i,
                replace: '转到项目'
            },
            {
                pattern: /Undo changes up to this point/i,
                replace: '撤销到此处的更改'
            },
            {
                pattern: /Good response/i,
                replace: '好评'
            },
            {
                pattern: /Bad response/i,
                replace: '差评'
            },
            {
                pattern: /Refreshes in (\d+) hours?, (\d+) minutes?/,
                replace: (match, p1, p2) => `将在 ${p1} 小时 ${p2} 分钟后刷新`
            },
            {
                pattern: /Refreshes in (\d+) hours?/,
                replace: (match, p1) => `将在 ${p1} 小时后刷新`
            },
            {
                pattern: /Refreshes in (\d+) minutes?/,
                replace: (match, p1) => `将在 ${p1} 分钟后刷新`
            },
            {
                pattern: /Refreshes in (\d+) seconds?/,
                replace: (match, p1) => `将在 ${p1} 秒后刷新`
            },
            {
                pattern: /Your Plan:\s*/,
                replace: '当前计划：'
            },
            {
                pattern: /Learn more about Turbo mode\s*(ⓘ?)/,
                replace: '了解更多关于 Turbo 模式的信息 $1'
            },
            {
                pattern: /Show (\d+) breakdowns?/,
                replace: (match, p1) => `显示 ${p1} 个明细`
            }
        ];

        function translateWithShortcut(text) {
            if (!text || typeof text !== 'string') return null;
            const normalizedText = text.replace(/\s+/g, ' ');
            const trimmed = normalizedText.trim();
            if (translateMap[trimmed]) {
                if (text.includes(trimmed)) {
                    return text.replace(trimmed, translateMap[trimmed]);
                }
                return translateMap[trimmed];
            }
            
            const shortcutRegex = /\s+([⌘⌥⇧⌃\^]|\bCtrl\b|\bAlt\b|\bShift\b|\bCmd\b).+$/i;
            
            let core = trimmed;
            let prefixPart = '';
            let suffixPart = '';
            
            // 1. Strip keyboard shortcut suffix first
            const shortcutMatch = core.match(shortcutRegex);
            if (shortcutMatch) {
                suffixPart = core.substring(shortcutMatch.index) + suffixPart;
                core = core.substring(0, shortcutMatch.index).trim();
            }
            
            // 2. Strip prefix arrows/chevrons/colons/dots
            const prefixMatch = core.match(/^([>›→»˅˄∨^v▼▲▾▴▽△↓↑◄►◂▸◃▹‹<←«\s|:：]+)/);
            if (prefixMatch && prefixMatch[0].length < core.length) {
                prefixPart = prefixMatch[0];
                core = core.substring(prefixMatch[0].length).trim();
            }
            
            // 3. Strip suffix arrows/chevrons/colons/dots
            const suffixMatch = core.match(/([>›→»˅˄∨^v▼▲▾▴▽△↓↑◄►◂▸◃▹‹<←«\s|:：]+)$/);
            if (suffixMatch && suffixMatch[0].length < core.length) {
                suffixPart = suffixMatch[0] + suffixPart;
                core = core.substring(0, core.length - suffixMatch[0].length).trim();
            }
            
            // Ellipsis or trailing dots
            const trailingDotMatch = core.match(/(\s*(\.{3}|…))$/);
            if (trailingDotMatch && trailingDotMatch[0].length < core.length) {
                suffixPart = trailingDotMatch[0] + suffixPart;
                core = core.substring(0, core.length - trailingDotMatch[0].length).trim();
            }
            
            // Lookup cleaned core in map
            if (translateMap[core]) {
                return text.replace(trimmed, prefixPart + translateMap[core] + suffixPart);
            }
            
            // Match regex on cleaned core
            for (let rule of regexRules) {
                if (rule.pattern.test(core)) {
                    const replacedCore = core.replace(rule.pattern, rule.replace);
                    return text.replace(trimmed, prefixPart + replacedCore + suffixPart);
                }
            }
            
            // Match regex on original text (fallback)
            for (let rule of regexRules) {
                if (rule.pattern.test(text)) {
                    return text.replace(rule.pattern, rule.replace);
                }
            }
            
            return null;
        }

        const translatableAttributes = new Set([
            'title',
            'placeholder',
            'aria-label',
            'aria-description',
            'data-tooltip',
            'data-tooltip-content',
            'data-tip',
            'data-title',
            'data-label'
        ]);

        // 劫持 setAttribute 以拦截 DOM 属性更改
        const originalSetAttribute = Element.prototype.setAttribute;
        Element.prototype.setAttribute = function(name, value) {
            if (typeof value === 'string' && translatableAttributes.has(String(name).toLowerCase())) {
                const newVal = translateWithShortcut(value) || value;
                originalSetAttribute.call(this, name, newVal);
            } else {
                originalSetAttribute.call(this, name, value);
            }
        };

        // 劫持 HTMLElement.prototype.title 的 setter
        const originalTitleDescriptor = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'title');
        if (originalTitleDescriptor && originalTitleDescriptor.set) {
            Object.defineProperty(HTMLElement.prototype, 'title', {
                get: originalTitleDescriptor.get,
                set: function(val) {
                    const newVal = translateWithShortcut(val) || val;
                    originalTitleDescriptor.set.call(this, newVal);
                },
                configurable: true,
                enumerable: true
            });
        }

        // 劫持 HTMLInputElement 和 HTMLTextAreaElement.prototype.placeholder 的 setter
        const patchPlaceholder = function(proto) {
            const desc = Object.getOwnPropertyDescriptor(proto, 'placeholder');
            if (desc && desc.set) {
                Object.defineProperty(proto, 'placeholder', {
                    get: desc.get,
                    set: function(val) {
                        const newVal = translateWithShortcut(val) || val;
                        desc.set.call(this, newVal);
                    },
                    configurable: true,
                    enumerable: true
                });
            }
        };
        patchPlaceholder(HTMLInputElement.prototype);
        patchPlaceholder(HTMLTextAreaElement.prototype);

        function shouldSkipNode(node) {
            const ignoredSelector = [
                'code',
                'pre',
                'script',
                'style',
                'kbd',
                'samp',
                '[contenteditable="true"]',
                '.monaco-editor',
                '.cm-editor',
                '.xterm',
                '[data-language]',
                '[data-testid="code-block"]',
                '[data-testid="code-cell"]'
            ].join(',');

            if (node.nodeType === Node.ELEMENT_NODE) {
                return node.matches(ignoredSelector) || !!node.closest(ignoredSelector);
            }

            if (node.nodeType === Node.TEXT_NODE) {
                const parent = node.parentElement;
                return !!(parent && parent.closest(`${ignoredSelector},textarea,input`));
            }

            return false;
        }

        function translateNode(node) {
            if (shouldSkipNode(node)) {
                return;
            }
            if (node.nodeType === Node.TEXT_NODE) {
                let text = node.textContent;
                const translated = translateWithShortcut(text);
                if (translated) {
                    node.textContent = translated;
                }
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                // 处理已有属性
                if (node.placeholder) {
                    const translated = translateWithShortcut(node.placeholder);
                    if (translated) node.placeholder = translated;
                }
                if (node.title) {
                    const translated = translateWithShortcut(node.title);
                    if (translated) node.title = translated;
                }
                const ariaLabel = node.getAttribute('aria-label');
                if (ariaLabel) {
                    const translated = translateWithShortcut(ariaLabel);
                    if (translated) node.setAttribute('aria-label', translated);
                }
                for (const attrName of translatableAttributes) {
                    if (attrName === 'title' || attrName === 'placeholder' || attrName === 'aria-label') {
                        continue;
                    }
                    const attrValue = node.getAttribute(attrName);
                    if (attrValue) {
                        const translated = translateWithShortcut(attrValue);
                        if (translated) node.setAttribute(attrName, translated);
                    }
                }
                // 处理按钮 value 属性
                if (node.tagName === 'INPUT' && (node.type === 'button' || node.type === 'submit' || node.type === 'reset')) {
                    if (node.value) {
                        const translated = translateWithShortcut(node.value);
                        if (translated) node.value = translated;
                    }
                }
                // 递归处理子节点
                for (let child of node.childNodes) {
                    translateNode(child);
                }
            }
        }

        function initHack() {
            if (!document.documentElement) {
                setTimeout(initHack, 5);
                return;
            }

            // 1. Inject global serif font CSS. Keep common icon fonts untouched.
            const style = document.createElement('style');
            style.id = 'claude-font-override';
            style.textContent = `
                @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Noto+Serif+SC:wght@200..900&display=swap');
                :root {
                    --ag-zh-global-font: "Lora", "Noto Serif SC", Georgia, "Songti SC", serif;
                }
                *:not(.codicon):not([class*="codicon"]):not(.material-icons):not([class*="material-icons"]):not([class*="icon"]) {
                    font-family: var(--ag-zh-global-font) !important;
                }
            `;
            document.documentElement.appendChild(style);

            // 2. 首次全量翻译
            translateNode(document.documentElement);

            // 3. 监听动态加载的内容并自动翻译（监听整个 HTML 文档）
            const pendingNodes = new Set();
            let scheduled = false;
            const scheduleTranslate = (node) => {
                if (!node || shouldSkipNode(node)) {
                    return;
                }
                pendingNodes.add(node);
                if (scheduled) {
                    return;
                }
                scheduled = true;
                const defer = window.requestAnimationFrame || ((callback) => setTimeout(callback, 16));
                defer(() => {
                    scheduled = false;
                    const nodes = Array.from(pendingNodes);
                    pendingNodes.clear();
                    for (const pendingNode of nodes) {
                        translateNode(pendingNode);
                    }
                });
            };

            const observer = new MutationObserver((mutations) => {
                for (let mutation of mutations) {
                    if (mutation.type === 'childList') {
                        for (let node of mutation.addedNodes) {
                            scheduleTranslate(node);
                        }
                    } else if (mutation.type === 'characterData') {
                        scheduleTranslate(mutation.target);
                    }
                }
            });
            observer.observe(document.documentElement, { 
                childList: true, 
                subtree: true,
                characterData: true
            });
        }

        initHack();
}
// ANTIGRAVITY_ZH_PATCH_V2_END
