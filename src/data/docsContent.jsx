import { Book, Code, Terminal, Layers, Globe, Shield, Activity, Settings, Zap, Paperclip, MessageSquare, Database, Server, Package, Cpu, Inbox, Clock, Layout, GitMerge, Lock, Brain } from 'lucide-react';

import { intro } from './docs/intro.jsx';
import { install } from './docs/install.jsx';
import { quickstart } from './docs/quickstart.jsx';
import { cli } from './docs/cli.jsx';
import { routing } from './docs/routing.jsx';
import { context } from './docs/context.jsx';
import { configuration } from './docs/configuration.jsx';
import { middleware } from './docs/middleware.jsx';
import { authentication } from './docs/auth.jsx';
import { validation } from './docs/validation.jsx';
import { logging } from './docs/logging.jsx';
import { websockets } from './docs/websockets.jsx';
import { testing } from './docs/testing.jsx';
import { swagger } from './docs/swagger.jsx';
import { caching } from './docs/caching.jsx';
import { queue } from './docs/queue.jsx';
import { scheduler } from './docs/scheduler.jsx';
import { templates } from './docs/templates.jsx';
import { dependency_injection } from './docs/di.jsx';
import { deployment } from './docs/deployment.jsx';
import { best_practices } from './docs/best_practices.jsx';
import { internals } from './docs/internals.jsx';
import { security } from './docs/security.jsx';

export const sections = [
    {
        category: 'Getting Started', items: [
            { id: 'intro', title: 'Introduction', icon: <Book size={18} /> },
            { id: 'install', title: 'Installation', icon: <Terminal size={18} /> },
            { id: 'quickstart', title: 'Quick Start', icon: <Code size={18} /> },
            { id: 'cli', title: 'CLI Usage', icon: <Terminal size={18} /> },
        ]
    },
    {
        category: 'Core', items: [
            { id: 'routing', title: 'Routing', icon: <Globe size={18} /> },
            { id: 'context', title: 'Context API', icon: <Package size={18} /> },
            { id: 'configuration', title: 'Configuration', icon: <Settings size={18} /> },
            { id: 'dependency_injection', title: 'Dependency Injection', icon: <GitMerge size={18} /> },
        ]
    },
    {
        category: 'Features', items: [
            { id: 'middleware', title: 'Middleware', icon: <Layers size={18} /> },
            { id: 'authentication', title: 'Authentication', icon: <Shield size={18} /> },
            { id: 'validation', title: 'Validation', icon: <Activity size={18} /> },
            { id: 'logging', title: 'Logging', icon: <Paperclip size={18} /> },
            { id: 'templates', title: 'Templates', icon: <Layout size={18} /> },
        ]
    },
    {
        category: 'Advanced', items: [
            { id: 'internals', title: 'Internals', icon: <Brain size={18} /> },
            { id: 'caching', title: 'Caching', icon: <Cpu size={18} /> },
            { id: 'queue', title: 'Queue', icon: <Inbox size={18} /> },
            { id: 'scheduler', title: 'Scheduler', icon: <Clock size={18} /> },
            { id: 'websockets', title: 'WebSockets', icon: <Zap size={18} /> },
            { id: 'testing', title: 'Testing', icon: <Server size={18} /> },
            { id: 'swagger', title: 'API Docs (Swagger)', icon: <Database size={18} /> },
        ]
    },
    {
        category: 'Guides', items: [
            { id: 'deployment', title: 'Deployment', icon: <Server size={18} /> },
            { id: 'security', title: 'Security', icon: <Lock size={18} /> },
            { id: 'best_practices', title: 'Best Practices', icon: <Activity size={18} /> },
        ]
    }
];

export const docsContent = {
    intro,
    install,
    quickstart,
    cli,
    routing,
    context,
    configuration,
    middleware,
    authentication,
    validation,
    logging,
    websockets,
    testing,
    swagger,
    caching,
    queue,
    scheduler,
    templates,
    dependency_injection,
    deployment,
    best_practices,
    internals,
    security
};
