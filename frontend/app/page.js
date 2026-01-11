import {
  Trophy,
  Activity,
  Clock,
  FileText,
  Plus,
  Store,
  Users,
  Wallet,
  TrendingUp,
  AlertCircle
} from "lucide-react";

export default function Home() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen text-gray-800 font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Dashboard <span className="text-blue-600">Overview</span>
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Welcome back! Here&apos;s your daily performance summary.
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm">
          <TrendingUp className="w-4 h-4" />
          View Reports
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          icon={<Trophy className="w-5 h-5 text-blue-500" />}
          label="TOTAL CAMPAIGNS"
          value="17"
        />
        <StatsCard
          icon={<Activity className="w-5 h-5 text-green-500" />}
          label="ACTIVE CAMPAIGNS"
          value="8"
        />
        <StatsCard
          icon={<Clock className="w-5 h-5 text-red-500" />}
          label="PENDING PAYOUTS"
          value="1"
          active={true}
        />
        <StatsCard
          icon={<FileText className="w-5 h-5 text-purple-500" />}
          label="TOTAL INVOICES"
          value="9"
        />
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2">
          <span className="w-4 h-4 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs">➜</span>
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-xl flex items-center gap-4 text-left transition-colors shadow-lg shadow-blue-200">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <Plus className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-sm">New Campaign</div>
              <div className="text-xs text-blue-100 opacity-90">Create a reward campaign</div>
            </div>
          </button>

          <ActionCard
            icon={<Store className="w-5 h-5 text-blue-500" />}
            title="Add Merchant"
            desc="Onboard a new partner"
          />
          <ActionCard
            icon={<Users className="w-5 h-5 text-green-500" />}
            title="Add Card Holder"
            desc="Register a customer"
          />
          <ActionCard
            icon={<Wallet className="w-5 h-5 text-orange-500" />}
            title="Payout Requests"
            desc="Manage pending payouts"
          />
        </div>
      </div>

      {/* Main Grid: Charts & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Invoice Status Distribution */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-800 mb-1">Invoice Status Distribution</h3>
            <p className="text-xs text-gray-500 mb-6">Overview of invoice payouts</p>

            <div className="space-y-6">
              <ProgressBar label="Paid (4)" count="44.4%" color="bg-green-500" width="w-[44.4%]" />
              <ProgressBar label="Pending (1)" count="11.1%" color="bg-yellow-500" width="w-[11.1%]" />
              <ProgressBar label="Failed (0)" count="0.0%" color="bg-red-500" width="w-0" />
            </div>
          </div>

          {/* System Alerts */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-500" />
              System Alerts
            </h3>
            <div className="p-3 bg-red-50 border border-red-100 rounded-lg flex items-center gap-3">
              <AlertCircle className="w-4 h-4 text-red-500" />
              <span className="text-xs font-semibold text-red-600">1 payouts are pending approval.</span>
            </div>
          </div>
        </div>

        {/* Right Column: Recent Activity */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-fit">
          <h3 className="font-bold text-gray-800 mb-1 flex items-center gap-2">
            <Activity className="w-4 h-4 text-blue-500" />
            Recent Activity
          </h3>
          <p className="text-xs text-gray-500 mb-6">Latest system logs</p>

          <div className="space-y-6">
            <ActivityItem
              icon={<Activity className="w-3 h-3 text-blue-500" />}
              title="Email Sent"
              desc="by LA Mridul • 12/8/2025"
              time="12:16 PM"
            />
            <ActivityItem
              icon={<Activity className="w-3 h-3 text-blue-500" />}
              title="SMS Sent"
              desc="by LA Mridul • 12/8/2025"
              time="12:15 PM"
            />
            <ActivityItem
              icon={<Activity className="w-3 h-3 text-blue-500" />}
              title="Email Sent"
              desc="by Admin • 12/7/2025"
              time="04:46 PM"
            />
            <ActivityItem
              icon={<Activity className="w-3 h-3 text-blue-500" />}
              title="SMS Sent"
              desc="by Admin • 12/7/2025"
              time="04:46 PM"
            />
            <ActivityItem
              icon={<Activity className="w-3 h-3 text-blue-500" />}
              title="SMS Sent"
              desc="by LA Mridul • 12/7/2025"
              time="01:41 PM"
            />
            <ActivityItem
              icon={<Activity className="w-3 h-3 text-blue-500" />}
              title="SMS Sent"
              desc="by LA Mridul • 12/7/2025"
              time="12:56 PM"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Sub-components for cleaner code
function StatsCard({ icon, label, value, active = false }) {
  return (
    <div className={`p-4 rounded-xl flex items-center justify-between border transition-all ${active
      ? "bg-white border-red-100 ring-2 ring-red-50 shadow-lg shadow-red-50"
      : "bg-white border-gray-100 shadow-sm"
      }`}>
      <div>
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${active ? "bg-red-50" : "bg-gray-50"}`}>
          {icon}
        </div>
        <div className="text-[10px] font-bold text-gray-400 tracking-wider uppercase">{label}</div>
      </div>
      <div className="text-3xl font-bold text-gray-800">{value}</div>
    </div>
  );
}

function ActionCard({ icon, title, desc }) {
  return (
    <button className="bg-white p-4 rounded-xl flex items-center gap-4 text-left border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-200">
        {icon}
      </div>
      <div>
        <div className="font-bold text-sm text-gray-800">{title}</div>
        <div className="text-xs text-gray-400">{desc}</div>
      </div>
    </button>
  );
}

function ProgressBar({ label, count, color, width }) {
  return (
    <div>
      <div className="flex justify-between text-xs font-semibold mb-2">
        <span className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${color}`}></span>
          {label}
        </span>
        <span className={color.replace('bg-', 'text-')}>{count}</span>
      </div>
      <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: width }}></div>
      </div>
    </div>
  );
}

function ActivityItem({ icon, title, desc, time }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start">
          <h4 className="text-xs font-bold text-gray-800">{title}</h4>
          <span className="text-[10px] text-gray-400">{time}</span>
        </div>
        <p className="text-[10px] text-gray-500 mt-0.5">{desc}</p>
      </div>
    </div>
  );
}
