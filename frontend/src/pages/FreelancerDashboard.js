import React, { useState } from 'react';
import { Search, Bell, Play, Pause, SkipBack, SkipForward, Repeat, Shuffle, ChevronRight, Home as HomeIcon, Grid, Folder, Star, Mail, FileText, DollarSign, User, MessageCircle, Settings, HelpCircle, Heart, AlertCircle  } from 'lucide-react';
import heroPersonImg from '../assets/FreelancerDashboard/hero-person.png';
import contractPersonImg from '../assets/FreelancerDashboard/contract-person.png';
import FreelancerDispute from './FreelancerDispute';


export default function FreelancerDashboard() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');

  const styles = {
    container: {
      minHeight: '100vh',
      height: '100vh',
      background: '#019523',
      padding: '0',
      display: 'flex',
      overflow: 'hidden'
    },
    mainWrapper: {
      display: 'flex',
      width: '100%',
      height: '100vh',
      gap: '0',
      overflow: 'hidden'
    },
    sidebar: {
      width: '240px',
      background: '#017a1c',
      padding: '24px 16px',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      height: '100vh',
      overflowY: 'auto',
      flexShrink: 0
    },
    profile: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '8px'
    },
    avatar: {
      width: '48px',
      height: '48px',
      background: 'linear-gradient(135deg, #fbbf24, #86efac)',
      borderRadius: '50%'
    },
    profileText: {
      fontWeight: 'bold',
      fontSize: '16px'
    },
    profileSubtext: {
      fontSize: '13px',
      opacity: 0.9
    },
    navSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px'
    },
    navTitle: {
      fontSize: '14px',
      fontWeight: 'bold',
      marginBottom: '8px',
      opacity: 0.9
    },
    navItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '10px 12px',
      borderRadius: '10px',
      cursor: 'pointer',
      transition: 'background 0.2s',
      fontSize: '14px'
    },
    navItemActive: {
      background: 'rgba(255, 255, 255, 0.15)'
    },
    contentWrapper: {
      flex: 1,
      display: 'flex',
      padding: '24px',
      gap: '20px',
      background: '#019523',
      overflow: 'hidden',
      maxWidth: 'calc(100vw - 240px)'
    },
    mainContent: {
      flex: 1,
      background: 'white',
      borderRadius: '24px',
      padding: '32px',
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      overflowY: 'auto',
      minWidth: 0
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '8px',
      flexWrap: 'wrap',
      gap: '16px'
    },
    title: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#1f2937'
    },
    searchContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      flexWrap: 'wrap'
    },
    searchWrapper: {
      position: 'relative'
    },
    searchInput: {
      padding: '10px 16px 10px 40px',
      borderRadius: '24px',
      border: '1px solid #e5e7eb',
      width: '280px',
      fontSize: '13px',
      outline: 'none',
      background: '#f9fafb'
    },
    searchIcon: {
      position: 'absolute',
      left: '14px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#9ca3af'
    },
    iconButton: {
      width: '36px',
      height: '36px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      borderRadius: '50%',
      border: 'none',
      background: 'transparent'
    },
    userSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    userName: {
      fontWeight: '600',
      color: '#1f2937',
      fontSize: '14px'
    },
    userAvatar: {
      width: '36px',
      height: '36px',
      background: 'linear-gradient(135deg, #fbbf24, #86efac)',
      borderRadius: '50%'
    },
    heroSection: {
      background: 'linear-gradient(135deg, #017a1c, #019523)',
      borderRadius: '20px',
      padding: '48px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
      gap: '32px',
      minHeight: '280px'
    },
    heroContent: {
      flex: 1,
      zIndex: 2,
      minWidth: 0
    },
    heroTitle: {
      fontSize: '42px',
      fontWeight: 'bold',
      marginBottom: '20px',
      lineHeight: '1.2'
    },
    heroText: {
      fontSize: '15px',
      lineHeight: '1.7',
      marginBottom: '28px',
      opacity: 0.95
    },
    heroButtons: {
      display: 'flex',
      gap: '12px',
      flexWrap: 'wrap'
    },
    button: {
      padding: '12px 28px',
      borderRadius: '24px',
      border: 'none',
      cursor: 'pointer',
      fontWeight: '600',
      fontSize: '14px',
      transition: 'transform 0.2s'
    },
    buttonPrimary: {
      background: 'white',
      color: '#019523'
    },
    buttonSecondary: {
      background: 'transparent',
      color: 'white',
      border: '2px solid white'
    },
    heroImageContainer: {
      position: 'relative',
      zIndex: 2,
      flexShrink: 0,
      width: '200px',
      height: '200px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    sectionTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '16px'
    },
    filterBar: {
      display: 'flex',
      gap: '10px',
      marginBottom: '20px',
      flexWrap: 'wrap'
    },
    filterButton: {
      padding: '8px 20px',
      borderRadius: '20px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '13px',
      fontWeight: '500',
      transition: 'all 0.2s'
    },
    filterActive: {
      background: '#1f2937',
      color: 'white'
    },
    filterInactive: {
      background: '#f3f4f6',
      color: '#6b7280'
    },
    projectsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '20px',
      marginBottom: '24px'
    },
    projectCard: {
      background: '#ffffff',
      borderRadius: '14px',
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'transform 0.2s, box-shadow 0.2s',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      border: '1px solid #f3f4f6'
    },
    projectImage: {
      width: '100%',
      height: '160px',
      background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    projectBadge: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      background: 'rgba(0, 0, 0, 0.75)',
      color: 'white',
      padding: '5px 10px',
      borderRadius: '14px',
      fontSize: '12px',
      fontWeight: '600',
      display: 'flex',
      alignItems: 'center',
      gap: '5px'
    },
    projectContent: {
      padding: '16px'
    },
    projectTitle: {
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '6px',
      fontSize: '15px'
    },
    projectClient: {
      fontSize: '13px',
      color: '#6b7280',
      marginBottom: '12px'
    },
    projectTag: {
      display: 'inline-block',
      background: '#1f2937',
      color: 'white',
      padding: '5px 14px',
      borderRadius: '14px',
      fontSize: '12px',
      fontWeight: '500'
    },
    activeContract: {
      background: 'linear-gradient(135deg, #017a1c, #019523)',
      borderRadius: '20px',
      padding: '28px 36px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'white',
      gap: '24px',
      flexWrap: 'wrap'
    },
    contractContent: {
      display: 'flex',
      gap: '24px',
      alignItems: 'center',
      flex: 1,
      minWidth: 0
    },
    contractImageContainer: {
      background: 'rgba(255, 255, 255, 0.15)',
      borderRadius: '14px',
      padding: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      width: '120px',
      height: '120px'
    },
    contractInfo: {
      flex: 1,
      minWidth: 0
    },
    contractTitle: {
      fontSize: '22px',
      fontWeight: 'bold',
      marginBottom: '6px'
    },
    contractDetails: {
      fontSize: '13px',
      opacity: 0.95,
      marginBottom: '20px'
    },
    timeDisplay: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '13px',
      marginBottom: '10px',
      fontWeight: '500'
    },
    progressBar: {
      width: '100%',
      height: '5px',
      background: 'rgba(255, 255, 255, 0.3)',
      borderRadius: '3px',
      overflow: 'hidden',
      marginBottom: '20px'
    },
    progressFill: {
      width: '60%',
      height: '100%',
      background: 'white',
      borderRadius: '3px'
    },
    controls: {
      display: 'flex',
      gap: '12px',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    controlButton: {
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      borderRadius: '50%',
      border: 'none',
      background: 'rgba(255, 255, 255, 0.2)',
      color: 'white',
      transition: 'background 0.2s'
    },
    playButton: {
      width: '56px',
      height: '56px',
      background: 'white',
      color: '#019523'
    },
    rightSidebar: {
      width: '280px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      flexShrink: 0,
      overflowY: 'auto'
    },
    sidebarCard: {
      background: 'white',
      borderRadius: '20px',
      padding: '24px'
    },
    clientList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    },
    clientItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '10px',
      borderRadius: '10px',
      background: '#f9fafb',
      cursor: 'pointer',
      transition: 'background 0.2s'
    },
    clientAvatar: {
      width: '40px',
      height: '40px',
      background: 'linear-gradient(135deg, #fbbf24, #86efac)',
      borderRadius: '50%',
      flexShrink: 0
    },
    clientInfo: {
      flex: 1,
      minWidth: 0
    },
    clientName: {
      fontWeight: '600',
      fontSize: '13px',
      color: '#1f2937',
      marginBottom: '3px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },
    clientProject: {
      fontSize: '12px',
      color: '#6b7280',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },
    topicList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    },
    topicItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px',
      borderRadius: '10px',
      background: '#f9fafb',
      cursor: 'pointer',
      transition: 'background 0.2s'
    },
    topicLeft: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      flex: 1,
      minWidth: 0
    },
    topicIcon: {
      width: '36px',
      height: '36px',
      background: 'linear-gradient(135deg, #fbbf24, #86efac)',
      borderRadius: '8px',
      flexShrink: 0
    },
    topicInfo: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      minWidth: 0
    },
    topicTag: {
      fontWeight: '600',
      fontSize: '13px',
      color: '#1f2937',
      marginBottom: '3px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },
    topicAuthor: {
      fontSize: '12px',
      color: '#6b7280',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: '0 8px'
    },
    tableHeader: {
      background: '#f9fafb',
      fontSize: '13px',
      fontWeight: '600',
      color: '#6b7280',
      textAlign: 'left'
    },
    tableHeaderCell: {
      padding: '12px 16px',
      borderTop: '1px solid #e5e7eb',
      borderBottom: '1px solid #e5e7eb'
    },
    tableHeaderCellFirst: {
      borderLeft: '1px solid #e5e7eb',
      borderTopLeftRadius: '12px',
      borderBottomLeftRadius: '12px'
    },
    tableHeaderCellLast: {
      borderRight: '1px solid #e5e7eb',
      borderTopRightRadius: '12px',
      borderBottomRightRadius: '12px'
    },
    tableRow: {
      background: 'white',
      transition: 'all 0.2s',
      cursor: 'pointer'
    },
    tableCell: {
      padding: '16px',
      fontSize: '14px',
      color: '#1f2937',
      borderTop: '1px solid #f3f4f6',
      borderBottom: '1px solid #f3f4f6'
    },
    tableCellFirst: {
      borderLeft: '1px solid #f3f4f6',
      borderTopLeftRadius: '12px',
      borderBottomLeftRadius: '12px'
    },
    tableCellLast: {
      borderRight: '1px solid #f3f4f6',
      borderTopRightRadius: '12px',
      borderBottomRightRadius: '12px'
    },
    userCell: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    tableAvatar: {
      width: '40px',
      height: '40px',
      background: 'linear-gradient(135deg, #fbbf24, #86efac)',
      borderRadius: '50%',
      flexShrink: 0
    },
    proposalCard: {
      background: '#ffffff',
      borderRadius: '14px',
      padding: '20px',
      marginBottom: '16px',
      border: '1px solid #f3f4f6',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
    },
    proposalHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'start',
      marginBottom: '12px'
    },
    proposalTitle: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '4px'
    },
    proposalClient: {
      fontSize: '13px',
      color: '#6b7280'
    },
    proposalStatus: {
      padding: '4px 12px',
      borderRadius: '12px',
      fontSize: '12px',
      fontWeight: '600'
    },
    statusPending: {
      background: '#fef3c7',
      color: '#92400e'
    },
    statusAccepted: {
      background: '#d1fae5',
      color: '#065f46'
    },
    statusRejected: {
      background: '#fee2e2',
      color: '#991b1b'
    },
    proposalDescription: {
      fontSize: '14px',
      color: '#4b5563',
      marginBottom: '12px',
      lineHeight: '1.6'
    },
    proposalFooter: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: '12px',
      borderTop: '1px solid #f3f4f6'
    },
    proposalPrice: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#019523'
    },
    proposalDate: {
      fontSize: '13px',
      color: '#6b7280'
    },
    contractCard: {
      background: '#ffffff',
      borderRadius: '14px',
      padding: '20px',
      marginBottom: '16px',
      border: '1px solid #f3f4f6',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
    },
    contractHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'start',
      marginBottom: '16px'
    },
    contractProjectTitle: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '4px'
    },
    contractClientName: {
      fontSize: '13px',
      color: '#6b7280'
    },
    contractBadge: {
      padding: '4px 12px',
      borderRadius: '12px',
      fontSize: '12px',
      fontWeight: '600',
      background: '#d1fae5',
      color: '#065f46'
    },
    contractMeta: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '16px',
      marginBottom: '16px'
    },
    metaItem: {
      display: 'flex',
      flexDirection: 'column'
    },
    metaLabel: {
      fontSize: '12px',
      color: '#6b7280',
      marginBottom: '4px'
    },
    metaValue: {
      fontSize: '14px',
      fontWeight: '600',
      color: '#1f2937'
    },
    contractProgress: {
      marginTop: '16px'
    },
    progressLabel: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '13px',
      color: '#6b7280',
      marginBottom: '8px'
    },
    earningsCard: {
      background: 'linear-gradient(135deg, #017a1c, #019523)',
      borderRadius: '20px',
      padding: '32px',
      color: 'white',
      marginBottom: '24px'
    },
    earningsTitle: {
      fontSize: '16px',
      fontWeight: '600',
      marginBottom: '8px',
      opacity: 0.9
    },
    earningsAmount: {
      fontSize: '42px',
      fontWeight: 'bold',
      marginBottom: '20px'
    },
    earningsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '20px'
    },
    earningsStat: {
      display: 'flex',
      flexDirection: 'column'
    },
    statLabel: {
      fontSize: '13px',
      opacity: 0.9,
      marginBottom: '4px'
    },
    statValue: {
      fontSize: '20px',
      fontWeight: 'bold'
    },
    transactionList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    },
    transactionItem: {
      background: '#ffffff',
      borderRadius: '14px',
      padding: '16px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      border: '1px solid #f3f4f6'
    },
    transactionInfo: {
      display: 'flex',
      flexDirection: 'column'
    },
    transactionTitle: {
      fontSize: '14px',
      fontWeight: '600',
      color: '#1f2937',
      marginBottom: '4px'
    },
    transactionDate: {
      fontSize: '12px',
      color: '#6b7280'
    },
    transactionAmount: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#019523'
    }
  };

  const navItems = [
    { icon: <HomeIcon size={18} />, label: 'Home', page: 'dashboard' },
    { icon: <Bell size={18} />, label: 'Notifications', page: 'notifications' },
    { icon: <Folder size={18} />, label: 'Browse Projects', page: 'browse' },
    { icon: <AlertCircle size={18} />, label: 'Dispute Center', page: 'disputes' },
  ];

  const libraryItems = [
    { icon: <Mail size={18} />, label: 'My Proposals', page: 'proposals' },
    { icon: <FileText size={18} />, label: 'Active Contracts', page: 'contracts' },
    { icon: <DollarSign size={18} />, label: 'Earnings/Wallet', page: 'earnings' },
    { icon: <User size={18} />, label: 'Profile & Portfolio', page: 'portfolio' }
  ];

  const supportItems = [
    { icon: <MessageCircle size={18} />, label: 'Community Chat', page: 'chat' },
    { icon: <Settings size={18} />, label: 'Setting', page: 'settings' },
    { icon: <HelpCircle size={18} />, label: 'Help & Support', page: 'help' }
  ];

  const projects = [
    { title: 'E-Commerce Platform Redesign', client: 'TechStart Inc', tag: 'Web Design', views: '324', budget: '$2,500' },
    { title: 'Mobile App UI/UX Design', client: 'Digital Dynamics', tag: 'UI/UX', views: '287', budget: '$3,200' },
    { title: 'Brand Identity Package', client: 'StartUp Ventures', tag: 'Branding', views: '412', budget: '$1,800' },
    { title: 'Landing Page Development', client: 'Marketing Pro', tag: 'Web Dev', views: '198', budget: '$1,200' },
    { title: 'Social Media Graphics', client: 'Creative Agency', tag: 'Design', views: '256', budget: '$800' },
    { title: 'WordPress Theme Customization', client: 'Blog Masters', tag: 'WordPress', views: '167', budget: '$950' },
    { title: 'Logo Design & Style Guide', client: 'Fashion Forward', tag: 'Branding', views: '389', budget: '$1,500' },
    { title: 'React Dashboard Development', client: 'SaaS Solutions', tag: 'React', views: '445', budget: '$4,200' }
  ];

  const clients = [
    { name: 'TechStart Inc', project: 'E-Commerce Platform', active: true },
    { name: 'Digital Dynamics', project: 'Mobile App Design', active: true },
    { name: 'StartUp Ventures', project: 'Brand Identity', active: false },
    { name: 'Marketing Pro', project: 'Landing Pages', active: true },
    { name: 'Creative Agency', project: 'Social Media', active: false },
    { name: 'Blog Masters', project: 'WordPress Sites', active: true }
  ];

  const topics = [
    { tag: '#WebDesign2025', author: 'Design Community', posts: '1.2k posts' },
    { tag: '#ReactDevelopment', author: 'Dev Hub', posts: '856 posts' },
    { tag: '#UIUXTrends', author: 'UX Collective', posts: '2.3k posts' }
  ];

  const notifications = [
    { name: 'Sarah Johnson', username: '@sarahjohnson', role: 'Client', activity: 'Reviewed your proposal', date: '2 hours ago' },
    { name: 'Michael Chen', username: '@mchen', role: 'Client', activity: 'Sent you a message', date: '5 hours ago' },
    { name: 'Emma Williams', username: '@emmaw', role: 'Freelancer', activity: 'Liked your portfolio', date: '1 day ago' },
    { name: 'David Martinez', username: '@davidm', role: 'Client', activity: 'Posted a new project', date: '1 day ago' },
    { name: 'Lisa Anderson', username: '@lisaa', role: 'Client', activity: 'Accepted your proposal', date: '2 days ago' },
    { name: 'James Taylor', username: '@jamest', role: 'Freelancer', activity: 'Started following you', date: '3 days ago' },
    { name: 'Sophie Brown', username: '@sophieb', role: 'Client', activity: 'Left you a review', date: '3 days ago' },
    { name: 'Robert Wilson', username: '@robertw', role: 'Client', activity: 'Invited you to project', date: '4 days ago' }
  ];

  const portfolioProjects = [
    { name: 'E-Commerce Dashboard', role: 'Lead Designer', company: 'TechStart Inc', date: 'Oct 2024', status: 'Completed' },
    { name: 'Mobile Banking App', role: 'UI/UX Designer', company: 'FinTech Solutions', date: 'Sep 2024', status: 'Completed' },
    { name: 'Restaurant Website', role: 'Full Stack Dev', company: 'Local Eats', date: 'Aug 2024', status: 'Completed' },
    { name: 'Fitness Tracking App', role: 'Frontend Dev', company: 'HealthTech Pro', date: 'Jul 2024', status: 'Completed' },
    { name: 'Real Estate Platform', role: 'Lead Developer', company: 'Property Hub', date: 'Jun 2024', status: 'Completed' },
    { name: 'Educational Portal', role: 'UI Designer', company: 'EduLearn', date: 'May 2024', status: 'Completed' },
    { name: 'Travel Booking Site', role: 'Full Stack Dev', company: 'Wanderlust Co', date: 'Apr 2024', status: 'Completed' },
    { name: 'Social Media Dashboard', role: 'React Developer', company: 'Social Buzz', date: 'Mar 2024', status: 'Completed' }
  ];

  const proposals = [
    { 
      title: 'E-Commerce Platform Redesign', 
      client: 'TechStart Inc', 
      status: 'pending',
      description: 'Complete redesign of existing e-commerce platform with modern UI/UX, mobile responsiveness, and improved user flow.',
      price: '$2,500',
      date: 'Submitted 2 days ago'
    },
    { 
      title: 'Mobile App UI/UX Design', 
      client: 'Digital Dynamics', 
      status: 'accepted',
      description: 'Design comprehensive UI/UX for iOS and Android mobile application including wireframes, prototypes, and final designs.',
      price: '$3,200',
      date: 'Submitted 5 days ago'
    },
    { 
      title: 'Brand Identity Package', 
      client: 'StartUp Ventures', 
      status: 'pending',
      description: 'Create complete brand identity including logo, color palette, typography, and brand guidelines for new startup.',
      price: '$1,800',
      date: 'Submitted 1 week ago'
    },
    { 
      title: 'Landing Page Development', 
      client: 'Marketing Pro', 
      status: 'rejected',
      description: 'Develop responsive landing page with animations, contact forms, and SEO optimization.',
      price: '$1,200',
      date: 'Submitted 2 weeks ago'
    },
    { 
      title: 'React Dashboard Development', 
      client: 'SaaS Solutions', 
      status: 'accepted',
      description: 'Build comprehensive admin dashboard using React, with charts, data tables, and real-time updates.',
      price: '$4,200',
      date: 'Submitted 3 weeks ago'
    }
  ];

  const contracts = [
    {
      title: 'E-commerce UI Design',
      client: 'TechStart Inc',
      startDate: 'Oct 1, 2024',
      deadline: 'Oct 13, 2024',
      budget: '$2,500',
      progress: 60,
      status: 'In Progress'
    },
    {
      title: 'Mobile Banking App',
      client: 'FinTech Solutions',
      startDate: 'Sep 15, 2024',
      deadline: 'Oct 30, 2024',
      budget: '$5,800',
      progress: 35,
      status: 'In Progress'
    },
    {
      title: 'Restaurant Website',
      client: 'Local Eats',
      startDate: 'Sep 28, 2024',
      deadline: 'Oct 20, 2024',
      budget: '$1,800',
      progress: 75,
      status: 'In Progress'
    },
    {
      title: 'Real Estate Platform',
      client: 'Property Hub',
      startDate: 'Oct 5, 2024',
      deadline: 'Nov 15, 2024',
      budget: '$6,500',
      progress: 20,
      status: 'In Progress'
    }
  ];

  const transactions = [
    { title: 'E-Commerce Dashboard - Final Payment', date: 'Oct 5, 2024', amount: '+$2,500' },
    { title: 'Mobile Banking App - Milestone 2', date: 'Oct 3, 2024', amount: '+$1,800' },
    { title: 'Restaurant Website - Deposit', date: 'Sep 28, 2024', amount: '+$900' },
    { title: 'Fitness App Design - Final Payment', date: 'Sep 20, 2024', amount: '+$3,200' },
    { title: 'Platform Fee', date: 'Sep 15, 2024', amount: '-$120' },
    { title: 'Real Estate Platform - Milestone 1', date: 'Sep 10, 2024', amount: '+$2,100' },
    { title: 'Educational Portal - Final Payment', date: 'Aug 28, 2024', amount: '+$2,800' },
    { title: 'Social Media Dashboard - Deposit', date: 'Aug 15, 2024', amount: '+$1,500' }
  ];

  const renderDashboard = () => (
    <>
      <div style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h2 style={styles.heroTitle}>Find Your Next<br />Project</h2>
          <p style={styles.heroText}>
            Browse jobs that match your skills and submit proposals today. Thousands of opportunities from global to local companies are waiting for you! Explore for more and get the opportunity.
          </p>
          <div style={styles.heroButtons}>
            <button style={{...styles.button, ...styles.buttonPrimary}} onClick={() => setCurrentPage('browse')}>
              Browse Projects
            </button>
            <button style={{...styles.button, ...styles.buttonSecondary}}>
              Update Skills
            </button>
          </div>
        </div>
        <div style={styles.heroImageContainer}>
          <img src={heroPersonImg} alt="Hero" style={{width: '200%', height: '200%', objectFit: 'contain'}} />
        </div>
      </div>

      <div>
        <h3 style={styles.sectionTitle}>Recommended Projects</h3>
        <div style={styles.filterBar}>
          <button style={{...styles.filterButton, ...styles.filterActive}}>All Projects</button>
          <button style={{...styles.filterButton, ...styles.filterInactive}}>Web Dev</button>
          <button style={{...styles.filterButton, ...styles.filterInactive}}>Design</button>
          <button style={{...styles.filterButton, ...styles.filterInactive}}>Marketing</button>
          <button style={{...styles.filterButton, ...styles.filterInactive}}>UI/UX</button>
          <button style={{...styles.filterButton, ...styles.filterInactive}}>Trending</button>
        </div>
        <div style={styles.projectsGrid}>
          {projects.slice(0, 4).map((project, i) => (
            <div key={i} style={styles.projectCard}>
              <div style={styles.projectImage}>
                {project.views && (
                  <div style={styles.projectBadge}>
                    <span>{project.views}</span>
                    <Heart size={12} fill="white" />
                  </div>
                )}
              </div>
              <div style={styles.projectContent}>
                <div style={styles.projectTitle}>{project.title}</div>
                <div style={styles.projectClient}>{project.client}</div>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <span style={styles.projectTag}>{project.tag}</span>
                  <span style={{fontSize: '14px', fontWeight: 'bold', color: '#019523'}}>{project.budget}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.activeContract}>
        <div style={styles.contractContent}>
          <div style={styles.contractImageContainer}>
            <img src={contractPersonImg} alt="Contract" style={{width: '200%', height: '200%', objectFit: 'contain'}} />
          </div>
          <div style={styles.contractInfo}>
            <div style={styles.contractTitle}>Active Contract</div>
            <div style={styles.contractDetails}>
              Working on: E-commerce UI Design | Due in 5 days | Progress: 60%
            </div>
            <div style={styles.timeDisplay}>
              <span>01:10</span>
              <span>04:10</span>
            </div>
            <div style={styles.progressBar}>
              <div style={styles.progressFill}></div>
            </div>
            <div style={styles.controls}>
              <button style={styles.controlButton}>
                <Shuffle size={18} />
              </button>
              <button style={styles.controlButton}>
                <SkipBack size={18} />
              </button>
              <button 
                style={{...styles.controlButton, ...styles.playButton}}
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </button>
              <button style={styles.controlButton}>
                <SkipForward size={18} />
              </button>
              <button style={styles.controlButton}>
                <Repeat size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const renderBrowseProjects = () => (
    <>
      <div style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h2 style={styles.heroTitle}>Find Your Next<br />Project</h2>
          <p style={styles.heroText}>
            Browse jobs that match your skills and submit proposals today. Thousands of opportunities from global to local companies are waiting for you! Explore for more and get the opportunity.
          </p>
          <div style={styles.heroButtons}>
            <button style={{...styles.button, ...styles.buttonPrimary}}>
              Browse Projects
            </button>
            <button style={{...styles.button, ...styles.buttonSecondary}}>
              Update Skills
            </button>
          </div>
        </div>
        <div style={styles.heroImageContainer}>
          <img src={heroPersonImg} alt="Hero" style={{width: '100%', height: '100%', objectFit: 'contain'}} />
        </div>
      </div>

      <div>
        <h3 style={styles.sectionTitle}>All Available Projects</h3>
        <div style={styles.filterBar}>
          <button style={{...styles.filterButton, ...styles.filterActive}}>All Projects</button>
          <button style={{...styles.filterButton, ...styles.filterInactive}}>Web Dev</button>
          <button style={{...styles.filterButton, ...styles.filterInactive}}>Design</button>
          <button style={{...styles.filterButton, ...styles.filterInactive}}>Marketing</button>
          <button style={{...styles.filterButton, ...styles.filterInactive}}>UI/UX</button>
          <button style={{...styles.filterButton, ...styles.filterInactive}}>Trending</button>
        </div>
        <div style={styles.projectsGrid}>
          {projects.map((project, i) => (
            <div key={i} style={styles.projectCard}>
              <div style={styles.projectImage}>
                {project.views && (
                  <div style={styles.projectBadge}>
                    <span>{project.views}</span>
                    <Heart size={12} fill="white" />
                  </div>
                )}
              </div>
              <div style={styles.projectContent}>
                <div style={styles.projectTitle}>{project.title}</div>
                <div style={styles.projectClient}>{project.client}</div>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <span style={styles.projectTag}>{project.tag}</span>
                  <span style={{fontSize: '14px', fontWeight: 'bold', color: '#019523'}}>{project.budget}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  const renderNotifications = () => (
    <div>
      <h3 style={styles.sectionTitle}>Recent Notifications</h3>
      <table style={styles.table}>
        <thead>
          <tr style={styles.tableHeader}>
            <th style={{...styles.tableHeaderCell, ...styles.tableHeaderCellFirst}}>User</th>
            <th style={styles.tableHeaderCell}>Username</th>
            <th style={styles.tableHeaderCell}>Role</th>
            <th style={styles.tableHeaderCell}>Activity</th>
            <th style={{...styles.tableHeaderCell, ...styles.tableHeaderCellLast}}>Time</th>
          </tr>
        </thead>
        <tbody>
          {notifications.map((notif, i) => (
            <tr key={i} style={styles.tableRow}>
              <td style={{...styles.tableCell, ...styles.tableCellFirst}}>
                <div style={styles.userCell}>
                  <div style={styles.tableAvatar}></div>
                  <span>{notif.name}</span>
                </div>
              </td>
              <td style={styles.tableCell}>{notif.username}</td>
              <td style={styles.tableCell}>{notif.role}</td>
              <td style={styles.tableCell}>{notif.activity}</td>
              <td style={{...styles.tableCell, ...styles.tableCellLast}}>{notif.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderPortfolio = () => (
    <div>
      <h3 style={styles.sectionTitle}>My Portfolio Projects</h3>
      <table style={styles.table}>
        <thead>
          <tr style={styles.tableHeader}>
            <th style={{...styles.tableHeaderCell, ...styles.tableHeaderCellFirst}}>Project</th>
            <th style={styles.tableHeaderCell}>Role</th>
            <th style={styles.tableHeaderCell}>Company/Client</th>
            <th style={styles.tableHeaderCell}>Date</th>
            <th style={{...styles.tableHeaderCell, ...styles.tableHeaderCellLast}}>Status</th>
          </tr>
        </thead>
        <tbody>
          {portfolioProjects.map((project, i) => (
            <tr key={i} style={styles.tableRow}>
              <td style={{...styles.tableCell, ...styles.tableCellFirst}}>
                <div style={styles.userCell}>
                  <div style={styles.tableAvatar}></div>
                  <span>{project.name}</span>
                </div>
              </td>
              <td style={styles.tableCell}>{project.role}</td>
              <td style={styles.tableCell}>{project.company}</td>
              <td style={styles.tableCell}>{project.date}</td>
              <td style={{...styles.tableCell, ...styles.tableCellLast}}>
                <span style={{...styles.proposalStatus, ...styles.statusAccepted}}>{project.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderProposals = () => (
    <div>
      <h3 style={styles.sectionTitle}>My Proposals</h3>
      {proposals.map((proposal, i) => (
        <div key={i} style={styles.proposalCard}>
          <div style={styles.proposalHeader}>
            <div>
              <div style={styles.proposalTitle}>{proposal.title}</div>
              <div style={styles.proposalClient}>Client: {proposal.client}</div>
            </div>
            <span style={{
              ...styles.proposalStatus,
              ...(proposal.status === 'pending' ? styles.statusPending : 
                  proposal.status === 'accepted' ? styles.statusAccepted : 
                  styles.statusRejected)
            }}>
              {proposal.status.charAt(0).toUpperCase() + proposal.status.slice(1)}
            </span>
          </div>
          <div style={styles.proposalDescription}>
            {proposal.description}
          </div>
          <div style={styles.proposalFooter}>
            <div style={styles.proposalPrice}>{proposal.price}</div>
            <div style={styles.proposalDate}>{proposal.date}</div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderContracts = () => (
    <div>
      <h3 style={styles.sectionTitle}>Active Contracts</h3>
      {contracts.map((contract, i) => (
        <div key={i} style={styles.contractCard}>
          <div style={styles.contractHeader}>
            <div>
              <div style={styles.contractProjectTitle}>{contract.title}</div>
              <div style={styles.contractClientName}>Client: {contract.client}</div>
            </div>
            <span style={styles.contractBadge}>{contract.status}</span>
          </div>
          <div style={styles.contractMeta}>
            <div style={styles.metaItem}>
              <span style={styles.metaLabel}>Start Date</span>
              <span style={styles.metaValue}>{contract.startDate}</span>
            </div>
            <div style={styles.metaItem}>
              <span style={styles.metaLabel}>Deadline</span>
              <span style={styles.metaValue}>{contract.deadline}</span>
            </div>
            <div style={styles.metaItem}>
              <span style={styles.metaLabel}>Budget</span>
              <span style={styles.metaValue}>{contract.budget}</span>
            </div>
          </div>
          <div style={styles.contractProgress}>
            <div style={styles.progressLabel}>
              <span>Progress</span>
              <span>{contract.progress}%</span>
            </div>
            <div style={styles.progressBar}>
              <div style={{...styles.progressFill, width: `${contract.progress}%`}}></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderEarnings = () => (
    <div>
      <div style={styles.earningsCard}>
        <div style={styles.earningsTitle}>Total Earnings</div>
        <div style={styles.earningsAmount}>$24,850</div>
        <div style={styles.earningsGrid}>
          <div style={styles.earningsStat}>
            <span style={styles.statLabel}>This Month</span>
            <span style={styles.statValue}>$4,200</span>
          </div>
          <div style={styles.earningsStat}>
            <span style={styles.statLabel}>Pending</span>
            <span style={styles.statValue}>$1,800</span>
          </div>
          <div style={styles.earningsStat}>
            <span style={styles.statLabel}>Withdrawn</span>
            <span style={styles.statValue}>$18,850</span>
          </div>
        </div>
      </div>

      <h3 style={styles.sectionTitle}>Recent Transactions</h3>
      <div style={styles.transactionList}>
        {transactions.map((transaction, i) => (
          <div key={i} style={styles.transactionItem}>
            <div style={styles.transactionInfo}>
              <div style={styles.transactionTitle}>{transaction.title}</div>
              <div style={styles.transactionDate}>{transaction.date}</div>
            </div>
            <div style={{
              ...styles.transactionAmount,
              color: transaction.amount.startsWith('+') ? '#019523' : '#dc2626'
            }}>
              {transaction.amount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

const renderContent = () => {
  switch (currentPage) {
    case 'browse':
      return renderBrowseProjects();
    case 'notifications':
      return renderNotifications();
    case 'portfolio':
      return renderPortfolio();
    case 'proposals':
      return renderProposals();
    case 'contracts':
      return renderContracts();
    case 'earnings':
      return renderEarnings();

    // NEW
    case 'disputes':
      return <FreelancerDispute contracts={contracts} onBack={() => setCurrentPage('dashboard')} />;

    default:
      return renderDashboard();
  }
};



  const getPageTitle = () => {
  switch (currentPage) {
    case 'browse':
      return 'Browse Projects';
    case 'notifications':
      return 'Notifications';
    case 'portfolio':
      return 'Profile & Portfolio';
    case 'proposals':
      return 'My Proposals';
    case 'contracts':
      return 'Active Contracts';
    case 'earnings':
      return 'Earnings & Wallet';
    case 'disputes': // ✅ New page case
      return 'Dispute Center';
    default:
      return 'Dashboard';
  }
};


  return (
    <div style={styles.container}>
      <div style={styles.mainWrapper}>
        <aside style={styles.sidebar}>
          <div style={styles.profile}>
            <div style={styles.avatar}></div>
            <div>
              <div style={styles.profileText}>Freelancer</div>
              <div style={styles.profileSubtext}>Drew Feig</div>
            </div>
          </div>

          <nav style={styles.navSection}>
            <div style={styles.navTitle}>Home</div>
            {navItems.map((item, i) => (
              <div 
                key={i} 
                style={{
                  ...styles.navItem,
                  ...(currentPage === item.page ? styles.navItemActive : {})
                }}
                onClick={() => setCurrentPage(item.page)}
              >
                {item.icon}
                <span>{item.label}</span>
              </div>
            ))}
          </nav>

          <nav style={styles.navSection}>
            <div style={styles.navTitle}>Library</div>
            {libraryItems.map((item, i) => (
              <div 
                key={i} 
                style={{
                  ...styles.navItem,
                  ...(currentPage === item.page ? styles.navItemActive : {})
                }}
                onClick={() => setCurrentPage(item.page)}
              >
                {item.icon}
                <span>{item.label}</span>
              </div>
            ))}
          </nav>

          <nav style={styles.navSection}>
            <div style={styles.navTitle}>Support</div>
            {supportItems.map((item, i) => (
              <div 
                key={i} 
                style={{
                  ...styles.navItem,
                  ...(currentPage === item.page ? styles.navItemActive : {})
                }}
                onClick={() => setCurrentPage(item.page)}
              >
                {item.icon}
                <span>{item.label}</span>
              </div>
            ))}
          </nav>
        </aside>

        <div style={styles.contentWrapper}>
          <main style={styles.mainContent}>
            <div style={styles.header}>
              <h1 style={styles.title}>{getPageTitle()}</h1>
              <div style={styles.searchContainer}>
                <div style={styles.searchWrapper}>
                  <Search size={18} style={styles.searchIcon} />
                  <input 
                    type="text" 
                    placeholder="Search projects, clients, mentors..."
                    style={styles.searchInput}
                  />
                </div>
                <button style={styles.iconButton}>
                  <div style={{width: '10px', height: '10px', background: '#1f2937', borderRadius: '50%'}}></div>
                </button>
                <div style={styles.userSection}>
                  <span style={styles.userName}>Drew Feig</span>
                  <div style={styles.userAvatar}></div>
                </div>
                <button style={styles.iconButton}>
                  <Bell size={20} color="#1f2937" />
                </button>
              </div>
            </div>

            {renderContent()}
          </main>

          {(currentPage === 'dashboard' || currentPage === 'browse') && (
            <aside style={styles.rightSidebar}>
              <div style={styles.sidebarCard}>
                <h3 style={styles.sectionTitle}>Top Clients / Active Employers</h3>
                <div style={styles.clientList}>
                  {clients.map((client, i) => (
                    <div key={i} style={styles.clientItem}>
                      <div style={styles.clientAvatar}></div>
                      <div style={styles.clientInfo}>
                        <div style={styles.clientName}>{client.name}</div>
                        <div style={styles.clientProject}>{client.project}</div>
                      </div>
                      {client.active && (
                        <div style={{width: '8px', height: '8px', background: '#10b981', borderRadius: '50%'}}></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div style={styles.sidebarCard}>
                <h3 style={styles.sectionTitle}>Trending Topics</h3>
                <div style={styles.topicList}>
                  {topics.map((topic, i) => (
                    <div key={i} style={styles.topicItem}>
                      <div style={styles.topicLeft}>
                        <div style={styles.topicIcon}></div>
                        <div style={styles.topicInfo}>
                          <div style={styles.topicTag}>{topic.tag}</div>
                          <div style={styles.topicAuthor}>{topic.posts}</div>
                        </div>
                      </div>
                      <ChevronRight size={18} color="#9ca3af" />
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}