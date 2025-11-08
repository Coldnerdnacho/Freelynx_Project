// src/pages/FreelancerDispute.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Plus, ArrowLeft } from 'lucide-react';

export default function FreelancerDispute({ user, contracts = [], onBack }) {
  const [showForm, setShowForm] = useState(false);
  const [disputes, setDisputes] = useState([]);

  const [form, setForm] = useState({
    projectId: '',
    category: '',
    priority: 'medium',
    description: '',
    amount: '',
    evidence: null,
  });

  const S = {
    wrap: { padding: 24 },
    head: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
    h2: { fontSize: 22, fontWeight: 700 },
    btnPrimary: { padding: '10px 16px', background: '#019523', color: '#fff', borderRadius: 8, border: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, cursor: 'pointer' },
    card: { background: '#fff', padding: 16, marginBottom: 16, borderRadius: 12, border: '1px solid #eee' },
    label: { display: 'block', fontSize: 14, fontWeight: 600, color: '#1f2937', marginBottom: 8 },
    select: { width: '100%', padding: '10px 14px', borderRadius: 8, border: '1px solid #e5e7eb', fontSize: 14, background: '#f9fafb', outline: 'none', marginBottom: 12 },
    input: { width: '100%', padding: '10px 14px', borderRadius: 8, border: '1px solid #e5e7eb', fontSize: 14, background: '#f9fafb', outline: 'none', marginBottom: 12 },
    textarea: { width: '100%', padding: '10px 14px', borderRadius: 8, border: '1px solid #e5e7eb', fontSize: 14, background: '#f9fafb', outline: 'none', minHeight: 100, resize: 'vertical', marginBottom: 12 },
    fileBox: { border: '2px dashed #e5e7eb', borderRadius: 8, padding: 16, textAlign: 'center', cursor: 'pointer', marginBottom: 12 },
    btnRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
    backBtn: { display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 12px', border: '1px solid #e5e7eb', borderRadius: 8, background: '#fff', cursor: 'pointer' },
    rightBtns: { display: 'flex', gap: 8 },
    btnSecondary: { padding: '10px 16px', border: '1px solid #019523', color: '#019523', background: '#fff', borderRadius: 8, cursor: 'pointer' },
    submitBtn: { padding: '10px 16px', border: 'none', background: '#019523', color: '#fff', borderRadius: 8, cursor: 'pointer' },
    row: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 8 },
    badge: { padding: '3px 10px', borderRadius: 12, fontSize: 12, fontWeight: 600 },
    high: { background: '#fee2e2', color: '#991b1b' },
    med: { background: '#fef3c7', color: '#92400e' },
    low: { background: '#dbeafe', color: '#1e40af' },
  };

  const loadDisputes = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/disputes');
      setDisputes(res.data.filter(d => d.raisedBy._id === user.id)); // Show only freelancer disputes
    } catch (e) {
      console.error("Error loading disputes:", e);
    }
  };

  useEffect(() => {
    loadDisputes();
  }, []);

  const createDispute = async () => {
    const selectedContract = contracts.find(c => c._id === form.projectId);
    if (!selectedContract) {
      alert("Please select a valid project/contract");
      return;
    }

    const payload = {
      projectId: form.projectId,
      raisedBy: user.id,
      against: selectedContract.clientId,
      issue: form.description,
      amount: Number(form.amount),
      priority: form.priority,
    };

    try {
      await axios.post('http://localhost:5000/api/disputes', payload);
      await loadDisputes();
      setShowForm(false);
    } catch (e) {
      console.error("Error creating dispute:", e);
    }
  };

  const Summary = () => (
    <>
      <div style={S.head}>
        <h2 style={S.h2}>Dispute Center</h2>
        <div style={{ display: 'flex', gap: 8 }}>
          {onBack && (
            <button style={S.backBtn} onClick={onBack}>
              <ArrowLeft size={16} /> Back
            </button>
          )}
          <button style={S.btnPrimary} onClick={() => setShowForm(true)}>
            <Plus size={16} /> Raise Dispute
          </button>
        </div>
      </div>

      {disputes.map(d => (
        <div key={d._id} style={S.card}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
            <strong>#{d._id.slice(-6).toUpperCase()}</strong>
            <span
              style={{
                ...S.badge,
                ...(d.priority === 'high' ? S.high : d.priority === 'medium' ? S.med : S.low),
              }}
            >
              {d.priority.toUpperCase()}
            </span>
          </div>
          <div style={{ fontWeight: 700, marginBottom: 4 }}>{d.project?.title || 'Unknown Project'}</div>
          <div style={{ color: '#6b7280', fontSize: 13, marginBottom: 8 }}>Client: {d.against?.name}</div>
          <div style={{ marginBottom: 8 }}>
            <strong>Issue:</strong> {d.issue}
          </div>
          <div style={{ color: '#4b5563', lineHeight: 1.6 }}>{d.description}</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, fontSize: 13, color: '#6b7280' }}>
            <span>Filed: {new Date(d.createdAt).toLocaleDateString()}</span>
            <span style={{ color: '#019523', fontWeight: 700 }}>Amount: ${d.amount}</span>
          </div>
        </div>
      ))}
    </>
  );

  const Form = () => (
    <>
      <div style={S.btnRow}>
        <button style={S.backBtn} onClick={() => setShowForm(false)}>
          <ArrowLeft size={16} /> Back to Summary
        </button>
      </div>
      <div style={S.card}>
        <h3 style={{ marginBottom: 12 }}>Raise New Dispute</h3>

        <div style={S.row}>
          <div>
            <label style={S.label}>Project/Contract *</label>
            <select
              style={S.select}
              value={form.projectId}
              onChange={(e) => setForm({ ...form, projectId: e.target.value })}
              required
            >
              <option value="">Choose a contract...</option>
              {contracts.map((c, i) => (
                <option key={i} value={c._id}>
                  {c.title} — {c.client}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label style={S.label}>Category *</label>
            <select
              style={S.select}
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              required
            >
              <option value="">Select category...</option>
              <option value="Payment Issue">Payment Issue</option>
              <option value="Scope Creep">Scope Creep</option>
              <option value="Communication Issue">Communication Issue</option>
              <option value="Quality Dispute">Quality Dispute</option>
              <option value="Contract Violation">Contract Violation</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div style={S.row}>
          <div>
            <label style={S.label}>Priority *</label>
            <select
              style={S.select}
              value={form.priority}
              onChange={(e) => setForm({ ...form, priority: e.target.value })}
              required
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <div>
            <label style={S.label}>Amount Claimed *</label>
            <input
              style={S.input}
              type="number"
              placeholder="Enter amount (in $)"
              value={form.amount}
              onChange={(e) => setForm({ ...form, amount: e.target.value })}
              required
            />
          </div>
        </div>

        <div>
          <label style={S.label}>Issue Description *</label>
          <textarea
            style={S.textarea}
            placeholder="Provide a detailed description (what happened, when, and expected resolution)."
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            required
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
          <button type="button" style={S.btnSecondary} onClick={() => setShowForm(false)}>Cancel</button>
          <button
            type="button"
            style={S.submitBtn}
            onClick={createDispute}
          >
            Submit Dispute
          </button>
        </div>
      </div>
    </>
  );

  return (
    <div style={S.wrap}>
      {showForm ? <Form /> : <Summary />}
    </div>
  );
}
