import React from 'react';
import { SlideData, SlideType } from '../../engine/types';
import {
  ShieldCheck,
  Lock,
  Users,
  BadgeCheck,
  Activity,
  Rocket,
  Zap,
  UserCircle2,
  Coins,
  BookOpen
} from 'lucide-react';

export const SLIDES: SlideData[] = [
  {
    id: 1,
    type: SlideType.TITLE,
    title: 'Dify SaaS版 vs 企业版怎么选',
    subtitle: '差异解读 + 决策要点',
    footer: '产品版本选择指南'
  },
  {
    id: 2,
    type: SlideType.CONTENT,
    title: '一句话看定位',
    content: [
      '**SaaS版**：轻量、快捷、低成本的AI应用搭建，像云服务超市；开箱即用，适合快速试错或小规模运行。',
      '**企业版**：安全、定制、规模化的AI中台，像企业专属AI基地；满足合规、团队管理、品牌化与高稳定性需求。'
    ]
  },
  {
    id: 3,
    type: SlideType.MATRIX,
    title: '关键区别一张表',
    subtitle: '核心关注点对比',
    tableData: {
      headers: ['关注点', 'SaaS版', '企业版'],
      rows: [
        ['适用对象', '中小企业、初创团队、海外轻量需求', '金融/医疗/制造等中大型企业，高合规行业'],
        ['数据安全', '数据托管在Dify云环境', '数据私有化部署（本地/私有云），不出内网'],
        ['功能能力', '知识库、对话机器人等基础搭建能力', 'SSO、多租户、品牌定制、高可用部署'],
        ['部署方式', '无需自建，网页直接用', '需自建/托管，支持K8s等'],
        ['支持服务', '通用邮件/聊天支持', '专属客服，优先响应，SLA保障'],
        ['成本模式', '订阅制，按月/年计费，按需使用', '定制年付（国内约30万起），成员/数据不设限']
      ]
    }
  },
  {
    id: 4,
    type: SlideType.FOCUS_COLS,
    title: '满足下列任一，优先选企业版',
    subtitle: '安全、品牌、规模优先',
    items: [
      {
        title: '数据与规模要求高',
        description: '数据留在内网，且需稳定支撑大规模用户/团队。',
        icon: <ShieldCheck className="text-white" />,
        tags: ['Enterprise']
      },
      {
        title: '数据敏感/合规严格',
        description: '客户信息、业务机密必须自有环境保管。',
        icon: <Lock />
      },
      {
        title: '团队大且要分级权限',
        description: '多部门协作，需要细粒度角色与审计。',
        icon: <Users />
      },
      {
        title: '要做品牌化体验',
        description: 'LOGO/UI可定制，输出对外一致的企业形象。',
        icon: <BadgeCheck />
      },
      {
        title: '大规模上线要高可用',
        description: '面向上万用户，要求稳定、可扩展、不宕机。',
        icon: <Activity />
      }
    ]
  },
  {
    id: 5,
    type: SlideType.FOCUS_COLS,
    title: '轻量试错/小团队，首选SaaS版',
    subtitle: '追求快速验证与低成本',
    items: [
      {
        title: '快启动、低门槛',
        description: '零部署、按需付费，快速从想法到可用原型。',
        icon: <Rocket className="text-white" />,
        tags: ['SaaS']
      },
      {
        title: '先做PoC再迭代',
        description: '快速验证AI效果，适合内部小范围试用。',
        icon: <Zap />
      },
      {
        title: '小团队简单协作',
        description: '≤10人，不需要复杂的权限体系。',
        icon: <UserCircle2 />
      },
      {
        title: '预算有限，按需付费',
        description: '用多少付多少，现金流友好。',
        icon: <Coins />
      },
      {
        title: '数据不敏感',
        description: '如公开知识库问答，对内对外均可轻量使用。',
        icon: <BookOpen />
      }
    ]
  },
  {
    id: 6,
    type: SlideType.MACRO_FOCUS,
    title: '便利店 vs 定制超市',
    content: [
      '**轻量需求 = 便利店（SaaS版）**：直接取用、成本可控、迭代快。',
      '**企业级需求 = 定制超市（企业版）**：资源/架构按你要求搭建，安全与规模优先。',
      '不确定时：先用SaaS验证，再按合规与规模升级到企业版。'
    ]
  },
  {
    id: 7,
    type: SlideType.END,
    title: 'Q&A',
    subtitle: '欢迎聊聊你的场景，我们一起匹配最佳版本',
    footer: 'Email: support@dify.ai | GitHub: difyai'
  }
];

