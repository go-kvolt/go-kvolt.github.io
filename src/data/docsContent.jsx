import { Book, Code, Terminal, Layers, Globe, Shield, Activity, Settings, Zap, Paperclip, MessageSquare, Database, Server, Package, Cpu, Inbox, Clock, Layout, GitMerge, Lock, Brain } from 'lucide-react';

import { intro } from './docs/intro';
import { install } from './docs/install';
import { quickstart } from './docs/quickstart';
import { cli } from './docs/cli';
import { routing } from './docs/routing';
import { context } from './docs/context';
import { configuration } from './docs/configuration';
import { middleware } from './docs/middleware';
import { authentication } from './docs/auth';
import { validation } from './docs/validation';
import { logging } from './docs/logging';
import { websockets } from './docs/websockets';
import { testing } from './docs/testing';
import { swagger } from './docs/swagger';
import { caching } from './docs/caching';
import { queue } from './docs/queue';
import { scheduler } from './docs/scheduler';
import { templates } from './docs/templates';
import { dependency_injection } from './docs/di';
import { deployment } from './docs/deployment';
import { best_practices } from './docs/best_practices';
import { internals } from './docs/internals';
import { security } from './docs/security';

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
