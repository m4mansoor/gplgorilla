// GPL Gorilla Advanced Dashboard JavaScript - FIXED VERSION
// Comprehensive 30-Day Success Tracking System

// Enhanced project data with all advanced features
const projectData = {
  project: {
    name: "GPL Gorilla 30-Day Success Plan",
    startDate: "2025-09-15",
    endDate: "2025-10-14",
    totalBudget: 40000,
    currency: "PKR",
    currentDay: 1,
    totalDays: 30
  },
  kpis: {
    salesTargets: {
      phase1: { target: 0, actual: 0, description: "Foundation building" },
      phase2: { target: 5, actual: 0, description: "First sales" },
      phase3: { target: 20, actual: 0, description: "Scale momentum" },
      phase4: { target: 50, actual: 0, description: "Maximum growth" }
    },
    budgetTargets: {
      phase1: 5000,
      phase2: 14000,
      phase3: 30000,
      phase4: 45000
    },
    criticalMetrics: [
      "Facebook Pixel Installation",
      "First Ad Campaign Launch", 
      "AI Content Generation Complete",
      "Sales Funnel Optimization",
      "Lookalike Audience Creation"
    ]
  },
  phases: [
    {
      id: 1,
      name: "Setup and Prep",
      dateRange: "Days 1-3 (Sept 15-17)",
      budget: 5000,
      budgetSpent: 0,
      dailyBudget: 1667,
      description: "Build foundations. Daily check-ins to approve creatives and targeting.",
      priority: "Critical",
      salesTarget: 0,
      salesActual: 0,
      dependencies: [],
      milestones: ["Facebook Pixel Setup", "Branding Complete", "Initial Content Ready"],
      tasks: [
        {
          id: "p1_t1",
          assignee: "Inaamul Haq Mansoor",
          task: "Define branding guidelines (gorilla-themed messaging)",
          priority: "High",
          estimatedHours: 4,
          actualHours: 0,
          dependencies: [],
          dueDate: "2025-09-15",
          completed: false,
          critical: true,
          notes: "Focus on aggressive, powerful messaging that stands out"
        },
        {
          id: "p1_t2", 
          assignee: "Inaamul Haq Mansoor",
          task: "Lead keyword research for ad copy",
          priority: "High",
          estimatedHours: 6,
          actualHours: 0,
          dependencies: ["p1_t1"],
          dueDate: "2025-09-16",
          completed: false,
          critical: true,
          notes: "Target high-intent keywords with commercial value"
        },
        {
          id: "p1_t3",
          assignee: "Inaamul Haq Mansoor", 
          task: "Plan global targeting strategy (Pakistan + US/MENA)",
          priority: "High",
          estimatedHours: 4,
          actualHours: 0,
          dependencies: ["p1_t2"],
          dueDate: "2025-09-16",
          completed: false,
          critical: false,
          notes: "Consider time zones and local preferences"
        },
        {
          id: "p1_t4",
          assignee: "Inaamul Haq Mansoor",
          task: "Fix index depth and generate AI content for 20-30 product posts",
          priority: "Critical",
          estimatedHours: 12,
          actualHours: 0,
          dependencies: [],
          dueDate: "2025-09-17",
          completed: false,
          critical: true,
          notes: "Quality content is crucial for SEO and conversions"
        },
        {
          id: "p1_t5",
          assignee: "Hammad",
          task: "Set up Facebook Ads Manager and install Pixel",
          priority: "Critical",
          estimatedHours: 3,
          actualHours: 0,
          dependencies: [],
          dueDate: "2025-09-15",
          completed: false,
          critical: true,
          notes: "Ensure proper tracking for all events"
        },
        {
          id: "p1_t6",
          assignee: "Hammad",
          task: "Optimize sales funnel and test conversions",
          priority: "High",
          estimatedHours: 6,
          actualHours: 0,
          dependencies: ["p1_t5"],
          dueDate: "2025-09-16",
          completed: false,
          critical: true,
          notes: "A/B test different funnel variations"
        },
        {
          id: "p1_t7",
          assignee: "Hammad", 
          task: "Execute on-page SEO optimization",
          priority: "Medium",
          estimatedHours: 4,
          actualHours: 0,
          dependencies: ["p1_t2"],
          dueDate: "2025-09-17",
          completed: false,
          critical: false,
          notes: "Focus on core pages first"
        },
        {
          id: "p1_t8",
          assignee: "Mian Shahzad Raza",
          task: "Create 5-10 ad creatives with gorilla graphics",
          priority: "High",
          estimatedHours: 8,
          actualHours: 0,
          dependencies: ["p1_t1"],
          dueDate: "2025-09-16",
          completed: false,
          critical: true,
          notes: "Test different visual styles and messaging"
        },
        {
          id: "p1_t9",
          assignee: "Mian Shahzad Raza",
          task: "Promote via WPAcademy channels",
          priority: "Medium",
          estimatedHours: 2,
          actualHours: 0,
          dependencies: [],
          dueDate: "2025-09-17",
          completed: false,
          critical: false,
          notes: "Leverage existing audience"
        },
        {
          id: "p1_t10",
          assignee: "Muhammad Ibrahim",
          task: "Ensure site security and handle updates",
          priority: "High",
          estimatedHours: 3,
          actualHours: 0,
          dependencies: [],
          dueDate: "2025-09-15",
          completed: false,
          critical: false,
          notes: "Security is crucial for customer trust"
        },
        {
          id: "p1_t11",
          assignee: "Muhammad Ibrahim",
          task: "Integrate AI API for content generation",
          priority: "Critical",
          estimatedHours: 6,
          actualHours: 0,
          dependencies: [],
          dueDate: "2025-09-16",
          completed: false,
          critical: true,
          notes: "Automate content scaling"
        }
      ]
    },
    {
      id: 2,
      name: "Launch and Test", 
      dateRange: "Days 4-10 (Sept 18-24)",
      budget: 14000,
      budgetSpent: 0,
      dailyBudget: 2000,
      description: "Go live with small budget. Monitor hourly; pause low-performers.",
      priority: "Critical",
      salesTarget: 5,
      salesActual: 0,
      dependencies: ["p1_t5", "p1_t6", "p1_t8"],
      milestones: ["First Ad Live", "First Sale", "CTR > 1%"],
      tasks: [
        {
          id: "p2_t1",
          assignee: "Inaamul Haq Mansoor",
          task: "Refine global strategy and analyze early data",
          priority: "High",
          estimatedHours: 4,
          actualHours: 0,
          dependencies: ["p1_t3"],
          dueDate: "2025-09-19",
          completed: false,
          critical: true,
          notes: "Data-driven optimization is key"
        },
        {
          id: "p2_t2",
          assignee: "Inaamul Haq Mansoor", 
          task: "Continue AI content generation for 50+ product posts",
          priority: "High",
          estimatedHours: 10,
          actualHours: 0,
          dependencies: ["p1_t4"],
          dueDate: "2025-09-22",
          completed: false,
          critical: false,
          notes: "Scale content production"
        },
        {
          id: "p2_t3",
          assignee: "Hammad",
          task: "Launch ads with A/B tests on 3-5 segments",
          priority: "Critical",
          estimatedHours: 6,
          actualHours: 0,
          dependencies: ["p1_t5", "p1_t6", "p1_t8"],
          dueDate: "2025-09-18",
          completed: false,
          critical: true,
          notes: "Start with small budgets and scale winners"
        },
        {
          id: "p2_t4",
          assignee: "Hammad",
          task: "Manage budget optimization and track CTR/CPC",
          priority: "Critical",
          estimatedHours: 8,
          actualHours: 0,
          dependencies: ["p2_t3"],
          dueDate: "2025-09-20",
          completed: false,
          critical: true,
          notes: "Monitor metrics hourly"
        },
        {
          id: "p2_t5", 
          assignee: "Mian Shahzad Raza",
          task: "Create 3-5 creative variations based on feedback",
          priority: "High",
          estimatedHours: 6,
          actualHours: 0,
          dependencies: ["p2_t3"],
          dueDate: "2025-09-21",
          completed: false,
          critical: false,
          notes: "Iterate based on performance data"
        },
        {
          id: "p2_t6",
          assignee: "Mian Shahzad Raza",
          task: "Boost promotion in WPAcademy channels",
          priority: "Medium",
          estimatedHours: 3,
          actualHours: 0,
          dependencies: [],
          dueDate: "2025-09-20",
          completed: false,
          critical: false,
          notes: "Increase organic reach"
        },
        {
          id: "p2_t7",
          assignee: "Muhammad Ibrahim",
          task: "Monitor site performance and handle downtime",
          priority: "High",
          estimatedHours: 4,
          actualHours: 0,
          dependencies: [],
          dueDate: "2025-09-19",
          completed: false,
          critical: false,
          notes: "Zero downtime tolerance"
        },
        {
          id: "p2_t8",
          assignee: "Muhammad Ibrahim",
          task: "Automate AI API for batch content addition",
          priority: "Medium",
          estimatedHours: 5,
          actualHours: 0,
          dependencies: ["p1_t11"],
          dueDate: "2025-09-23",
          completed: false,
          critical: false,
          notes: "Efficiency through automation"
        }
      ]
    },
    {
      id: 3,
      name: "Optimize and Scale",
      dateRange: "Days 11-20 (Sept 25-Oct 4)", 
      budget: 30000,
      budgetSpent: 0,
      dailyBudget: 3000,
      description: "Ramp up based on data. Duplicate winners.",
      priority: "High",
      salesTarget: 20,
      salesActual: 0,
      dependencies: ["p2_t3", "p2_t4"],
      milestones: ["ROAS > 2x", "Lookalike Audience", "20 Sales"],
      tasks: [
        {
          id: "p3_t1",
          assignee: "Inaamul Haq Mansoor",
          task: "Create lookalike audiences and explore partnerships",
          priority: "High",
          estimatedHours: 5,
          actualHours: 0,
          dependencies: ["p2_t4"],
          dueDate: "2025-09-26",
          completed: false,
          critical: true,
          notes: "Scale through similar audiences"
        },
        {
          id: "p3_t2",
          assignee: "Inaamul Haq Mansoor",
          task: "Oversee AI content completion for all posts",
          priority: "Medium",
          estimatedHours: 6,
          actualHours: 0,
          dependencies: ["p2_t2"],
          dueDate: "2025-09-28",
          completed: false,
          critical: false,
          notes: "Complete content library"
        },
        {
          id: "p3_t3",
          assignee: "Hammad", 
          task: "Optimize campaigns and track ROAS (target 2x+)",
          priority: "Critical",
          estimatedHours: 10,
          actualHours: 0,
          dependencies: ["p2_t4"],
          dueDate: "2025-09-27",
          completed: false,
          critical: true,
          notes: "Focus on profitable campaigns only"
        },
        {
          id: "p3_t4",
          assignee: "Hammad",
          task: "A/B test CTAs and implement email follow-ups",
          priority: "High",
          estimatedHours: 4,
          actualHours: 0,
          dependencies: ["p3_t3"],
          dueDate: "2025-09-30",
          completed: false,
          critical: false,
          notes: "Improve conversion rates"
        },
        {
          id: "p3_t5",
          assignee: "Mian Shahzad Raza",
          task: "Design urgency creatives for flash sales",
          priority: "High",
          estimatedHours: 5,
          actualHours: 0,
          dependencies: ["p2_t5"],
          dueDate: "2025-09-29",
          completed: false,
          critical: false,
          notes: "Create FOMO and urgency"
        },
        {
          id: "p3_t6",
          assignee: "Mian Shahzad Raza", 
          task: "Run boosted posts in WPAcademy channels",
          priority: "Medium",
          estimatedHours: 3,
          actualHours: 0,
          dependencies: [],
          dueDate: "2025-10-01",
          completed: false,
          critical: false,
          notes: "Leverage paid promotion"
        },
        {
          id: "p3_t7",
          assignee: "Muhammad Ibrahim",
          task: "Optimize site speed and add demo features",
          priority: "High",
          estimatedHours: 6,
          actualHours: 0,
          dependencies: [],
          dueDate: "2025-09-28",
          completed: false,
          critical: false,
          notes: "Performance impacts conversions"
        },
        {
          id: "p3_t8",
          assignee: "Muhammad Ibrahim",
          task: "Finalize index depth fixes and verify content",
          priority: "Medium",
          estimatedHours: 4,
          actualHours: 0,
          dependencies: ["p3_t2"],
          dueDate: "2025-10-02",
          completed: false,
          critical: false,
          notes: "SEO foundation complete"
        }
      ]
    },
    {
      id: 4,
      name: "Full Push and Close",
      dateRange: "Days 21-30 (Oct 5-14)",
      budget: 45000,
      budgetSpent: 0,
      dailyBudget: 4500, 
      description: "Max aggression. Focus on urgency.",
      priority: "Critical",
      salesTarget: 50,
      salesActual: 0,
      dependencies: ["p3_t1", "p3_t3"],
      milestones: ["50 Sales", "ROAS > 3x", "Expansion Plan"],
      tasks: [
        {
          id: "p4_t1",
          assignee: "Inaamul Haq Mansoor",
          task: "Launch flash bonuses and plan expansion",
          priority: "High",
          estimatedHours: 4,
          actualHours: 0,
          dependencies: ["p3_t1"],
          dueDate: "2025-10-06",
          completed: false,
          critical: false,
          notes: "Final push incentives"
        },
        {
          id: "p4_t2",
          assignee: "Inaamul Haq Mansoor",
          task: "Review AI content quality and plan future generation",
          priority: "Medium",
          estimatedHours: 3,
          actualHours: 0,
          dependencies: ["p3_t2"],
          dueDate: "2025-10-08",
          completed: false,
          critical: false,
          notes: "Prepare for scaling"
        },
        {
          id: "p4_t3",
          assignee: "Hammad",
          task: "Scale budgets aggressively on winning ads",
          priority: "Critical",
          estimatedHours: 8,
          actualHours: 0,
          dependencies: ["p3_t3"],
          dueDate: "2025-10-07",
          completed: false,
          critical: true,
          notes: "Maximum budget allocation"
        },
        {
          id: "p4_t4",
          assignee: "Hammad", 
          task: "Review data daily and optimize funnels",
          priority: "Critical",
          estimatedHours: 6,
          actualHours: 0,
          dependencies: ["p4_t3"],
          dueDate: "2025-10-10",
          completed: false,
          critical: true,
          notes: "Continuous optimization"
        },
        {
          id: "p4_t5",
          assignee: "Mian Shahzad Raza",
          task: "Create video series with testimonials",
          priority: "High",
          estimatedHours: 8,
          actualHours: 0,
          dependencies: [],
          dueDate: "2025-10-09",
          completed: false,
          critical: false,
          notes: "Social proof content"
        },
        {
          id: "p4_t6",
          assignee: "Mian Shahzad Raza",
          task: "Cross-post in all WPAcademy channels",
          priority: "Medium",
          estimatedHours: 2,
          actualHours: 0,
          dependencies: ["p4_t5"],
          dueDate: "2025-10-11",
          completed: false,
          critical: false,
          notes: "Maximum reach"
        },
        {
          id: "p4_t7", 
          assignee: "Muhammad Ibrahim",
          task: "Monitor server for high traffic stability",
          priority: "High",
          estimatedHours: 4,
          actualHours: 0,
          dependencies: [],
          dueDate: "2025-10-08",
          completed: false,
          critical: false,
          notes: "Handle traffic spikes"
        },
        {
          id: "p4_t8",
          assignee: "Muhammad Ibrahim",
          task: "Maintain AI API and confirm index depth resolution",
          priority: "Medium",
          estimatedHours: 3,
          actualHours: 0,
          dependencies: ["p3_t8"],
          dueDate: "2025-10-12",
          completed: false,
          critical: false,
          notes: "System maintenance"
        }
      ]
    }
  ],
  teamMembers: [
    {
      name: "Inaamul Haq Mansoor",
      role: "Partner 1 - Branding & SEO Strategy",
      color: "#2196F3",
      skills: ["SEO", "Content Strategy", "Brand Management", "Market Research"],
      capacity: 8,
      availability: "Available",
      performance: 95,
      efficiency: 92
    },
    {
      name: "Muhammad Ibrahim", 
      role: "Partner 2 - Technical Development",
      color: "#4CAF50",
      skills: ["Web Development", "AI Integration", "Server Management", "Technical Architecture"],
      capacity: 8,
      availability: "Available",
      performance: 88,
      efficiency: 90
    },
    {
      name: "Hammad",
      role: "Partner 3 - Marketing & Ads",
      color: "#FF9800",
      skills: ["Facebook Ads", "PPC", "Analytics", "Conversion Optimization"],
      capacity: 8,
      availability: "Available",
      performance: 93,
      efficiency: 89
    },
    {
      name: "Mian Shahzad Raza",
      role: "Partner 4 - Creative & Promotion", 
      color: "#9C27B0",
      skills: ["Graphic Design", "Video Creation", "Social Media", "Community Management"],
      capacity: 8,
      availability: "Available",
      performance: 91,
      efficiency: 87
    }
  ],
  riskFactors: [
    {
      factor: "Facebook Ad Account Suspension",
      probability: "Low",
      impact: "High",
      mitigation: "Have backup ad accounts ready",
      status: "Monitored"
    },
    {
      factor: "Low Initial CTR",
      probability: "Medium", 
      impact: "Medium",
      mitigation: "Quick creative iterations and A/B testing",
      status: "Active"
    },
    {
      factor: "Site Downtime During Traffic Spike",
      probability: "Low",
      impact: "High", 
      mitigation: "Server monitoring and scalable hosting",
      status: "Monitored"
    },
    {
      factor: "Competitor Price War",
      probability: "Medium",
      impact: "Medium",
      mitigation: "Focus on unique value proposition",
      status: "Monitored"
    }
  ]
};

