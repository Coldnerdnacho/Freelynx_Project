import React, { useState } from 'react';

const Search = () => <span style={{fontSize: '16px'}}>🔍</span>;
const Bell = () => <span style={{fontSize: '16px'}}>🔔</span>;
const MessageCircle = () => <span style={{fontSize: '16px'}}>💬</span>;
const MoreHorizontal = () => <span style={{fontSize: '16px'}}>⋯</span>;
const Heart = () => <span style={{fontSize: '16px'}}>❤️</span>;
const User = () => <span style={{fontSize: '16px'}}>👤</span>;
const Zap = () => <span style={{fontSize: '16px'}}>⚡</span>;
const Calendar = () => <span style={{fontSize: '16px'}}>📅</span>;
const Upload = () => <span style={{fontSize: '16px'}}>📤</span>;
const X = () => <span style={{fontSize: '18px'}}>✕</span>;
const DollarSign = () => <span style={{fontSize: '16px'}}>💵</span>;
const Clock = () => <span style={{fontSize: '16px'}}>⏰</span>;

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showNewProject, setShowNewProject] = useState(false);
  const [budgetType, setBudgetType] = useState('fixed');
  const [isPublic, setIsPublic] = useState(true);
  const [showProjectDetails, setShowProjectDetails] = useState(false);
  const [showFreelancerModal, setShowFreelancerModal] = useState(false);
  const [showDisputeModal, setShowDisputeModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedFreelancer, setSelectedFreelancer] = useState(null);
  const [projectForm, setProjectForm] = useState({
    title: '',
    category: '',
    description: '',
    timeline: '',
    attachments: '',
    experience: '',
    freelancersNeeded: '1',
    fixedBudget: '',
    hourlyRate: ''
  });
  const [disputeForm, setDisputeForm] = useState({
    reason: '',
    description: '',
    evidence: ''
  });

  const mockProjects = [
    { id: 1, name: 'Hospital', type: 'Payment', amount: '$1900', icon: Heart, color: '#ef4444' },
    { id: 2, name: 'Farmer Project', type: 'Payment', amount: '$2000', icon: User, color: '#3b82f6' },
    { id: 3, name: 'Coordination Project', type: 'Payment', amount: '$2500', icon: User, color: '#8b5cf6' },
    { id: 4, name: 'Soda Pop Campaign', type: 'Subscription', amount: '$200', icon: Zap, color: '#eab308' }
  ];

  const mockOngoingProjects = [
    { name: 'E-commerce Website', progress: 85, freelancer: 'John Doe', deadline: '5 days' },
    { name: 'Mobile App Design', progress: 60, freelancer: 'Jane Smith', deadline: '12 days' },
    { name: 'Brand Identity', progress: 45, freelancer: 'Mike Johnson', deadline: '20 days' },
    { name: 'Content Writing', progress: 90, freelancer: 'Sarah Williams', deadline: '2 days' },
    { name: 'SEO Optimization', progress: 30, freelancer: 'David Brown', deadline: '30 days' },
    { name: 'Social Media Campaign', progress: 75, freelancer: 'Emily Davis', deadline: '8 days' },
    { name: 'Logo Design', progress: 100, freelancer: 'Chris Wilson', deadline: 'Complete' }
  ];

  const mockDisputes = [
    { name: 'Website Development', status: 'Pending Review', date: '2 days ago' },
    { name: 'Logo Design Revision', status: 'In Progress', date: '5 days ago' },
    { name: 'Payment Processing', status: 'Resolved', date: '1 week ago' },
    { name: 'Content Delivery', status: 'Pending Review', date: '3 days ago' },
    { name: 'Mobile App Testing', status: 'In Progress', date: '1 week ago' },
    { name: 'Database Setup', status: 'Resolved', date: '2 weeks ago' },
    { name: 'API Integration', status: 'Pending Review', date: '4 days ago' }
  ];

  const mockPeople = [
    { url: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=50&h=50&fit=crop&crop=face', name: 'Sarah Johnson', role: 'UI/UX Designer' },
    { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face', name: 'Mike Chen', role: 'Developer' },
    { url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face', name: 'Emma Wilson', role: 'Designer' },
    { url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face', name: 'John Davis', role: 'Developer' },
    { url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=50&h=50&fit=crop&crop=face', name: 'Lisa Brown', role: 'Writer' },
    { url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face', name: 'Tom Anderson', role: 'Designer' },
    { url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop&crop=face', name: 'Amy Taylor', role: 'Marketer' }
  ];

  const handleNewProjectClick = () => {
    setShowNewProject(true);
    setTimeout(() => {
      document.getElementById('new-project-section')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }, 100);
  };

  const handleInputChange = (field, value) => {
    setProjectForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePublishProject = () => {
    if (projectForm.title && projectForm.category && projectForm.description && 
        (budgetType === 'fixed' ? projectForm.fixedBudget : projectForm.hourlyRate)) {
      alert(`Project Published Successfully!\n\nTitle: ${projectForm.title}\nCategory: ${projectForm.category}\nBudget: ${budgetType === 'fixed' ? '$' + projectForm.fixedBudget : '$' + projectForm.hourlyRate + '/hour'}\n\nYour project is now live and freelancers can start submitting proposals!`);
      setProjectForm({
        title: '',
        category: '',
        description: '',
        timeline: '',
        attachments: '',
        experience: '',
        freelancersNeeded: '1',
        fixedBudget: '',
        hourlyRate: ''
      });
      setShowNewProject(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      alert('Please fill in all required fields:\n- Project Title\n- Category\n- Description\n- Budget');
    }
  };

  const handleSaveDraft = () => {
    alert('Draft saved successfully!\n\nYou can continue editing this project later from your drafts section.');
    setShowNewProject(false);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowProjectDetails(true);
  };

  const handleFreelancerClick = (freelancer) => {
    setSelectedFreelancer({ name: freelancer, rating: 4.8, completedJobs: 45 });
    setShowFreelancerModal(true);
  };

  const handleRaiseDispute = () => {
    if (disputeForm.reason && disputeForm.description) {
      alert(`Dispute Raised Successfully!\n\nReason: ${disputeForm.reason}\n\nOur support team will review your case within 24-48 hours. You will be notified via email once the review process begins.`);
      setShowDisputeModal(false);
      setDisputeForm({ reason: '', description: '', evidence: '' });
    } else {
      alert('Please fill in all required fields');
    }
  };

  const handleContactFreelancer = () => {
    alert(`Message sent to ${selectedFreelancer.name}!\n\nYou can continue the conversation in the Messages section.`);
    setShowFreelancerModal(false);
  };

  const handleWithdraw = () => {
    if (withdrawAmount && parseFloat(withdrawAmount) > 0 && parseFloat(withdrawAmount) <= 24850) {
      alert(`Withdrawal request submitted!\n\nAmount: $${withdrawAmount}\n\nFunds will be transferred to your account within 2-3 business days.`);
      setShowWithdrawModal(false);
      setWithdrawAmount('');
    } else {
      alert('Please enter a valid amount');
    }
  };

  // Styles
  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: '#f3f4f6',
    display: 'flex',
    fontFamily: 'Arial, sans-serif'
  };

  const modalStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: '20px'
  };

  const modalContentStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '32px',
    maxWidth: '600px',
    width: '100%',
    maxHeight: '90vh',
    overflowY: 'auto'
  };

  const modalHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px'
  };

  const modalTitleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#1f2937'
  };

  const closeButtonStyle = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '24px',
    padding: '4px',
    color: '#6b7280'
  };

  const formGroupStyle = {
    marginBottom: '20px'
  };

  const labelStyle = {
    display: 'block',
    fontSize: '14px',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '8px'
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
    fontSize: '14px',
    outline: 'none',
    boxSizing: 'border-box'
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '100px',
    resize: 'vertical'
  };

  const buttonGroupStyle = {
    display: 'flex',
    gap: '12px',
    marginTop: '24px'
  };

  const primaryButtonStyle = {
    flex: 1,
    padding: '12px 24px',
    backgroundColor: '#10b981',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer'
  };

  const secondaryButtonStyle = {
    flex: 1,
    padding: '12px 24px',
    backgroundColor: '#f3f4f6',
    color: '#1f2937',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer'
  };

  const sidebarStyle = {
    width: '256px',
    backgroundColor: '#4b5563',
    color: 'white',
    display: 'flex',
    flexDirection: 'column'
  };

  const sidebarHeaderStyle = {
    padding: '24px',
    borderBottom: '1px solid #6b7280'
  };

  const navItemStyle = {
    padding: '12px 24px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    transition: 'background-color 0.3s'
  };

  const activeNavStyle = {
    ...navItemStyle,
    backgroundColor: '#10b981',
    borderRadius: '0 25px 25px 0',
    marginRight: '16px'
  };

  const companyDetailsStyle = {
    margin: '48px 16px 16px 16px',
    backgroundColor: '#10b981',
    borderRadius: '8px',
    padding: '24px'
  };

  const mainContentStyle = {
    flex: 1,
    padding: '24px'
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '32px'
  };

  const searchContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  };

  const searchInputStyle = {
    padding: '8px 12px 8px 40px',
    backgroundColor: '#374151',
    color: 'white',
    borderRadius: '20px',
    border: 'none',
    outline: 'none',
    width: '250px'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '24px'
  };

  const cardStyle = {
    backgroundColor: '#10b981',
    color: 'white',
    borderRadius: '8px',
    padding: '24px',
    marginBottom: '24px'
  };

  const cardHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px'
  };

  const projectItemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 0',
    cursor: 'pointer',
    transition: 'opacity 0.2s'
  };

  const iconContainerStyle = (color) => ({
    width: '32px',
    height: '32px',
    backgroundColor: color,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '12px'
  });

  const ProjectDetailsModal = () => (
    <div style={modalStyle} onClick={() => setShowProjectDetails(false)}>
      <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
        <div style={modalHeaderStyle}>
          <h2 style={modalTitleStyle}>Project Details</h2>
          <button style={closeButtonStyle} onClick={() => setShowProjectDetails(false)}>
            <X />
          </button>
        </div>

        {selectedProject && (
          <>
            <div style={{marginBottom: '24px', padding: '20px', backgroundColor: '#f9fafb', borderRadius: '12px'}}>
              <div style={{display: 'flex', alignItems: 'center', marginBottom: '16px'}}>
                <div style={iconContainerStyle(selectedProject.color)}>
                  <selectedProject.icon />
                </div>
                <div>
                  <div style={{fontWeight: 'bold', fontSize: '18px', color: '#1f2937'}}>{selectedProject.name}</div>
                  <div style={{fontSize: '14px', color: '#6b7280'}}>{selectedProject.type}</div>
                </div>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div style={{fontSize: '14px', color: '#6b7280'}}>Budget</div>
                <div style={{fontSize: '24px', fontWeight: 'bold', color: '#10b981'}}>{selectedProject.amount}</div>
              </div>
            </div>

            <div style={formGroupStyle}>
              <div style={{fontSize: '14px', fontWeight: '600', marginBottom: '12px', color: '#1f2937'}}>Project Status</div>
              <div style={{display: 'flex', gap: '8px'}}>
                <span style={{padding: '6px 12px', backgroundColor: '#d1fae5', color: '#065f46', borderRadius: '6px', fontSize: '13px', fontWeight: '500'}}>Active</span>
                <span style={{padding: '6px 12px', backgroundColor: '#dbeafe', color: '#1e40af', borderRadius: '6px', fontSize: '13px', fontWeight: '500'}}>On Track</span>
              </div>
            </div>

            <div style={formGroupStyle}>
              <div style={{fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: '#1f2937'}}>Description</div>
              <p style={{fontSize: '14px', color: '#4b5563', lineHeight: '1.6'}}>
                This project involves comprehensive development and implementation. The freelancer is making excellent progress and communication has been smooth throughout.
              </p>
            </div>

            <div style={buttonGroupStyle}>
              <button style={secondaryButtonStyle} onClick={() => {
                setShowProjectDetails(false);
                setShowDisputeModal(true);
              }}>
                Raise Dispute
              </button>
              <button style={primaryButtonStyle} onClick={() => {
                alert('Payment released successfully!\n\nThe freelancer will receive the payment within 1-2 business days.');
                setShowProjectDetails(false);
              }}>
                Release Payment
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );

  const WithdrawModal = () => (
    <div style={modalStyle} onClick={() => setShowWithdrawModal(false)}>
      <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
        <div style={modalHeaderStyle}>
          <h2 style={modalTitleStyle}>Withdraw Funds</h2>
          <button style={closeButtonStyle} onClick={() => setShowWithdrawModal(false)}>
            <X />
          </button>
        </div>
        
        <div style={{marginBottom: '24px', padding: '20px', background: '#f9fafb', borderRadius: '12px'}}>
          <div style={{fontSize: '14px', color: '#6b7280', marginBottom: '8px'}}>Available Balance</div>
          <div style={{fontSize: '32px', fontWeight: 'bold', color: '#10b981'}}>$24,850</div>
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Withdrawal Amount ($)</label>
          <input
            type="number"
            style={inputStyle}
            placeholder="Enter amount to withdraw"
            value={withdrawAmount}
            onChange={(e) => setWithdrawAmount(e.target.value)}
            max="24850"
          />
          <div style={{fontSize: '12px', color: '#6b7280', marginTop: '8px'}}>
            Processing fee: 2.5% • Minimum withdrawal: $50
          </div>
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Withdrawal Method</label>
          <select style={inputStyle}>
            <option>Bank Transfer</option>
            <option>PayPal</option>
            <option>Stripe</option>
          </select>
        </div>

        <div style={buttonGroupStyle}>
          <button style={secondaryButtonStyle} onClick={() => setShowWithdrawModal(false)}>
            Cancel
          </button>
          <button style={primaryButtonStyle} onClick={handleWithdraw}>
            Request Withdrawal
          </button>
        </div>
      </div>
    </div>
  );

  const FreelancerModal = () => (
    <div style={modalStyle} onClick={() => setShowFreelancerModal(false)}>
      <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
        <div style={modalHeaderStyle}>
          <h2 style={modalTitleStyle}>Freelancer Profile</h2>
          <button style={closeButtonStyle} onClick={() => setShowFreelancerModal(false)}>
            <X />
          </button>
        </div>

        {selectedFreelancer && (
          <>
            <div style={{textAlign: 'center', marginBottom: '24px'}}>
              <div style={{width: '80px', height: '80px', backgroundColor: '#10b981', borderRadius: '50%', margin: '0 auto 12px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <User />
              </div>
              <h3 style={{fontSize: '20px', fontWeight: 'bold', color: '#1f2937', marginBottom: '4px'}}>{selectedFreelancer.name}</h3>
              <div style={{fontSize: '14px', color: '#6b7280', marginBottom: '12px'}}>Full Stack Developer</div>
              <div style={{display: 'flex', gap: '16px', justifyContent: 'center', fontSize: '14px'}}>
                <div>
                  <span style={{fontWeight: 'bold', color: '#10b981'}}>★ {selectedFreelancer.rating}</span>
                  <span style={{color: '#6b7280'}}> Rating</span>
                </div>
                <div>
                  <span style={{fontWeight: 'bold', color: '#1f2937'}}>{selectedFreelancer.completedJobs}</span>
                  <span style={{color: '#6b7280'}}> Jobs Done</span>
                </div>
              </div>
            </div>

            <div style={formGroupStyle}>
              <div style={{fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: '#1f2937'}}>Skills</div>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
                {['React', 'Node.js', 'UI/UX', 'MongoDB'].map((skill, i) => (
                  <span key={i} style={{padding: '6px 12px', backgroundColor: '#f3f4f6', color: '#1f2937', borderRadius: '6px', fontSize: '13px'}}>{skill}</span>
                ))}
              </div>
            </div>

            <div style={formGroupStyle}>
              <div style={{fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: '#1f2937'}}>Bio</div>
              <p style={{fontSize: '14px', color: '#4b5563', lineHeight: '1.6'}}>
                Experienced full-stack developer with 5+ years of expertise in building scalable web applications. Passionate about clean code and user experience.
              </p>
            </div>

            <div style={buttonGroupStyle}>
              <button style={secondaryButtonStyle} onClick={() => setShowFreelancerModal(false)}>
                Close
              </button>
              <button style={primaryButtonStyle} onClick={handleContactFreelancer}>
                <MessageCircle /> Send Message
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );

  const DisputeModal = () => (
    <div style={modalStyle} onClick={() => setShowDisputeModal(false)}>
      <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
        <div style={modalHeaderStyle}>
          <h2 style={modalTitleStyle}>Raise a Dispute</h2>
          <button style={closeButtonStyle} onClick={() => setShowDisputeModal(false)}>
            <X />
          </button>
        </div>

        <div style={{marginBottom: '24px', padding: '16px', backgroundColor: '#fef3c7', borderRadius: '8px', border: '1px solid #fbbf24'}}>
          <div style={{fontSize: '13px', color: '#92400e', fontWeight: '500'}}>
            ⚠️ Please try to resolve issues directly with the freelancer before raising a dispute. Our support team will review all cases carefully.
          </div>
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Dispute Reason *</label>
          <select
            style={inputStyle}
            value={disputeForm.reason}
            onChange={(e) => setDisputeForm({...disputeForm, reason: e.target.value})}
          >
            <option value="">Select a reason</option>
            <option value="quality">Quality Issues</option>
            <option value="deadline">Missed Deadline</option>
            <option value="communication">Poor Communication</option>
            <option value="requirements">Not Meeting Requirements</option>
            <option value="payment">Payment Dispute</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Description *</label>
          <textarea
            style={textareaStyle}
            placeholder="Please provide detailed information about the issue..."
            value={disputeForm.description}
            onChange={(e) => setDisputeForm({...disputeForm, description: e.target.value})}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Supporting Evidence (Optional)</label>
          <input
            type="text"
            style={inputStyle}
            placeholder="Link to files, screenshots, or documentation"
            value={disputeForm.evidence}
            onChange={(e) => setDisputeForm({...disputeForm, evidence: e.target.value})}
          />
        </div>

        <div style={buttonGroupStyle}>
          <button style={secondaryButtonStyle} onClick={() => setShowDisputeModal(false)}>
            Cancel
          </button>
          <button style={primaryButtonStyle} onClick={handleRaiseDispute}>
            Submit Dispute
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div style={containerStyle}>
      {showProjectDetails && <ProjectDetailsModal />}
      {showFreelancerModal && <FreelancerModal />}
      {showDisputeModal && <DisputeModal />}
      {showWithdrawModal && <WithdrawModal />}

      {/* Sidebar */}
      <div style={sidebarStyle}>
        <div style={sidebarHeaderStyle}>
          <h1 style={{fontSize: '20px', fontWeight: 'bold', margin: 0}}>Company Name</h1>
        </div>
        
        <nav style={{marginTop: '32px', flex: 1}}>
          <div style={activeNavStyle}>
            <div style={{width: '8px', height: '8px', backgroundColor: 'white', borderRadius: '50%', marginRight: '12px'}}></div>
            <span>Dashboard</span>
          </div>
          
          <div style={navItemStyle} onClick={() => alert('Insight - Coming soon!')}>
            <div style={{width: '16px', height: '16px', marginRight: '12px'}}></div>
            <span>Insight</span>
          </div>
          
          <div style={navItemStyle} onClick={() => alert('Transaction - Coming soon!')}>
            <div style={{width: '16px', height: '16px', marginRight: '12px'}}></div>
            <span>Transaction</span>
          </div>
          
          <div style={navItemStyle} onClick={() => alert('Account - Coming soon!')}>
            <div style={{width: '16px', height: '16px', marginRight: '12px'}}></div>
            <span>Account</span>
          </div>
          
          <div style={navItemStyle} onClick={() => setShowWithdrawModal(true)}>
            <div style={{width: '16px', height: '16px', marginRight: '12px'}}></div>
            <span>Withdraw Funds</span>
          </div>
          
          <div style={navItemStyle} onClick={() => alert('Settings - Coming soon!')}>
            <div style={{width: '16px', height: '16px', marginRight: '12px'}}></div>
            <span>Settings</span>
          </div>
        </nav>
        
        {/* Company Details Card */}
        <div style={companyDetailsStyle}>
          <h3 style={{fontSize: '18px', fontWeight: 'bold', marginBottom: '8px'}}>COMPANY DETAILS</h3>
          <p style={{fontSize: '14px', marginBottom: '16px'}}>Manage your company profile and preferences</p>
          <button 
            style={{
              background: 'white',
              color: '#10b981',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '14px'
            }}
            onClick={() => alert('Opening company settings...')}
          >
            View Details →
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={mainContentStyle}>
        {/* Header */}
        <div style={headerStyle}>
          <h1 style={{fontSize: '32px', fontWeight: 'bold', color: '#1f2937', margin: 0}}>Dashboard</h1>
          <div style={searchContainerStyle}>
            <div style={{position: 'relative'}}>
              <div style={{position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)'}}>
                <Search />
              </div>
              <input
                type="text"
                placeholder="Search Here"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={searchInputStyle}
              />
            </div>
            <button 
              style={{background: 'none', border: 'none', cursor: 'pointer'}}
              onClick={() => alert('Messages - Coming soon!')}
            >
              <MessageCircle />
            </button>
            <button 
              style={{background: 'none', border: 'none', cursor: 'pointer'}}
              onClick={() => alert('You have 3 new notifications')}
            >
              <Bell />
            </button>
            <img
              src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=40&h=40&fit=crop&crop=face"
              alt="Profile"
              style={{width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer'}}
              onClick={() => alert('Profile Settings')}
            />
          </div>
        </div>

        <div style={gridStyle}>
          {/* Left Column */}
          <div>
            {/* Live Projects */}
            <div style={cardStyle}>
              <div style={cardHeaderStyle}>
                <h2 style={{fontSize: '20px', fontWeight: 'bold', margin: 0}}>Live Projects</h2>
                <button 
                  style={{background: 'none', border: 'none', cursor: 'pointer', color: 'white'}}
                  onClick={() => alert('View all projects')}
                >
                  <MoreHorizontal />
                </button>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '32px'}}>
                <div>
                  <span style={{fontSize: '24px', fontWeight: 'bold'}}>5</span>
                  <span style={{marginLeft: '8px'}}>Completed</span>
                </div>
                <div>
                  <span style={{fontSize: '24px', fontWeight: 'bold', color: '#fca5a5'}}>2</span>
                  <span style={{marginLeft: '8px', color: '#fca5a5'}}>Pending</span>
                </div>
              </div>
            </div>

            {/* Previous Projects Listed */}
            <div style={cardStyle}>
              <div style={cardHeaderStyle}>
                <h2 style={{fontSize: '20px', fontWeight: 'bold', margin: 0}}>Previous Projects Listed</h2>
                <button 
                  style={{background: 'none', border: 'none', cursor: 'pointer', color: 'white'}}
                  onClick={() => alert('View all projects')}
                >
                  <MoreHorizontal />
                </button>
              </div>
              <div>
                {mockProjects.map((project) => (
                  <div 
                    key={project.id} 
                    style={projectItemStyle}
                    onClick={() => handleProjectClick(project)}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                  >
                    <div style={{display: 'flex', alignItems: 'center'}}>
                      <div style={iconContainerStyle(project.color)}>
                        <project.icon />
                      </div>
                      <span style={{fontWeight: '500'}}>{project.name}</span>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
                      <span style={{fontSize: '14px'}}>{project.type}</span>
                      <span style={{fontWeight: 'bold'}}>{project.amount}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Previous People */}
            <div style={cardStyle}>
              <div style={cardHeaderStyle}>
                <h2 style={{fontSize: '20px', fontWeight: 'bold', margin: 0}}>Previous people you've worked with</h2>
                <button 
                  style={{background: 'none', border: 'none', cursor: 'pointer', color: 'white'}}
                  onClick={() => alert('View all freelancers')}
                >
                  <MoreHorizontal />
                </button>
              </div>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
                {mockPeople.map((person, index) => (
                  <img
                    key={index}
                    src={person.url}
                    alt={person.name}
                    title={`${person.name} - ${person.role}`}
                    style={{width: '48px', height: '48px', borderRadius: '50%', border: '2px solid white', cursor: 'pointer'}}
                    onClick={() => handleFreelancerClick(person.name)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Ongoing Projects */}
            <div style={cardStyle}>
              <div style={cardHeaderStyle}>
                <h2 style={{fontSize: '18px', fontWeight: 'bold', margin: 0}}>Ongoing Projects</h2>
                <button 
                  style={{background: 'none', border: 'none', cursor: 'pointer', color: 'white'}}
                  onClick={() => alert('View all ongoing projects')}
                >
                  <MoreHorizontal />
                </button>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
                {mockOngoingProjects.map((project, index) => (
                  <div 
                    key={index} 
                    style={{
                      cursor: 'pointer',
                      padding: '8px',
                      borderRadius: '6px',
                      transition: 'background 0.2s'
                    }}
                    onClick={() => handleFreelancerClick(project.freelancer)}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px'}}>
                      <span style={{fontSize: '14px', fontWeight: '500', overflow: 'hidden', textOverflow: 'ellipsis'}}>{project.name}</span>
                      <span style={{fontSize: '12px', fontWeight: 'bold'}}>{project.progress}%</span>
                    </div>
                    <div style={{width: '100%', height: '4px', backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: '2px', overflow: 'hidden', marginBottom: '6px'}}>
                      <div style={{width: `${project.progress}%`, height: '100%', backgroundColor: 'white', borderRadius: '2px'}}></div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '11px', opacity: 0.8}}>
                      <span>By {project.freelancer}</span>
                      <span><Clock /> {project.deadline}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Disputes Raised */}
            <div style={cardStyle}>
              <div style={cardHeaderStyle}>
                <h2 style={{fontSize: '18px', fontWeight: 'bold', margin: 0}}>Disputes Raised</h2>
                <button 
                  style={{background: 'none', border: 'none', cursor: 'pointer', color: 'white'}}
                  onClick={() => alert('View all disputes')}
                >
                  <MoreHorizontal />
                </button>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
                {mockDisputes.slice(0, 5).map((dispute, index) => (
                  <div 
                    key={index} 
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer',
                      padding: '8px',
                      borderRadius: '6px',
                      transition: 'background 0.2s'
                    }}
                    onClick={() => alert(`Dispute Details:\n${dispute.name}\nStatus: ${dispute.status}\nRaised: ${dispute.date}`)}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <div style={{flex: 1}}>
                      <div style={{fontSize: '14px', fontWeight: '500', overflow: 'hidden', textOverflow: 'ellipsis', marginBottom: '4px'}}>{dispute.name}</div>
                      <div style={{fontSize: '11px', opacity: 0.8}}>{dispute.date}</div>
                    </div>
                    <div style={{
                      fontSize: '11px',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      backgroundColor: dispute.status === 'Resolved' ? 'rgba(16, 185, 129, 0.3)' : dispute.status === 'In Progress' ? 'rgba(251, 191, 36, 0.3)' : 'rgba(239, 68, 68, 0.3)',
                      whiteSpace: 'nowrap'
                    }}>
                      {dispute.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* New Project Button */}
            <div 
              style={{
                backgroundColor: '#059669',
                color: 'white',
                borderRadius: '8px',
                padding: '16px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'background-color 0.3s'
              }}
              onClick={handleNewProjectClick}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#047857'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#059669'}
            >
              <span style={{fontSize: '18px', fontWeight: 'bold'}}>+ new project</span>
            </div>
          </div>
        </div>

        {/* Create New Project Section */}
        {showNewProject && (
          <div id="new-project-section" style={{marginTop: '48px'}}>
            <div style={{backgroundColor: '#10b981', color: 'white', borderRadius: '8px', padding: '32px'}}>
              <h1 style={{fontSize: '32px', fontWeight: 'bold', marginBottom: '8px'}}>CREATE A NEW PROJECT</h1>
              <p style={{fontSize: '18px', marginBottom: '32px', opacity: 0.9}}>Clear description helps you get better proposals.</p>
              
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px'}}>
                {/* Left Column */}
                <div>
                  {/* Project Title */}
                  <div style={{marginBottom: '24px'}}>
                    <label style={{display: 'block', fontSize: '18px', fontWeight: '500', marginBottom: '8px'}}>Project Title</label>
                    <input
                      type="text"
                      value={projectForm.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                      style={{width: '100%', padding: '12px', borderRadius: '8px', border: 'none', fontSize: '16px', boxSizing: 'border-box'}}
                      placeholder="Enter project title"
                    />
                  </div>

                  {/* Category/Skill Required */}
                  <div style={{marginBottom: '24px'}}>
                    <label style={{display: 'block', fontSize: '18px', fontWeight: '500', marginBottom: '8px'}}>Category/Skill Required</label>
                    <input
                      type="text"
                      value={projectForm.category}
                      onChange={(e) => handleInputChange('category', e.target.value)}
                      style={{width: '100%', padding: '12px', borderRadius: '8px', border: 'none', fontSize: '16px', boxSizing: 'border-box'}}
                      placeholder="e.g., Web Development, Graphic Design"
                    />
                  </div>

                  {/* Project Description */}
                  <div style={{marginBottom: '24px'}}>
                    <label style={{display: 'block', fontSize: '18px', fontWeight: '500', marginBottom: '8px'}}>Project Description</label>
                    <textarea
                      value={projectForm.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      style={{width: '100%', padding: '12px', borderRadius: '8px', border: 'none', fontSize: '16px', minHeight: '120px', resize: 'vertical', boxSizing: 'border-box'}}
                      placeholder="Describe your project requirements in detail..."
                    />
                  </div>

                  {/* Budget */}
                  <div style={{marginBottom: '24px'}}>
                    <label style={{display: 'block', fontSize: '18px', fontWeight: '500', marginBottom: '8px'}}>Budget</label>
                    <div style={{backgroundColor: 'rgba(255,255,255,0.1)', padding: '16px', borderRadius: '8px'}}>
                      <div style={{marginBottom: '12px'}}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
                          <div style={{display: 'flex', alignItems: 'center', minWidth: '140px'}}>
                            <input
                              type="radio"
                              id="fixed-price"
                              name="budget-type"
                              checked={budgetType === 'fixed'}
                              onChange={() => setBudgetType('fixed')}
                              style={{width: '20px', height: '20px'}}
                            />
                            <label htmlFor="fixed-price" style={{marginLeft: '8px', fontSize: '16px', cursor: 'pointer'}}>Fixed Price</label>
                          </div>
                          <input
                            type="text"
                            value={projectForm.fixedBudget}
                            onChange={(e) => handleInputChange('fixedBudget', e.target.value)}
                            disabled={budgetType !== 'fixed'}
                            style={{flex: 1, padding: '12px', borderRadius: '8px', border: 'none', fontSize: '16px', opacity: budgetType !== 'fixed' ? 0.5 : 1}}
                            placeholder="Enter fixed amount"
                          />
                        </div>
                      </div>
                      <div>
                        <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
                          <div style={{display: 'flex', alignItems: 'center', minWidth: '140px'}}>
                            <input
                              type="radio"
                              id="hourly-rate"
                              name="budget-type"
                              checked={budgetType === 'hourly'}
                              onChange={() => setBudgetType('hourly')}
                              style={{width: '20px', height: '20px'}}
                            />
                            <label htmlFor="hourly-rate" style={{marginLeft: '8px', fontSize: '16px', cursor: 'pointer'}}>Hourly Rate</label>
                          </div>
                          <input
                            type="text"
                            value={projectForm.hourlyRate}
                            onChange={(e) => handleInputChange('hourlyRate', e.target.value)}
                            disabled={budgetType !== 'hourly'}
                            style={{flex: 1, padding: '12px', borderRadius: '8px', border: 'none', fontSize: '16px', opacity: budgetType !== 'hourly' ? 0.5 : 1}}
                            placeholder="Enter hourly rate"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div>
                  {/* Timeline/Deadline */}
                  <div style={{marginBottom: '24px'}}>
                    <label style={{display: 'block', fontSize: '18px', fontWeight: '500', marginBottom: '8px'}}>Timeline/Deadline</label>
                    <input
                      type="date"
                      value={projectForm.timeline}
                      onChange={(e) => handleInputChange('timeline', e.target.value)}
                      style={{width: '100%', padding: '12px', borderRadius: '8px', border: 'none', fontSize: '16px', boxSizing: 'border-box'}}
                    />
                  </div>

                  {/* Attachments */}
                  <div style={{marginBottom: '24px'}}>
                    <label style={{display: 'block', fontSize: '18px', fontWeight: '500', marginBottom: '8px'}}>Attachments (optional)</label>
                    <input
                      type="text"
                      value={projectForm.attachments}
                      onChange={(e) => handleInputChange('attachments', e.target.value)}
                      style={{width: '100%', padding: '12px', borderRadius: '8px', border: 'none', fontSize: '16px', boxSizing: 'border-box'}}
                      placeholder="Upload files or paste links"
                    />
                  </div>

                  {/* Experience Level Needed */}
                  <div style={{marginBottom: '24px'}}>
                    <label style={{display: 'block', fontSize: '18px', fontWeight: '500', marginBottom: '8px'}}>Experience Level Needed</label>
                    <select
                      value={projectForm.experience}
                      onChange={(e) => handleInputChange('experience', e.target.value)}
                      style={{width: '100%', padding: '12px', borderRadius: '8px', border: 'none', fontSize: '16px', boxSizing: 'border-box'}}
                    >
                      <option value="">Select experience level</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="expert">Expert</option>
                    </select>
                  </div>

                  {/* No. of Freelancers Needed */}
                  <div style={{marginBottom: '24px'}}>
                    <label style={{display: 'block', fontSize: '18px', fontWeight: '500', marginBottom: '8px'}}>No. of Freelancers Needed</label>
                    <input
                      type="number"
                      value={projectForm.freelancersNeeded}
                      onChange={(e) => handleInputChange('freelancersNeeded', e.target.value)}
                      style={{width: '100%', padding: '12px', borderRadius: '8px', border: 'none', fontSize: '16px', boxSizing: 'border-box'}}
                      placeholder="Enter number"
                      min="1"
                    />
                  </div>

                  {/* Visibility */}
                  <div style={{marginBottom: '24px'}}>
                    <label style={{display: 'block', fontSize: '18px', fontWeight: '500', marginBottom: '8px'}}>Visibility</label>
                    <div style={{backgroundColor: 'rgba(255,255,255,0.1)', padding: '16px', borderRadius: '8px'}}>
                      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                        <span style={{fontSize: '16px'}}>public</span>
                        <div 
                          style={{
                            position: 'relative',
                            width: '56px',
                            height: '28px',
                            borderRadius: '20px',
                            cursor: 'pointer',
                            backgroundColor: isPublic ? '#10d9c4' : '#9ca3af',
                            transition: 'background-color 0.3s'
                          }}
                          onClick={() => setIsPublic(!isPublic)}
                        >
                          <div 
                            style={{
                              position: 'absolute',
                              top: '4px',
                              width: '20px',
                              height: '20px',
                              backgroundColor: 'white',
                              borderRadius: '50%',
                              transition: 'transform 0.3s',
                              transform: isPublic ? 'translateX(4px)' : 'translateX(28px)'
                            }}
                          />
                        </div>
                        <span style={{fontSize: '16px'}}>invite-only</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{display: 'flex', gap: '16px', marginTop: '32px'}}>
                <button
                  onClick={handlePublishProject}
                  style={{
                    flex: 1,
                    padding: '14px 24px',
                    backgroundColor: '#059669',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                >
                  Publish Project
                </button>
                <button
                  onClick={handleSaveDraft}
                  style={{
                    flex: 1,
                    padding: '14px 24px',
                    backgroundColor: '#10b981',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                >
                  Save Draft
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;