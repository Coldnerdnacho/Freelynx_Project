import { useState } from 'react';
import {
  Users,
  Folder,
  FileText,
  Headphones,
  Settings,
  AlertTriangle,
  Search,
  Bell,
  X,
  Clock,
  Activity,
  Briefcase,
  Upload,
  Ban,
  CheckCircle,
  XCircle,
  Star,
  Award,
  DollarSign,
  CreditCard,
  Lock,
  Unlock,
} from 'lucide-react';

const Admin = () => {
  const [activeSection, setActiveSection] = useState('users');
  const [activeTab, setActiveTab] = useState('freelancers');
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalActiveTab, setModalActiveTab] = useState('activity');

  // ===== USERS (existing) =====
  const [users, setUsers] = useState([
    { id: '1', name: 'Sarah Johnson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah', verified: true, rating: 4.8, reviews: 127, isActive: true, lastLogin: '2 hours ago', role: 'freelancers' },
    { id: '2', name: 'Michael Chen', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael', verified: false, rating: 4.9, reviews: 89, isActive: false, lastLogin: '5 days ago', inactiveDays: 5, role: 'freelancers' },
    { id: '3', name: 'Emma Williams', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma', verified: true, rating: 4.6, reviews: 203, isActive: true, lastLogin: '1 day ago', role: 'freelancers' },
    { id: '4', name: 'David Rodriguez', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David', verified: true, isActive: true, lastLogin: '3 hours ago', role: 'clients' },
    { id: '5', name: 'Lisa Anderson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa', verified: false, isActive: true, lastLogin: '1 hour ago', role: 'clients' },
    { id: '6', name: 'James Wilson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James', verified: true, rating: 4.9, reviews: 450, isActive: true, lastLogin: '30 minutes ago', role: 'mentors' },
  ]);

  // ===== DISPUTES (existing) =====
  const [disputes] = useState([
    { id: '1', title: 'Payment Dispute', client: 'David Rodriguez', freelancer: 'Sarah Johnson', status: 'open', priority: 'high', date: '2024-03-15' },
    { id: '2', title: 'Project Quality Issue', client: 'Lisa Anderson', freelancer: 'Michael Chen', status: 'resolved', priority: 'medium', date: '2024-03-14' },
  ]);

  // ===== NEW: PROJECTS & FINANCE DUMMY DATA =====
  const [projects, setProjects] = useState([
    { id: 'p1', title: 'E-commerce Redesign', client: 'David Rodriguez', freelancer: 'Sarah Johnson', budget: 5000, deadline: '2024-04-15', progress: 65, status: 'in-progress', escrowLocked: true },
    { id: 'p2', title: 'Mobile App Dev', client: 'Lisa Anderson', freelancer: 'Michael Chen', budget: 12000, deadline: '2024-03-20', progress: 100, status: 'completed', escrowLocked: false },
    { id: 'p3', title: 'Brand Identity', client: 'David Rodriguez', freelancer: 'Emma Williams', budget: 3500, deadline: '2024-04-30', progress: 15, status: 'pending', escrowLocked: true },
  ]);

  // transactions: only payments/escrow (NO commissions)
  const [transactions, setTransactions] = useState([
    { id: 't1', type: 'payment', amount: 5000, from: 'David Rodriguez', to: 'Sarah Johnson', date: '2024-03-19', status: 'completed' },
    { id: 't2', type: 'escrow', amount: 3500, from: 'David Rodriguez', to: 'Escrow', date: '2024-03-16', status: 'held', projectId: 'p3' },
    { id: 't3', type: 'payment', amount: 12000, from: 'Lisa Anderson', to: 'Michael Chen', date: '2024-03-20', status: 'completed' },
    { id: 't4', type: 'escrow', amount: 5000, from: 'David Rodriguez', to: 'Escrow', date: '2024-03-10', status: 'released', projectId: 'p1' },
  ]);

  const [withdrawals, setWithdrawals] = useState([
    { id: 'w1', user: 'Sarah Johnson', amount: 1200, date: '2024-03-21', status: 'pending' },
    { id: 'w2', user: 'Michael Chen', amount: 800, date: '2024-03-20', status: 'approved' },
  ]);

  // ===== USERS helpers =====
  const toggleVerification = (userId) => {
    setUsers(users.map(u => (u.id === userId ? { ...u, verified: !u.verified } : u)));
  };
  const assignMentorRole = (userId) => {
    setUsers(users.map(u => (u.id === userId ? { ...u, role: 'mentors' } : u)));
  };
  const filteredUsers = users.filter(u => u.role === activeTab);

  // ===== PROJECTS actions =====
  const markProjectStatus = (id, status) => {
    setProjects(prev => prev.map(p => (p.id === id ? { ...p, status, progress: status === 'completed' ? 100 : p.progress } : p)));
  };
  const toggleEscrowForProject = (id) => {
    setProjects(prev => prev.map(p => (p.id === id ? { ...p, escrowLocked: !p.escrowLocked } : p)));
    // reflect in transactions (dummy)
    setTransactions(prev =>
      prev.map(t =>
        t.type === 'escrow' && t.projectId === id
          ? { ...t, status: t.status === 'held' ? 'released' : 'held' }
          : t
      )
    );
  };

  // ===== FINANCE actions =====
  const approveWithdrawal = (id) => {
    setWithdrawals(prev => prev.map(w => (w.id === id ? { ...w, status: 'approved' } : w)));
  };
  const denyWithdrawal = (id) => {
    setWithdrawals(prev => prev.map(w => (w.id === id ? { ...w, status: 'denied' } : w)));
  };

  const kpiPaymentsProcessed = transactions.filter(t => t.type === 'payment' && t.status === 'completed')
    .reduce((s, t) => s + t.amount, 0);
  const kpiEscrowHeld = transactions.filter(t => t.type === 'escrow' && t.status === 'held')
    .reduce((s, t) => s + t.amount, 0);
  const kpiPendingWithdrawals = withdrawals.filter(w => w.status === 'pending')
    .reduce((s, w) => s + w.amount, 0);

  // ===== STYLES =====
  const styles = {
    container: { display: 'flex', height: '100vh', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' },
    sidebar: { width: '256px', backgroundColor: '#15803d', color: 'white', padding: '24px', display: 'flex', flexDirection: 'column' },
    logo: { marginBottom: '32px' },
    logoContainer: { display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' },
    logoIcon: { width: '32px', height: '32px', backgroundColor: 'white', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
    logoText: { fontWeight: 'bold', fontSize: '20px' },
    nav: { flex: 1 },
    navButton: { width: '100%', display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '8px', marginBottom: '4px', border: 'none', cursor: 'pointer', transition: 'all 0.2s', fontSize: '14px' },
    navButtonActive: { backgroundColor: 'white', color: '#15803d', fontWeight: '500' },
    navButtonInactive: { backgroundColor: 'transparent', color: 'white' },
    support: { marginTop: 'auto', paddingTop: '24px', borderTop: '1px solid #16a34a' },
    mainContent: { flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' },
    header: { padding: '12px 24px', borderBottom: '1px solid #e5e7eb', background: 'linear-gradient(to right, #f0fdf4, white)' },
    headerContent: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
    searchContainer: { display: 'flex', alignItems: 'center', gap: '16px' },
    searchInput: { position: 'relative' },
    input: { paddingLeft: '40px', paddingRight: '16px', paddingTop: '8px', paddingBottom: '8px', border: '1px solid #d1d5db', borderRadius: '8px', width: '256px', outline: 'none' },
    searchIcon: { position: 'absolute', left: '12px', top: '10px', color: '#9ca3af' },
    iconButton: { padding: '8px', border: 'none', background: 'none', borderRadius: '8px', cursor: 'pointer', transition: 'background-color 0.2s' },
    adminProfile: { display: 'flex', alignItems: 'center', gap: '8px' },
    avatar: { width: '36px', height: '36px', borderRadius: '50%' },
    content: { flex: 1, overflow: 'auto', padding: '16px' },
    tabsContainer: { display: 'flex', gap: '8px', marginBottom: '16px' },
    tabButton: { padding: '8px 24px', borderRadius: '8px', fontWeight: '500', border: 'none', cursor: 'pointer', transition: 'all 0.2s' },
    tabButtonActive: { backgroundColor: '#22c55e', color: 'white' },
    tabButtonInactive: { backgroundColor: '#f3f4f6', color: '#4b5563' },
    usersList: { display: 'flex', flexDirection: 'column', gap: '8px' },
    userCard: { background: 'linear-gradient(to right, #f0fdf4, #f9fafb)', borderRadius: '8px', padding: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid #e5e7eb', transition: 'all 0.2s' },
    userInfo: { display: 'flex', alignItems: 'center', gap: '16px' },
    userAvatar: { width: '44px', height: '44px', borderRadius: '50%', cursor: 'pointer' },
    userName: { fontWeight: '600', color: '#1f2937', cursor: 'pointer', fontSize: '14px', margin: 0 },
    rating: { display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2px' },
    ratingStars: { display: 'flex', alignItems: 'center', gap: '4px' },
    userActions: { display: 'flex', alignItems: 'center', gap: '12px' },
    button: { display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderRadius: '8px', fontWeight: '500', border: 'none', cursor: 'pointer', transition: 'all 0.2s', fontSize: '12px' },
    mentorButton: { backgroundColor: '#a855f7', color: 'white' },
    verifiedButton: { backgroundColor: '#dcfce7', color: '#15803d' },
    unverifiedButton: { backgroundColor: '#e5e7eb', color: '#4b5563' },
    modal: { position: 'fixed', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50, padding: '16px' },
    modalContent: { backgroundColor: 'white', borderRadius: '16px', maxWidth: '672px', width: '100%', padding: '24px', position: 'relative', maxHeight: '90vh', overflowY: 'auto' },
    closeButton: { position: 'absolute', top: '16px', right: '16px', padding: '8px', border: 'none', background: 'none', borderRadius: '8px', cursor: 'pointer' },
    modalHeader: { display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' },
    modalAvatar: { width: '80px', height: '80px', borderRadius: '50%' },
    modalTitle: { fontSize: '24px', fontWeight: 'bold', color: '#1f2937', margin: 0 },
    modalSubtitle: { color: '#4b5563', textTransform: 'capitalize', margin: 0 },
    modalTabs: { display: 'flex', gap: '8px', marginBottom: '24px', borderBottom: '1px solid #e5e7eb' },
    modalTabButton: { padding: '8px 16px', fontWeight: '500', border: 'none', background: 'none', cursor: 'pointer', borderBottom: '2px solid transparent', transition: 'all 0.2s' },
    modalTabActive: { borderBottomColor: '#22c55e', color: '#16a34a' },
    modalTabInactive: { color: '#4b5563' },
    infoCard: { borderRadius: '12px', padding: '16px', marginBottom: '16px', border: '1px solid #e5e7eb' },
    statusCard: { background: 'linear-gradient(to right, #f0fdf4, #f9fafb)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
    statusBadge: { padding: '4px 12px', borderRadius: '9999px', fontSize: '14px', fontWeight: '500' },
    statusActive: { backgroundColor: '#dcfce7', color: '#15803d' },
    statusInactive: { backgroundColor: '#fee2e2', color: '#991b1b' },
    metricsCard: { background: 'linear-gradient(to right, #fef9c3, #f0fdf4)', border: '1px solid #fde047' },
    metricsGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' },
    metricBox: { backgroundColor: 'white', borderRadius: '8px', padding: '12px', textAlign: 'center' },
    metricValue: { fontSize: '30px', fontWeight: 'bold', margin: 0 },

    // Projects
    projectCard: { background: 'linear-gradient(to right, #eff6ff, #f0f9ff)', borderRadius: '10px', padding: '16px', border: '1px solid #bfdbfe', marginBottom: '12px' },
    progressBar: { width: '100%', height: '8px', backgroundColor: '#e5e7eb', borderRadius: '9999px', overflow: 'hidden', marginTop: '8px' },
    progressFill: { height: '100%', backgroundColor: '#22c55e', transition: 'width 0.3s' },
    pill: (bg, fg) => ({ padding: '4px 12px', borderRadius: 9999, backgroundColor: bg, color: fg, fontSize: 12, fontWeight: 500 }),

    // Finance
    kpi: (gradient) => ({ borderRadius: 12, padding: 16, color: 'white', background: gradient }),
    transactionCard: { backgroundColor: 'white', borderRadius: '8px', padding: '12px', border: '1px solid #e5e7eb', marginBottom: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    smallBtn: (bg, fg = 'white') => ({ padding: '6px 10px', borderRadius: 8, border: 'none', backgroundColor: bg, color: fg, cursor: 'pointer', fontSize: 12, fontWeight: 600 }),
  };

  // ===== Sidebar =====
  const Sidebar = () => (
    <div style={styles.sidebar}>
      <div style={styles.logo}>
        <div style={styles.logoContainer}>
          <div style={styles.logoIcon}><Users color="#15803d" size={20} /></div>
          <span style={styles.logoText}>Admin</span>
        </div>
      </div>

      <nav style={styles.nav}>
        {[
          { key: 'users', label: 'User Management', icon: <Users size={20} /> },
          { key: 'disputes', label: 'Disputes', icon: <AlertTriangle size={20} /> },
          { key: 'projects', label: 'Projects & Commissions', icon: <Folder size={20} /> },
          { key: 'finance', label: 'Finance & Monetization', icon: <FileText size={20} /> },
        ].map(item => (
          <button
            key={item.key}
            onClick={() => setActiveSection(item.key)}
            style={{ ...styles.navButton, ...(activeSection === item.key ? styles.navButtonActive : styles.navButtonInactive) }}
            onMouseEnter={(e) => { if (activeSection !== item.key) e.currentTarget.style.backgroundColor = '#16a34a'; }}
            onMouseLeave={(e) => { if (activeSection !== item.key) e.currentTarget.style.backgroundColor = 'transparent'; }}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}

        <button
          style={{ ...styles.navButton, ...styles.navButtonInactive }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#16a34a'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <Settings size={20} />
          <span>System Settings</span>
        </button>
      </nav>

      <div style={styles.support}>
        <button
          style={{ ...styles.navButton, ...styles.navButtonInactive }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#16a34a'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <Headphones size={20} />
          <span>FAQ & Support</span>
        </button>
      </div>
    </div>
  );

  // ===== USERS PAGE =====
  const UserManagement = () => (
    <div style={styles.mainContent}>
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.searchContainer}>
            <div style={styles.searchInput}>
              <input type="text" placeholder="Search items..." style={styles.input} />
              <Search style={styles.searchIcon} size={20} />
            </div>
            <button style={styles.iconButton}><Bell size={20} color="#4b5563" /></button>
            <button style={styles.iconButton}><Bell size={20} color="#4b5563" /></button>
            <div style={styles.adminProfile}>
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin" alt="Admin" style={styles.avatar} />
              <div>
                <p style={{ fontSize: 14, fontWeight: 500, color: '#1f2937', margin: 0 }}>John Davidson</p>
                <p style={{ fontSize: 12, color: '#6b7280', margin: 0 }}>Administrator</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.content}>
        <div style={styles.tabsContainer}>
          {['clients', 'freelancers', 'mentors'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{ ...styles.tabButton, ...(activeTab === tab ? styles.tabButtonActive : styles.tabButtonInactive) }}
              onMouseEnter={(e) => { if (activeTab !== tab) e.currentTarget.style.backgroundColor = '#e5e7eb'; }}
              onMouseLeave={(e) => { if (activeTab !== tab) e.currentTarget.style.backgroundColor = '#f3f4f6'; }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div style={styles.usersList}>
          {filteredUsers.map((user) => (
            <div key={user.id} style={styles.userCard}>
              <div style={styles.userInfo}>
                <img src={user.avatar} alt={user.name} style={styles.userAvatar} onClick={() => setSelectedUser(user)} />
                <div>
                  <h3
                    style={styles.userName}
                    onClick={() => setSelectedUser(user)}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#16a34a')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#1f2937')}
                  >
                    {user.name}
                  </h3>
                  {user.rating && (
                    <div style={styles.rating}>
                      <div style={styles.ratingStars}>
                        <Star size={14} color="#eab308" fill="#eab308" />
                        <span style={{ fontSize: 12, color: '#4b5563', fontWeight: 500 }}>{user.rating}</span>
                      </div>
                      <span style={{ fontSize: 12, color: '#9ca3af' }}>({user.reviews})</span>
                    </div>
                  )}
                </div>
              </div>

              <div style={styles.userActions}>
                {activeTab === 'freelancers' && user.rating && user.rating >= 4.5 && user.role !== 'mentors' && (
                  <button
                    onClick={() => assignMentorRole(user.id)}
                    style={{ ...styles.button, ...styles.mentorButton }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#9333ea')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#a855f7')}
                  >
                    <Award size={16} />
                    <span>Assign Mentor</span>
                  </button>
                )}

                <button
                  onClick={() => toggleVerification(user.id)}
                  style={{ ...styles.button, ...(user.verified ? styles.verifiedButton : styles.unverifiedButton) }}
                  onMouseEnter={(e) => {
                    if (!user.verified) {
                      e.currentTarget.style.backgroundColor = '#22c55e';
                      e.currentTarget.style.color = 'white';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!user.verified) {
                      e.currentTarget.style.backgroundColor = '#e5e7eb';
                      e.currentTarget.style.color = '#4b5563';
                    }
                  }}
                >
                  {user.verified ? (
                    <>
                      <CheckCircle size={16} />
                      <span>Verified</span>
                    </>
                  ) : (
                    <>
                      <XCircle size={16} />
                      <span>Verify</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // ===== DISPUTES PAGE (existing visuals) =====
  const DisputesManagement = () => (
    <div style={styles.mainContent}>
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <h2 style={{ fontSize: 20, fontWeight: 'bold', color: '#1f2937', margin: 0 }}>Disputes Management</h2>
        </div>
      </div>

      <div style={styles.content}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {disputes.map((d) => (
            <div key={d.id} style={{ background: 'linear-gradient(to right, #fef3c7, #fee2e2)', borderRadius: 8, padding: 12, border: '1px solid #fbbf24' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 8 }}>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: '#1f2937', margin: 0 }}>{d.title}</h3>
                <span style={styles.pill(d.priority === 'high' ? '#fee2e2' : '#fef3c7', d.priority === 'high' ? '#991b1b' : '#92400e')}>{d.priority}</span>
              </div>
              <div style={{ fontSize: 14, color: '#4b5563', marginBottom: 8 }}>
                <p style={{ margin: '4px 0' }}><strong>Client:</strong> {d.client}</p>
                <p style={{ margin: '4px 0' }}><strong>Freelancer:</strong> {d.freelancer}</p>
                <p style={{ margin: '4px 0' }}><strong>Date:</strong> {d.date}</p>
              </div>
              <span style={styles.pill(d.status === 'open' ? '#fef3c7' : '#dcfce7', d.status === 'open' ? '#92400e' : '#15803d')}>
                {d.status === 'open' ? 'Open' : 'Resolved'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // ===== NEW: PROJECTS PAGE =====
  const ProjectsManagement = () => (
    <div style={styles.mainContent}>
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <h2 style={{ fontSize: 20, fontWeight: 'bold', color: '#1f2937', margin: 0 }}>Projects & Commissions</h2>
        </div>
      </div>

      <div style={styles.content}>
        {projects.map((p) => (
          <div key={p.id} style={styles.projectCard}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 8 }}>
              <div>
                <h3 style={{ margin: 0, fontSize: 16, fontWeight: 600, color: '#111827' }}>{p.title}</h3>
                <p style={{ margin: '6px 0 0 0', fontSize: 13, color: '#4b5563' }}>
                  <strong>Client:</strong> {p.client} &nbsp; | &nbsp; <strong>Freelancer:</strong> {p.freelancer}
                </p>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <span style={styles.pill(
                  p.status === 'completed' ? '#dcfce7' : p.status === 'in-progress' ? '#fef3c7' : '#e5e7eb',
                  p.status === 'completed' ? '#15803d' : p.status === 'in-progress' ? '#92400e' : '#4b5563'
                )}>
                  {p.status === 'completed' ? 'Completed' : p.status === 'in-progress' ? 'In Progress' : 'Pending'}
                </span>
                <span style={styles.pill(p.escrowLocked ? '#dbeafe' : '#ecfccb', p.escrowLocked ? '#1e40af' : '#15803d')}>
                  {p.escrowLocked ? 'Escrow: Held' : 'Escrow: Released'}
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 24, marginTop: 8, marginBottom: 8 }}>
              <div>
                <p style={{ fontSize: 12, color: '#6b7280', margin: 0 }}>Budget</p>
                <p style={{ fontSize: 16, fontWeight: 600, color: '#111827', margin: 0 }}>${p.budget.toLocaleString()}</p>
              </div>
              <div>
                <p style={{ fontSize: 12, color: '#6b7280', margin: 0 }}>Deadline</p>
                <p style={{ fontSize: 14, fontWeight: 500, color: '#111827', margin: 0 }}>{p.deadline}</p>
              </div>
              <div style={{ alignSelf: 'end', marginLeft: 'auto', display: 'flex', gap: 8 }}>
                <button
                  style={styles.smallBtn('#22c55e')}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#16a34a')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#22c55e')}
                  onClick={() => markProjectStatus(p.id, 'completed')}
                >
                  <CheckCircle size={14} style={{ marginRight: 6 }} /> Mark Completed
                </button>
                <button
                  style={styles.smallBtn('#ef4444')}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#dc2626')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ef4444')}
                  onClick={() => markProjectStatus(p.id, 'failed')}
                >
                  <X size={14} style={{ marginRight: 6 }} /> Mark Failed
                </button>
                <button
                  style={styles.smallBtn(p.escrowLocked ? '#1e40af' : '#15803d')}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = p.escrowLocked ? '#1d4ed8' : '#16a34a')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = p.escrowLocked ? '#1e40af' : '#15803d')}
                  onClick={() => toggleEscrowForProject(p.id)}
                >
                  {p.escrowLocked ? <Unlock size={14} style={{ marginRight: 6 }} /> : <Lock size={14} style={{ marginRight: 6 }} />}
                  {p.escrowLocked ? 'Release Escrow' : 'Hold Escrow'}
                </button>
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{ fontSize: 12, color: '#6b7280' }}>Progress</span>
                <span style={{ fontSize: 12, fontWeight: 600, color: '#1f2937' }}>{p.progress}%</span>
              </div>
              <div style={styles.progressBar}>
                <div style={{ ...styles.progressFill, width: `${p.progress}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // ===== NEW: FINANCE PAGE (no commissions) =====
  const FinanceManagement = () => (
    <div style={styles.mainContent}>
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <h2 style={{ fontSize: 20, fontWeight: 'bold', color: '#1f2937', margin: 0 }}>Finance & Monetization</h2>
        </div>
      </div>

      <div style={styles.content}>
        {/* KPI Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 16 }}>
          <div style={styles.kpi('linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)')}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <CreditCard size={20} /> <span style={{ opacity: 0.9, fontWeight: 600 }}>Payments Processed</span>
            </div>
            <div style={{ fontSize: 26, fontWeight: 800 }}>${kpiPaymentsProcessed.toLocaleString()}</div>
            <div style={{ fontSize: 12, opacity: 0.85, marginTop: 4 }}>Completed payouts to freelancers</div>
          </div>

          <div style={styles.kpi('linear-gradient(135deg, #667eea 0%, #764ba2 100%)')}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <Lock size={20} /> <span style={{ opacity: 0.9, fontWeight: 600 }}>Escrow Held</span>
            </div>
            <div style={{ fontSize: 26, fontWeight: 800 }}>${kpiEscrowHeld.toLocaleString()}</div>
            <div style={{ fontSize: 12, opacity: 0.85, marginTop: 4 }}>Funds currently locked in escrow</div>
          </div>

          <div style={styles.kpi('linear-gradient(135deg, #f093fb 0%, #f5576c 100%)')}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <DollarSign size={20} /> <span style={{ opacity: 0.9, fontWeight: 600 }}>Pending Withdrawals</span>
            </div>
            <div style={{ fontSize: 26, fontWeight: 800 }}>${kpiPendingWithdrawals.toLocaleString()}</div>
            <div style={{ fontSize: 12, opacity: 0.85, marginTop: 4 }}>Awaiting admin approval</div>
          </div>
        </div>

        {/* Transactions */}
        <h3 style={{ margin: '8px 0 8px 0', color: '#111827' }}>Recent Transactions</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
          {transactions.map(t => (
            <div key={t.id} style={styles.transactionCard}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', background: t.type === 'payment' ? '#dbeafe' : '#dcfce7' }}>
                  {t.type === 'payment' ? <CreditCard size={18} color="#1e40af" /> : <Lock size={18} color={t.status === 'held' ? '#065f46' : '#1e40af'} />}
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: '#111827', fontSize: 14 }}>
                    {t.type === 'payment' ? 'Payment' : 'Escrow'} • ${t.amount.toLocaleString()}
                  </div>
                  <div style={{ color: '#6b7280', fontSize: 12 }}>{t.from} → {t.to} &nbsp;•&nbsp; {t.date}</div>
                </div>
              </div>
              <span style={styles.pill(t.status === 'completed' ? '#dcfce7' : t.status === 'held' ? '#dbeafe' : '#ecfccb',
                                       t.status === 'completed' ? '#15803d' : t.status === 'held' ? '#1e40af' : '#15803d')}>
                {t.status.charAt(0).toUpperCase() + t.status.slice(1)}
              </span>
            </div>
          ))}
        </div>

        {/* Withdrawals Queue */}
        <h3 style={{ margin: '8px 0 8px 0', color: '#111827' }}>Withdrawal Requests</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {withdrawals.map(w => (
            <div key={w.id} style={{ ...styles.transactionCard, alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 600, color: '#111827', fontSize: 14 }}>{w.user}</div>
                <div style={{ color: '#6b7280', fontSize: 12 }}>{w.date}</div>
              </div>
              <div style={{ fontWeight: 700, color: '#111827' }}>${w.amount.toLocaleString()}</div>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <span style={styles.pill(
                  w.status === 'pending' ? '#fef3c7' : w.status === 'approved' ? '#dcfce7' : '#fee2e2',
                  w.status === 'pending' ? '#92400e' : w.status === 'approved' ? '#15803d' : '#991b1b'
                )}>
                  {w.status[0].toUpperCase() + w.status.slice(1)}
                </span>
                {w.status === 'pending' && (
                  <>
                    <button
                      style={styles.smallBtn('#22c55e')}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#16a34a')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#22c55e')}
                      onClick={() => approveWithdrawal(w.id)}
                    >
                      Approve
                    </button>
                    <button
                      style={styles.smallBtn('#ef4444')}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#dc2626')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ef4444')}
                      onClick={() => denyWithdrawal(w.id)}
                    >
                      Deny
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // ===== USER MODAL =====
  const UserDetailsModal = () => {
    if (!selectedUser) return null;
    return (
      <div style={styles.modal} onClick={() => setSelectedUser(null)}>
        <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
          <button
            onClick={() => setSelectedUser(null)}
            style={styles.closeButton}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f3f4f6')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            <X size={20} color="#4b5563" />
          </button>

          <div style={styles.modalHeader}>
            <img src={selectedUser.avatar} alt={selectedUser.name} style={styles.modalAvatar} />
            <div>
              <h2 style={styles.modalTitle}>{selectedUser.name}</h2>
              <p style={styles.modalSubtitle}>{selectedUser.role.slice(0, -1)}</p>
            </div>
          </div>

          <div style={styles.modalTabs}>
            {['activity', 'documents', ...(selectedUser.role === 'freelancers' ? ['experience'] : [])].map(tab => (
              <button
                key={tab}
                onClick={() => setModalActiveTab(tab)}
                style={{ ...styles.modalTabButton, ...(modalActiveTab === tab ? styles.modalTabActive : styles.modalTabInactive) }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div>
            {modalActiveTab === 'activity' && (
              <>
                <div style={{ ...styles.infoCard, ...styles.statusCard }}>
                  <div><span style={{ color: '#374151', fontWeight: 600 }}>Account Status</span></div>
                  <span style={{ ...styles.statusBadge, ...(selectedUser.isActive ? styles.statusActive : styles.statusInactive) }}>
                    {selectedUser.isActive ? 'Active' : 'Inactive'}
                  </span>
                </div>

                {!selectedUser.isActive && selectedUser.inactiveDays && (
                  <div style={{ ...styles.infoCard, backgroundColor: '#fff7ed', border: '1px solid #fed7aa', display: 'flex', alignItems: 'center', gap: 12 }}>
                    <Clock color="#f97316" size={20} />
                    <div>
                      <p style={{ fontWeight: 600, color: '#1f2937', margin: 0 }}>Inactive Duration</p>
                      <p style={{ fontSize: 14, color: '#4b5563', margin: 0 }}>{selectedUser.inactiveDays} days inactive</p>
                    </div>
                  </div>
                )}

                <div style={{ ...styles.infoCard, backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', display: 'flex', alignItems: 'center', gap: 12 }}>
                  <Activity color="#3b82f6" size={20} />
                  <div>
                    <p style={{ fontWeight: 600, color: '#1f2937', margin: 0 }}>Last Login</p>
                    <p style={{ fontSize: 14, color: '#4b5563', margin: 0 }}>{selectedUser.lastLogin}</p>
                  </div>
                </div>

                {selectedUser.rating && (
                  <div style={styles.metricsCard}>
                    <p style={{ fontWeight: 600, color: '#1f2937', marginBottom: 12 }}>Performance Metrics</p>
                    <div style={styles.metricsGrid}>
                      <div style={styles.metricBox}>
                        <p style={{ ...styles.metricValue, color: '#16a34a' }}>{selectedUser.rating}</p>
                        <p style={{ fontSize: 14, color: '#4b5563', margin: '4px 0 0 0' }}>Average Rating</p>
                      </div>
                      <div style={styles.metricBox}>
                        <p style={{ ...styles.metricValue, color: '#2563eb' }}>{selectedUser.reviews}</p>
                        <p style={{ fontSize: 14, color: '#4b5563', margin: '4px 0 0 0' }}>Total Reviews</p>
                      </div>
                    </div>
                  </div>
                )}

                <button
                  style={{ ...styles.button, ...styles.suspendButton }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#dc2626')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ef4444')}
                >
                  <Ban size={18} />
                  Suspend Account
                </button>
              </>
            )}

            {modalActiveTab === 'documents' && (
              <div>
                <div style={{ backgroundColor: '#f9fafb', borderRadius: 12, padding: 24, border: '2px dashed #d1d5db', textAlign: 'center', marginBottom: 16 }}>
                  <Upload size={40} color="#9ca3af" style={{ margin: '0 auto 12px' }} />
                  <p style={{ color: '#4b5563', marginBottom: 12 }}>Upload user documents</p>
                  <button
                    style={{ padding: '8px 16px', backgroundColor: '#22c55e', color: 'white', borderRadius: 8, border: 'none', cursor: 'pointer', fontSize: 14, fontWeight: 500 }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#16a34a')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#22c55e')}
                  >
                    Choose Files
                  </button>
                </div>

                <div>
                  <h3 style={{ fontWeight: 600, color: '#1f2937', marginBottom: 12 }}>Uploaded Documents</h3>
                  {['ID Verification.pdf', 'Portfolio.pdf', 'Certifications.pdf'].map((doc, idx) => (
                    <div key={idx} style={{ backgroundColor: 'white', borderRadius: 8, padding: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid #e5e7eb', marginBottom: 8 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <FileText color="#3b82f6" size={20} />
                        <div>
                          <p style={{ fontWeight: 500, color: '#1f2937', fontSize: 14, margin: 0 }}>{doc}</p>
                          <p style={{ fontSize: 12, color: '#6b7280', margin: 0 }}>Uploaded 2 days ago</p>
                        </div>
                      </div>
                      <button style={{ color: '#16a34a', fontWeight: 500, fontSize: 14, border: 'none', background: 'none', cursor: 'pointer' }}>
                        View
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {modalActiveTab === 'experience' && selectedUser.role === 'freelancers' && (
              <div>
                <div style={{ background: 'linear-gradient(to right, #faf5ff, #dbeafe)', borderRadius: 12, padding: 16, border: '1px solid #e9d5ff', marginBottom: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                    <Briefcase color="#9333ea" size={24} />
                    <h3 style={{ fontWeight: 600, color: '#1f2937', margin: 0 }}>Professional Experience</h3>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <div style={{ backgroundColor: 'white', borderRadius: 8, padding: 12 }}>
                      <p style={{ fontWeight: 500, color: '#1f2937', margin: 0 }}>Senior Web Developer</p>
                      <p style={{ fontSize: 14, color: '#4b5563', margin: '4px 0' }}>Tech Solutions Inc. • 2020-2023</p>
                      <p style={{ fontSize: 12, color: '#6b7280', margin: 0 }}>Led development of enterprise web applications</p>
                    </div>
                    <div style={{ backgroundColor: 'white', borderRadius: 8, padding: 12 }}>
                      <p style={{ fontWeight: 500, color: '#1f2937', margin: 0 }}>Full Stack Developer</p>
                      <p style={{ fontSize: 14, color: '#4b5563', margin: '4px 0' }}>Digital Agency • 2018-2020</p>
                      <p style={{ fontSize: 12, color: '#6b7280', margin: 0 }}>Built custom CMS and e-commerce platforms</p>
                    </div>
                  </div>
                </div>

                <div style={{ background: 'linear-gradient(to right, #f0fdf4, #ccfbf1)', borderRadius: 12, padding: 16, border: '1px solid #a7f3d0' }}>
                  <h3 style={{ fontWeight: 600, color: '#1f2937', marginBottom: 12 }}>Skills & Expertise</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Git'].map((skill, idx) => (
                      <span key={idx} style={{ padding: '4px 12px', backgroundColor: 'white', color: '#374151', borderRadius: 9999, fontSize: 14, fontWeight: 500, border: '1px solid #e5e7eb' }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {selectedUser.role === 'clients' && (
            <div style={{ marginTop: 24, padding: 16, backgroundColor: '#f0fdf4', borderRadius: 8, border: '1px solid #bbf7d0' }}>
              <p style={{ fontSize: 14, color: '#374151', margin: 0 }}>
                <span style={{ fontWeight: 600 }}>Verification Status:</span> {selectedUser.verified ? 'Verified Client' : 'Pending Verification'}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };

  // ===== RENDER ROOT =====
  return (
    <div style={styles.container}>
      <Sidebar />
      {activeSection === 'users' && <UserManagement />}
      {activeSection === 'disputes' && <DisputesManagement />}
      {activeSection === 'projects' && <ProjectsManagement />}
      {activeSection === 'finance' && <FinanceManagement />}
      {selectedUser && <UserDetailsModal />}
    </div>
  );
};

export default Admin;