// State management
let taskStates = {};
let filters = {
  assignee: '',
  priority: '',
  status: ''
};
let charts = {};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  console.log('Initializing GPL Gorilla Advanced Dashboard...');
  
  // Small delay to ensure DOM is fully ready
  setTimeout(() => {
    loadSavedData();
    initializeFilters();
    initializeCharts();
    renderEnhancedTeamPerformance();
    renderEnhancedBudgetManagement();
    renderEnhancedPhases();
    updateAllMetrics();
    updateAllProgress();
    updateDaysStatus();
    setupEventListeners();
    checkAndShowAlerts();
    startPeriodicUpdates();
    
    console.log('Dashboard initialized successfully');
  }, 100);
});

// Load saved data from localStorage
function loadSavedData() {
  try {
    const saved = localStorage.getItem('gpl-gorilla-advanced-data');
    if (saved) {
      const savedData = JSON.parse(saved);
      taskStates = savedData.taskStates || {};
      
      // Update task completion status
      projectData.phases.forEach(phase => {
        phase.tasks.forEach(task => {
          if (taskStates[task.id] !== undefined) {
            task.completed = taskStates[task.id];
          }
        });
      });
      
      console.log('Loaded saved data:', Object.keys(taskStates).length, 'tasks');
    }
  } catch (error) {
    console.error('Error loading saved data:', error);
    taskStates = {};
  }
}

// Save data to localStorage
function saveData() {
  try {
    const dataToSave = {
      taskStates,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('gpl-gorilla-advanced-data', JSON.stringify(dataToSave));
    console.log('Data saved successfully');
  } catch (error) {
    console.error('Error saving data:', error);
  }
}

// Initialize filter dropdowns
function initializeFilters() {
  const assigneeFilter = document.getElementById('filter-assignee');
  
  if (assigneeFilter) {
    // Clear existing options except first
    assigneeFilter.innerHTML = '<option value="">All Team Members</option>';
    
    // Populate assignee filter
    projectData.teamMembers.forEach(member => {
      const option = document.createElement('option');
      option.value = member.name;
      option.textContent = member.name;
      assigneeFilter.appendChild(option);
    });
    
    console.log('Filters initialized');
  }
}

// Initialize charts with proper error handling
function initializeCharts() {
  try {
    initializeBudgetChart();
    initializeSalesChart();
    initializeVelocityChart();
    console.log('Charts initialized');
  } catch (error) {
    console.error('Error initializing charts:', error);
  }
}

function initializeBudgetChart() {
  const ctx = document.getElementById('budget-chart');
  if (!ctx) {
    console.warn('Budget chart canvas not found');
    return;
  }
  
  try {
    charts.budget = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Setup & Prep', 'Launch & Test', 'Optimize & Scale', 'Full Push'],
        datasets: [{
          data: [5000, 14000, 30000, 45000],
          backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              font: {
                size: 11
              }
            }
          }
        }
      }
    });
  } catch (error) {
    console.error('Error creating budget chart:', error);
  }
}

function initializeSalesChart() {
  const ctx = document.getElementById('sales-chart');
  if (!ctx) {
    console.warn('Sales chart canvas not found');
    return;
  }
  
  try {
    charts.sales = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Phase 2', 'Phase 3', 'Phase 4'],
        datasets: [{
          label: 'Target',
          data: [5, 20, 50],
          backgroundColor: '#5D878F'
        }, {
          label: 'Actual',
          data: [0, 0, 0],
          backgroundColor: '#1FB8CD'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          legend: {
            labels: {
              font: {
                size: 11
              }
            }
          }
        }
      }
    });
  } catch (error) {
    console.error('Error creating sales chart:', error);
  }
}

function initializeVelocityChart() {
  const ctx = document.getElementById('velocity-chart');
  if (!ctx) {
    console.warn('Velocity chart canvas not found');
    return;
  }
  
  try {
    const labels = [];
    const data = [];
    
    // Generate sample velocity data
    for (let i = 1; i <= 7; i++) {
      labels.push(`Day ${i}`);
      data.push(Math.random() * 3);
    }
    
    charts.velocity = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Tasks/Day',
          data: data,
          borderColor: '#1FB8CD',
          backgroundColor: 'rgba(31, 184, 205, 0.1)',
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          legend: {
            labels: {
              font: {
                size: 11
              }
            }
          }
        }
      }
    });
  } catch (error) {
    console.error('Error creating velocity chart:', error);
  }
}

// Setup event listeners with proper error handling
function setupEventListeners() {
  console.log('Setting up event listeners...');
  
  try {
    // Filter controls
    const assigneeFilter = document.getElementById('filter-assignee');
    const priorityFilter = document.getElementById('filter-priority');
    const statusFilter = document.getElementById('filter-status');
    
    if (assigneeFilter) assigneeFilter.addEventListener('change', applyFilters);
    if (priorityFilter) priorityFilter.addEventListener('change', applyFilters);
    if (statusFilter) statusFilter.addEventListener('change', applyFilters);
    
    // Action buttons
    const exportBtn = document.getElementById('export-csv');
    const printBtn = document.getElementById('print-report');
    const standupBtn = document.getElementById('daily-standup');
    const criticalPathBtn = document.getElementById('critical-path');
    const balanceBtn = document.getElementById('balance-workload');
    const teamReportBtn = document.getElementById('team-report');
    
    if (exportBtn) exportBtn.addEventListener('click', exportToCSV);
    if (printBtn) printBtn.addEventListener('click', printReport);
    if (standupBtn) standupBtn.addEventListener('click', showDailyStandup);
    if (criticalPathBtn) criticalPathBtn.addEventListener('click', showCriticalPath);
    if (balanceBtn) balanceBtn.addEventListener('click', balanceWorkload);
    if (teamReportBtn) teamReportBtn.addEventListener('click', showTeamReport);
    
    // Modal close buttons
    const closeStandup = document.getElementById('close-standup');
    const closeStandupBtn = document.getElementById('close-standup-btn');
    const closeCriticalPath = document.getElementById('close-critical-path');
    const closeCriticalPathBtn = document.getElementById('close-critical-path-btn');
    const celebrationClose = document.getElementById('celebration-close');
    
    if (closeStandup) closeStandup.addEventListener('click', () => hideModal('standup-modal'));
    if (closeStandupBtn) closeStandupBtn.addEventListener('click', () => hideModal('standup-modal'));
    if (closeCriticalPath) closeCriticalPath.addEventListener('click', () => hideModal('critical-path-modal'));
    if (closeCriticalPathBtn) closeCriticalPathBtn.addEventListener('click', () => hideModal('critical-path-modal'));
    if (celebrationClose) celebrationClose.addEventListener('click', () => hideModal('celebration-modal'));
    
    // Task checkboxes - using event delegation
    document.addEventListener('change', function(event) {
      if (event.target && event.target.classList.contains('task-checkbox-enhanced')) {
        const taskId = event.target.getAttribute('data-task-id');
        const isChecked = event.target.checked;
        handleTaskChange(taskId, isChecked);
      }
    });
    
    // Close modals on background click
    document.addEventListener('click', function(event) {
      if (event.target.classList.contains('modal')) {
        event.target.classList.add('hidden');
      }
    });
    
    console.log('Event listeners setup complete');
  } catch (error) {
    console.error('Error setting up event listeners:', error);
  }
}

// Apply filters to tasks
function applyFilters() {
  try {
    const assigneeEl = document.getElementById('filter-assignee');
    const priorityEl = document.getElementById('filter-priority');
    const statusEl = document.getElementById('filter-status');
    
    filters.assignee = assigneeEl ? assigneeEl.value : '';
    filters.priority = priorityEl ? priorityEl.value : '';
    filters.status = statusEl ? statusEl.value : '';
    
    console.log('Applying filters:', filters);
    renderEnhancedPhases();
  } catch (error) {
    console.error('Error applying filters:', error);
  }
}

// Handle task completion with improved error handling and immediate updates
function handleTaskChange(taskId, checked) {
  console.log(`Task change: ${taskId} = ${checked}`);
  
  try {
    // Update task state
    taskStates[taskId] = checked;
    
    // Update project data
    let taskFound = false;
    let taskInfo = null;
    
    projectData.phases.forEach(phase => {
      phase.tasks.forEach(task => {
        if (task.id === taskId) {
          task.completed = checked;
          taskFound = true;
          taskInfo = { 
            task: task.task, 
            assignee: task.assignee, 
            phase: phase.name,
            critical: task.critical 
          };
        }
      });
    });
    
    if (!taskFound) {
      console.error(`Task ${taskId} not found`);
      return;
    }
    
    // Save data immediately
    saveData();
    
    // Update UI immediately
    setTimeout(() => {
      updateAllMetrics();
      updateAllProgress();
      renderEnhancedTeamPerformance();
      checkAndShowAlerts();
    }, 50);
    
    // Show celebration for critical tasks
    if (checked && taskInfo.critical) {
      setTimeout(() => showCelebration(taskInfo), 200);
    }
    
    console.log(`Task ${taskId} updated successfully`);
  } catch (error) {
    console.error('Error handling task change:', error);
  }
}

// Show celebration modal
function showCelebration(taskInfo) {
  try {
    const modal = document.getElementById('celebration-modal');
    const title = document.getElementById('celebration-title');
    const message = document.getElementById('celebration-message');
    
    if (modal && title && message) {
      title.textContent = 'Critical Task Completed! 🎉';
      message.textContent = `Great job completing "${taskInfo.task}" - this was a critical milestone!`;
      
      modal.classList.remove('hidden');
      
      // Auto-hide after 3 seconds
      setTimeout(() => {
        modal.classList.add('hidden');
      }, 3000);
    }
  } catch (error) {
    console.error('Error showing celebration:', error);
  }
}

// Show/hide modals
function showModal(modalId) {
  try {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('hidden');
    }
  } catch (error) {
    console.error('Error showing modal:', error);
  }
}

function hideModal(modalId) {
  try {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('hidden');
    }
  } catch (error) {
    console.error('Error hiding modal:', error);
  }
}

// Calculate various metrics
function calculateOverallProgress() {
  try {
    const totalTasks = projectData.phases.reduce((sum, phase) => sum + phase.tasks.length, 0);
    const completedTasks = projectData.phases.reduce((sum, phase) => {
      return sum + phase.tasks.filter(task => task.completed).length;
    }, 0);
    
    return totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  } catch (error) {
    console.error('Error calculating overall progress:', error);
    return 0;
  }
}

function calculatePhaseProgress(phase) {
  try {
    const totalTasks = phase.tasks.length;
    const completedTasks = phase.tasks.filter(task => task.completed).length;
    return totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  } catch (error) {
    console.error('Error calculating phase progress:', error);
    return 0;
  }
}

function calculateTeamProgress(memberName) {
  try {
    let totalTasks = 0;
    let completedTasks = 0;
    let totalHours = 0;
    let criticalTasks = 0;
    let overdueTasks = 0;
    
    const today = new Date();
    
    projectData.phases.forEach(phase => {
      phase.tasks.forEach(task => {
        if (task.assignee === memberName) {
          totalTasks++;
          totalHours += task.estimatedHours;
          if (task.critical) criticalTasks++;
          
          const dueDate = new Date(task.dueDate);
          if (dueDate < today && !task.completed) {
            overdueTasks++;
          }
          
          if (task.completed) {
            completedTasks++;
          }
        }
      });
    });
    
    const percentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
    
    return {
      total: totalTasks,
      completed: completedTasks,
      percentage: percentage,
      totalHours: totalHours,
      criticalTasks: criticalTasks,
      overdueTasks: overdueTasks
    };
  } catch (error) {
    console.error('Error calculating team progress:', error);
    return { total: 0, completed: 0, percentage: 0, totalHours: 0, criticalTasks: 0, overdueTasks: 0 };
  }
}

function calculateSuccessLikelihood() {
  try {
    const overallProgress = calculateOverallProgress();
    const currentDay = getCurrentDay();
    const expectedProgress = Math.round((currentDay / 30) * 100);
    
    let likelihood = 0;
    
    if (overallProgress >= expectedProgress + 20) {
      likelihood = 95;
    } else if (overallProgress >= expectedProgress + 10) {
      likelihood = 85;
    } else if (overallProgress >= expectedProgress) {
      likelihood = 75;
    } else if (overallProgress >= expectedProgress - 10) {
      likelihood = 60;
    } else if (overallProgress >= expectedProgress - 20) {
      likelihood = 40;
    } else {
      likelihood = 20;
    }
    
    return likelihood;
  } catch (error) {
    console.error('Error calculating success likelihood:', error);
    return 0;
  }
}

function calculateVelocity() {
  try {
    const currentDay = getCurrentDay();
    if (currentDay === 0) return 0;
    
    const completedTasks = projectData.phases.reduce((sum, phase) => {
      return sum + phase.tasks.filter(task => task.completed).length;
    }, 0);
    
    return Math.round((completedTasks / currentDay) * 10) / 10;
  } catch (error) {
    console.error('Error calculating velocity:', error);
    return 0;
  }
}

function getCurrentDay() {
  try {
    const startDate = new Date('2025-09-15');
    const currentDate = new Date();
    const daysDiff = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24));
    return Math.max(1, Math.min(30, daysDiff + 1));
  } catch (error) {
    console.error('Error getting current day:', error);
    return 1;
  }
}

// Update all metrics and displays
function updateAllMetrics() {
  try {
    updateProgressMetrics();
    updateSuccessLikelihood();
    updateVelocityMetrics();
    updateBudgetMetrics();
    updateRiskAssessment();
    console.log('All metrics updated');
  } catch (error) {
    console.error('Error updating metrics:', error);
  }
}

function updateProgressMetrics() {
  try {
    const overallProgress = calculateOverallProgress();
    const totalTasks = projectData.phases.reduce((sum, phase) => sum + phase.tasks.length, 0);
    const completedTasks = projectData.phases.reduce((sum, phase) => {
      return sum + phase.tasks.filter(task => task.completed).length;
    }, 0);
    
    // Update header stats
    const progressEl = document.getElementById('overall-progress');
    const progressFillEl = document.getElementById('main-progress-fill');
    const progressTextEl = document.getElementById('progress-text');
    const timelineStatusEl = document.getElementById('timeline-status');
    
    if (progressEl) progressEl.textContent = `${overallProgress}%`;
    if (progressFillEl) progressFillEl.style.width = `${overallProgress}%`;
    if (progressTextEl) progressTextEl.textContent = `${completedTasks} of ${totalTasks} tasks completed`;
    
    // Update timeline status
    const currentDay = getCurrentDay();
    const expectedProgress = Math.round((currentDay / 30) * 100);
    let timelineStatus = 'On Schedule';
    
    if (overallProgress > expectedProgress + 10) {
      timelineStatus = 'Ahead of Schedule';
    } else if (overallProgress < expectedProgress - 10) {
      timelineStatus = 'Behind Schedule';
    }
    
    if (timelineStatusEl) timelineStatusEl.textContent = timelineStatus;
  } catch (error) {
    console.error('Error updating progress metrics:', error);
  }
}

function updateSuccessLikelihood() {
  try {
    const likelihood = calculateSuccessLikelihood();
    const element = document.getElementById('success-likelihood-main');
    const indicator = document.getElementById('success-indicator');
    
    if (element) {
      element.textContent = `${likelihood}%`;
      
      // Update indicator color
      if (indicator) {
        if (likelihood >= 70) {
          indicator.style.background = 'var(--color-success)';
        } else if (likelihood >= 40) {
          indicator.style.background = 'var(--color-warning)';
        } else {
          indicator.style.background = 'var(--color-error)';
        }
      }
    }
  } catch (error) {
    console.error('Error updating success likelihood:', error);
  }
}

function updateVelocityMetrics() {
  try {
    const velocity = calculateVelocity();
    const completionRate = calculateOverallProgress();
    
    const velocityEl = document.getElementById('velocity-indicator');
    const avgVelocityEl = document.getElementById('avg-velocity');
    const completionRateEl = document.getElementById('completion-rate');
    
    if (velocityEl) velocityEl.textContent = velocity.toFixed(1);
    if (avgVelocityEl) avgVelocityEl.textContent = velocity.toFixed(1);
    if (completionRateEl) completionRateEl.textContent = `${completionRate}%`;
  } catch (error) {
    console.error('Error updating velocity metrics:', error);
  }
}

function updateBudgetMetrics() {
  try {
    const totalBudget = 40000;
    const totalSpent = projectData.phases.reduce((sum, phase) => sum + phase.budgetSpent, 0);
    const efficiency = totalSpent > 0 ? Math.round((calculateOverallProgress() / (totalSpent / totalBudget * 100)) * 100) : 100;
    
    const allocatedEl = document.getElementById('budget-allocated');
    const spentEl = document.getElementById('budget-spent');
    const efficiencyEl = document.getElementById('budget-efficiency');
    
    if (allocatedEl) allocatedEl.textContent = `${totalBudget.toLocaleString()} PKR`;
    if (spentEl) spentEl.textContent = `${totalSpent.toLocaleString()} PKR`;
    if (efficiencyEl) efficiencyEl.textContent = `${efficiency}%`;
  } catch (error) {
    console.error('Error updating budget metrics:', error);
  }
}

function updateRiskAssessment() {
  try {
    const riskContainer = document.getElementById('risk-items');
    const overallRisk = document.getElementById('overall-risk');
    
    if (riskContainer) {
      riskContainer.innerHTML = projectData.riskFactors.map(risk => `
        <div class="risk-item">
          <div class="risk-indicator-dot risk-${risk.probability.toLowerCase()}"></div>
          <div class="risk-text">${risk.factor}</div>
        </div>
      `).join('');
    }
    
    // Calculate overall risk level
    const highRisks = projectData.riskFactors.filter(r => r.probability === 'High').length;
    let riskLevel = 'Low Risk';
    let riskColor = 'var(--color-success)';
    
    if (highRisks > 1) {
      riskLevel = 'High Risk';
      riskColor = 'var(--color-error)';
    } else if (highRisks === 1) {
      riskLevel = 'Medium Risk';
      riskColor = 'var(--color-warning)';
    }
    
    if (overallRisk) {
      const riskText = overallRisk.querySelector('.risk-text');
      const riskIndicator = overallRisk.querySelector('.risk-indicator');
      
      if (riskText) riskText.textContent = riskLevel;
      if (riskIndicator) riskIndicator.style.background = riskColor;
    }
  } catch (error) {
    console.error('Error updating risk assessment:', error);
  }
}

function updateDaysStatus() {
  try {
    const currentDay = getCurrentDay();
    const daysStatusEl = document.getElementById('days-status');
    
    if (daysStatusEl) {
      daysStatusEl.textContent = `Day ${currentDay} of 30`;
    }
  } catch (error) {
    console.error('Error updating days status:', error);
  }
}

function updateAllProgress() {
  try {
    // Update phase progress bars
    projectData.phases.forEach(phase => {
      const progress = calculatePhaseProgress(phase);
      const progressBar = document.getElementById(`phase-${phase.id}-progress-enhanced`);
      const progressText = document.getElementById(`phase-${phase.id}-progress-text-enhanced`);
      
      if (progressBar) {
        progressBar.style.width = `${progress}%`;
      }
      
      if (progressText) {
        progressText.textContent = `${progress}%`;
      }
    });
  } catch (error) {
    console.error('Error updating progress bars:', error);
  }
}

// Render enhanced components
function renderEnhancedTeamPerformance() {
  try {
    const container = document.getElementById('team-performance-enhanced');
    if (!container) return;
    
    container.innerHTML = projectData.teamMembers.map(member => {
      const progress = calculateTeamProgress(member.name);
      const memberIdSafe = member.name.replace(/\s+/g, '-').toLowerCase();
      const initials = member.name.split(' ').map(n => n[0]).join('');
      
      // Calculate workload status
      let workloadStatus = 'Optimal';
      let workloadClass = 'workload-optimal';
      
      if (progress.totalHours > member.capacity * 7) {
        workloadStatus = 'Overloaded';
        workloadClass = 'workload-overloaded';
      } else if (progress.totalHours > member.capacity * 5) {
        workloadStatus = 'High';
        workloadClass = 'workload-high';
      }
      
      return `
        <div class="team-card-enhanced">
          <div class="team-header-enhanced">
            <div class="team-avatar-enhanced" style="background-color: ${member.color}">
              ${initials}
              <div class="team-status-indicator"></div>
            </div>
            <div class="team-info-enhanced">
              <h4>${member.name}</h4>
              <div class="team-role">${member.role}</div>
              <div class="team-skills">
                ${member.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
              </div>
            </div>
          </div>
          
          <div class="team-metrics">
            <div class="metric-item">
              <div class="metric-value">${member.performance}%</div>
              <div class="metric-label">Performance</div>
            </div>
            <div class="metric-item">
              <div class="metric-value">${member.efficiency}%</div>
              <div class="metric-label">Efficiency</div>
            </div>
            <div class="metric-item">
              <div class="metric-value">${progress.criticalTasks}</div>
              <div class="metric-label">Critical Tasks</div>
            </div>
            <div class="metric-item">
              <div class="metric-value">${progress.overdueTasks}</div>
              <div class="metric-label">Overdue</div>
            </div>
          </div>
          
          <div class="team-progress-enhanced">
            <div class="team-progress-bar">
              <div class="team-progress-fill" 
                   id="team-${memberIdSafe}-progress-enhanced"
                   style="background-color: ${member.color}; width: ${progress.percentage}%">
              </div>
            </div>
            <div class="team-workload">
              <span>${progress.completed}/${progress.total} tasks (${progress.percentage}%)</span>
              <span class="workload-indicator ${workloadClass}">${workloadStatus}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');
    
    console.log('Team performance rendered');
  } catch (error) {
    console.error('Error rendering team performance:', error);
  }
}

function renderEnhancedBudgetManagement() {
  try {
    // Budget cards are rendered in HTML, update progress bars here
    projectData.phases.forEach((phase) => {
      const budgetProgress = phase.budgetSpent > 0 ? (phase.budgetSpent / phase.budget) * 100 : 0;
      
      const budgetCard = document.getElementById(`phase-${phase.id}-budget`);
      if (budgetCard) {
        const progressBar = budgetCard.querySelector('.budget-progress-fill');
        const spentText = budgetCard.querySelector('.budget-spent');
        
        if (progressBar) {
          progressBar.style.width = `${budgetProgress}%`;
        }
        
        if (spentText) {
          spentText.textContent = `Spent: ${phase.budgetSpent.toLocaleString()} PKR (${Math.round(budgetProgress)}%)`;
        }
      }
    });
    
    console.log('Budget management rendered');
  } catch (error) {
    console.error('Error rendering budget management:', error);
  }
}

function renderEnhancedPhases() {
  try {
    const container = document.getElementById('phases-container-enhanced');
    if (!container) return;
    
    container.innerHTML = projectData.phases.map(phase => {
      const progress = calculatePhaseProgress(phase);
      const totalTasks = phase.tasks.length;
      const completedTasks = phase.tasks.filter(task => task.completed).length;
      const overdueTasks = phase.tasks.filter(task => {
        const dueDate = new Date(task.dueDate);
        const today = new Date();
        return dueDate < today && !task.completed;
      }).length;
      
      // Filter tasks based on current filters
      let filteredTasks = phase.tasks;
      
      if (filters.assignee) {
        filteredTasks = filteredTasks.filter(task => task.assignee === filters.assignee);
      }
      
      if (filters.priority) {
        filteredTasks = filteredTasks.filter(task => task.priority === filters.priority);
      }
      
      if (filters.status) {
        if (filters.status === 'pending') {
          filteredTasks = filteredTasks.filter(task => !task.completed);
        } else if (filters.status === 'completed') {
          filteredTasks = filteredTasks.filter(task => task.completed);
        } else if (filters.status === 'overdue') {
          filteredTasks = filteredTasks.filter(task => {
            const dueDate = new Date(task.dueDate);
            const today = new Date();
            return dueDate < today && !task.completed;
          });
        }
      }
      
      const tasksHtml = filteredTasks.map(task => {
        const dueDate = new Date(task.dueDate);
        const today = new Date();
        const isOverdue = dueDate < today && !task.completed;
        
        let taskClasses = ['task-item-enhanced'];
        if (task.completed) taskClasses.push('completed');
        if (isOverdue) taskClasses.push('overdue');
        if (task.critical) taskClasses.push('critical');
        
        return `
          <li class="${taskClasses.join(' ')}">
            <input type="checkbox" 
                   class="task-checkbox-enhanced" 
                   data-task-id="${task.id}"
                   ${task.completed ? 'checked' : ''}>
            <div class="task-content-enhanced">
              <div class="task-header">
                <div class="task-text-enhanced ${task.completed ? 'completed' : ''}">${task.task}</div>
                <div class="task-priority priority-${task.priority.toLowerCase()}">${task.priority}</div>
              </div>
              <div class="task-meta">
                <div class="task-assignee-enhanced">
                  <span class="assignee-dot ${getAssigneeClass(task.assignee)}"></span>
                  ${task.assignee}
                </div>
                <div class="task-estimated-hours">${task.estimatedHours}h estimated</div>
                <div class="task-due-date ${isOverdue ? 'overdue' : ''}">${formatDate(task.dueDate)}</div>
              </div>
              ${task.notes ? `<div class="task-notes" style="font-size: 12px; color: var(--color-text-secondary); margin-top: 6px; font-style: italic;">${task.notes}</div>` : ''}
            </div>
          </li>
        `;
      }).join('');
      
      return `
        <div class="phase-card-enhanced">
          <div class="phase-header-enhanced">
            <div class="phase-title-row-enhanced">
              <div class="phase-info">
                <h3 class="phase-title-enhanced">${phase.name}</h3>
                <div class="phase-description-enhanced">${phase.description}</div>
              </div>
              <div class="phase-stats-enhanced">
                <div class="phase-stat-enhanced">
                  <div class="phase-stat-label">Timeline</div>
                  <div class="phase-stat-value">${phase.dateRange.split('(')[1].replace(')', '')}</div>
                </div>
                <div class="phase-stat-enhanced">
                  <div class="phase-stat-label">Budget</div>
                  <div class="phase-stat-value">${phase.budget.toLocaleString()} PKR</div>
                </div>
                <div class="phase-stat-enhanced">
                  <div class="phase-stat-label">Daily Budget</div>
                  <div class="phase-stat-value">${phase.dailyBudget.toLocaleString()} PKR</div>
                </div>
                ${phase.salesTarget ? `
                  <div class="phase-stat-enhanced">
                    <div class="phase-stat-label">Sales Target</div>
                    <div class="phase-stat-value">${phase.salesTarget}</div>
                  </div>
                ` : ''}
              </div>
            </div>
            <div class="phase-progress-enhanced">
              <div class="phase-progress-bar-enhanced">
                <div class="phase-progress-fill-enhanced" 
                     id="phase-${phase.id}-progress-enhanced" 
                     style="width: ${progress}%"></div>
              </div>
              <div class="phase-progress-text-enhanced" id="phase-${phase.id}-progress-text-enhanced">${progress}%</div>
            </div>
          </div>
          <div class="phase-body-enhanced">
            <div class="tasks-header">
              <h4>Tasks</h4>
              <div class="tasks-summary">
                <span>${completedTasks}/${totalTasks} completed</span>
                ${overdueTasks > 0 ? `<span style="color: var(--color-error);">${overdueTasks} overdue</span>` : ''}
              </div>
            </div>
            <ul class="tasks-list-enhanced">
              ${tasksHtml}
            </ul>
          </div>
        </div>
      `;
    }).join('');
    
    console.log('Enhanced phases rendered');
  } catch (error) {
    console.error('Error rendering enhanced phases:', error);
  }
}

// Utility functions
function getAssigneeClass(assigneeName) {
  const classMap = {
    'Inaamul Haq Mansoor': 'assignee-inaamul',
    'Muhammad Ibrahim': 'assignee-ibrahim',
    'Hammad': 'assignee-hammad',
    'Mian Shahzad Raza': 'assignee-shahzad'
  };
  return classMap[assigneeName] || 'assignee-default';
}

function formatDate(dateString) {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  } catch (error) {
    return dateString;
  }
}

// Alert system
function checkAndShowAlerts() {
  try {
    const alerts = [];
    const today = new Date();
    
    // Check for overdue tasks
    let overdueTasks = 0;
    projectData.phases.forEach(phase => {
      phase.tasks.forEach(task => {
        if (!task.completed && new Date(task.dueDate) < today) {
          overdueTasks++;
        }
      });
    });
    
    if (overdueTasks > 0) {
      alerts.push({
        type: 'error',
        title: 'Overdue Tasks',
        message: `You have ${overdueTasks} overdue task${overdueTasks > 1 ? 's' : ''}. Please review and update.`,
        icon: '⚠️'
      });
    }
    
    // Check progress vs timeline
    const currentDay = getCurrentDay();
    const overallProgress = calculateOverallProgress();
    const expectedProgress = Math.round((currentDay / 30) * 100);
    
    if (overallProgress < expectedProgress - 15) {
      alerts.push({
        type: 'warning',
        title: 'Behind Schedule',
        message: `Project is ${expectedProgress - overallProgress}% behind schedule. Consider reallocating resources.`,
        icon: '📅'
      });
    }
    
    // Show alerts
    const alertsSection = document.getElementById('alerts-section');
    const alertContainer = document.getElementById('alert-container');
    
    if (alerts.length > 0 && alertsSection && alertContainer) {
      alertContainer.innerHTML = alerts.map(alert => `
        <div class="alert alert--${alert.type}">
          <div class="alert-icon">${alert.icon}</div>
          <div class="alert-content">
            <div class="alert-title">${alert.title}</div>
            <div class="alert-message">${alert.message}</div>
          </div>
        </div>
      `).join('');
      alertsSection.style.display = 'block';
    } else if (alertsSection) {
      alertsSection.style.display = 'none';
    }
  } catch (error) {
    console.error('Error checking alerts:', error);
  }
}

// Export functions
function exportToCSV() {
  try {
    const headers = ['Phase', 'Task', 'Assignee', 'Priority', 'Status', 'Due Date', 'Estimated Hours', 'Notes'];
    const rows = [];
    
    projectData.phases.forEach(phase => {
      phase.tasks.forEach(task => {
        rows.push([
          phase.name,
          task.task,
          task.assignee,
          task.priority,
          task.completed ? 'Completed' : 'Pending',
          task.dueDate,
          task.estimatedHours,
          task.notes || ''
        ]);
      });
    });
    
    const csvContent = [headers, ...rows].map(row => 
      row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(',')
    ).join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `gpl-gorilla-tasks-${new Date().toISOString().split('T')[0]}.csv`;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    console.log('CSV export completed');
  } catch (error) {
    console.error('Error exporting CSV:', error);
    alert('Error exporting CSV. Please try again.');
  }
}

function printReport() {
  try {
    window.print();
  } catch (error) {
    console.error('Error printing report:', error);
    alert('Error printing report. Please try again.');
  }
}

function showDailyStandup() {
  try {
    const modal = document.getElementById('standup-modal');
    const content = document.getElementById('standup-content');
    
    if (!modal || !content) return;
    
    const completedToday = projectData.phases.reduce((tasks, phase) => {
      return tasks.concat(phase.tasks.filter(task => task.completed));
    }, []);
    
    const pendingTasks = projectData.phases.reduce((tasks, phase) => {
      return tasks.concat(phase.tasks.filter(task => !task.completed));
    }, []);
    
    content.innerHTML = `
      <div class="standup-section" style="margin-bottom: 24px;">
        <h4 style="margin-bottom: 16px; color: var(--color-text);">📋 Today's Progress Summary</h4>
        <div class="progress-summary" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 16px;">
          <div class="summary-stat" style="text-align: center; padding: 16px; background: var(--color-bg-1); border-radius: 8px;">
            <div class="stat-number" style="font-size: 24px; font-weight: bold; color: var(--color-primary); margin-bottom: 4px;">${completedToday.length}</div>
            <div class="stat-label" style="font-size: 12px; color: var(--color-text-secondary);">Tasks Completed</div>
          </div>
          <div class="summary-stat" style="text-align: center; padding: 16px; background: var(--color-bg-2); border-radius: 8px;">
            <div class="stat-number" style="font-size: 24px; font-weight: bold; color: var(--color-primary); margin-bottom: 4px;">${calculateOverallProgress()}%</div>
            <div class="stat-label" style="font-size: 12px; color: var(--color-text-secondary);">Overall Progress</div>
          </div>
          <div class="summary-stat" style="text-align: center; padding: 16px; background: var(--color-bg-3); border-radius: 8px;">
            <div class="stat-number" style="font-size: 24px; font-weight: bold; color: var(--color-primary); margin-bottom: 4px;">${calculateSuccessLikelihood()}%</div>
            <div class="stat-label" style="font-size: 12px; color: var(--color-text-secondary);">Success Likelihood</div>
          </div>
        </div>
      </div>
      
      <div class="standup-section" style="margin-bottom: 24px;">
        <h4 style="margin-bottom: 16px; color: var(--color-text);">✅ Recently Completed</h4>
        <div style="max-height: 200px; overflow-y: auto;">
          ${completedToday.slice(-5).map(task => `
            <div class="standup-task" style="padding: 12px; background: var(--color-bg-3); border-radius: 6px; margin-bottom: 8px; border-left: 3px solid var(--color-success);">
              <div class="task-name" style="font-weight: 500; margin-bottom: 4px;">${task.task}</div>
              <div class="task-assignee" style="font-size: 12px; color: var(--color-text-secondary);">${task.assignee}</div>
            </div>
          `).join('') || '<p style="color: var(--color-text-secondary); font-style: italic;">No tasks completed recently.</p>'}
        </div>
      </div>
      
      <div class="standup-section">
        <h4 style="margin-bottom: 16px; color: var(--color-text);">🎯 Priority Focus Areas</h4>
        <div style="max-height: 200px; overflow-y: auto;">
          ${pendingTasks.filter(task => task.priority === 'Critical').slice(0, 5).map(task => `
            <div class="standup-task priority" style="padding: 12px; background: var(--color-bg-4); border-radius: 6px; margin-bottom: 8px; border-left: 3px solid var(--color-error);">
              <div class="task-name" style="font-weight: 500; margin-bottom: 4px;">${task.task}</div>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <div class="task-assignee" style="font-size: 12px; color: var(--color-text-secondary);">${task.assignee}</div>
                <div class="task-due" style="font-size: 12px; color: var(--color-text-secondary);">Due: ${formatDate(task.dueDate)}</div>
              </div>
            </div>
          `).join('') || '<p style="color: var(--color-text-secondary); font-style: italic;">No critical tasks pending.</p>'}
        </div>
      </div>
    `;
    
    showModal('standup-modal');
  } catch (error) {
    console.error('Error showing daily standup:', error);
  }
}

function showCriticalPath() {
  try {
    const modal = document.getElementById('critical-path-modal');
    const content = document.getElementById('critical-path-content');
    
    if (!modal || !content) return;
    
    // Find critical tasks and dependencies
    const criticalTasks = [];
    projectData.phases.forEach(phase => {
      phase.tasks.forEach(task => {
        if (task.critical || task.dependencies.length > 0) {
          criticalTasks.push({
            ...task,
            phase: phase.name,
            phaseId: phase.id
          });
        }
      });
    });
    
    content.innerHTML = `
      <div class="critical-path-intro" style="margin-bottom: 24px; padding: 16px; background: var(--color-bg-1); border-radius: 8px;">
        <p style="margin: 0; color: var(--color-text);">Critical path analysis identifies the most important tasks that directly impact project completion.</p>
      </div>
      
      <div class="critical-tasks">
        <h4 style="margin-bottom: 16px; color: var(--color-text);">🎯 Critical Tasks</h4>
        <div style="max-height: 400px; overflow-y: auto;">
          ${criticalTasks.map(task => `
            <div class="critical-task-item ${task.completed ? 'completed' : ''}" style="padding: 16px; background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 8px; margin-bottom: 12px; ${task.completed ? 'opacity: 0.7;' : ''}">
              <div class="task-info">
                <div class="task-name" style="font-weight: 500; margin-bottom: 8px; color: var(--color-text);">${task.task}</div>
                <div class="task-meta" style="display: flex; flex-wrap: wrap; gap: 12px; font-size: 12px; color: var(--color-text-secondary);">
                  <span class="task-phase" style="padding: 2px 6px; background: var(--color-bg-2); border-radius: 4px;">${task.phase}</span>
                  <span class="task-assignee">${task.assignee}</span>
                  <span class="task-due">Due: ${formatDate(task.dueDate)}</span>
                  ${task.estimatedHours ? `<span>${task.estimatedHours}h estimated</span>` : ''}
                </div>
              </div>
              <div class="task-status" style="margin-top: 8px; font-weight: 500;">
                ${task.completed ? '✅ Complete' : '⏳ Pending'}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      
      <div class="path-recommendations" style="margin-top: 24px; padding: 16px; background: var(--color-bg-3); border-radius: 8px;">
        <h4 style="margin-bottom: 12px; color: var(--color-text);">💡 Recommendations</h4>
        <ul style="margin: 0; padding-left: 20px; color: var(--color-text);">
          <li style="margin-bottom: 8px;">Focus team resources on incomplete critical tasks</li>
          <li style="margin-bottom: 8px;">Monitor dependencies to prevent bottlenecks</li>
          <li style="margin-bottom: 8px;">Consider parallel execution where possible</li>
          <li>Review and adjust priorities based on progress</li>
        </ul>
      </div>
    `;
    
    showModal('critical-path-modal');
  } catch (error) {
    console.error('Error showing critical path:', error);
  }
}

function balanceWorkload() {
  try {
    // Calculate workload for each team member
    const workloadAnalysis = projectData.teamMembers.map(member => {
      const progress = calculateTeamProgress(member.name);
      return {
        name: member.name,
        totalTasks: progress.total,
        pendingTasks: progress.total - progress.completed,
        totalHours: progress.totalHours,
        overdueTasks: progress.overdueTasks,
        capacity: member.capacity
      };
    });
    
    const analysisText = workloadAnalysis.map(member => 
      `${member.name}: ${member.pendingTasks} pending tasks, ${member.totalHours}h total workload`
    ).join('\n');
    
    alert(`Workload Analysis:\n\n${analysisText}\n\nRecommendation: Consider redistributing overdue tasks from overloaded team members to those with optimal capacity.`);
  } catch (error) {
    console.error('Error balancing workload:', error);
    alert('Error analyzing workload. Please try again.');
  }
}

function showTeamReport() {
  try {
    exportToCSV(); // Export CSV as team report for now
  } catch (error) {
    console.error('Error showing team report:', error);
  }
}

// Periodic updates
function startPeriodicUpdates() {
  try {
    // Update every 30 seconds
    setInterval(() => {
      updateAllMetrics();
      checkAndShowAlerts();
    }, 30000);
    
    console.log('Periodic updates started');
  } catch (error) {
    console.error('Error starting periodic updates:', error);
  }
}

// Make functions globally available for debugging
window.projectData = projectData;
window.taskStates = taskStates;
window.handleTaskChange = handleTaskChange;
window.updateAllMetrics = updateAllMetrics;
