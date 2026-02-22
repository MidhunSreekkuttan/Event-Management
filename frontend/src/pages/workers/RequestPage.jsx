import { Mail, Clock, CalendarCheck, CheckCircle2 } from "lucide-react";

export default function RequestSubmitted() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 text-center">
        {/* Title */}
        <h1 className="text-2xl font-semibold mb-2">Request Submitted</h1>
        <p className="text-gray-600 mb-6">
          Your account access request is being reviewed
        </p>

        {/* Info box */}
        <div className="bg-blue-50 text-blue-600 text-sm rounded-xl p-4 mb-6">
          <strong>What’s next?</strong> Our team will review your request and
          send account credentials to your registered email.
        </div>

        {/* Details */}
        <div className="space-y-4 text-left mb-6">
          <div className="flex items-center gap-3">
            <Mail className="text-purple-500" size={18} />
            <div>
              <p className="text-sm font-medium">Email Address</p>
              <p className="text-sm text-gray-500">user@example.com</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="text-purple-500" size={18} />
            <div>
              <p className="text-sm font-medium">Estimated Time</p>
              <p className="text-sm text-gray-500">24–48 hours</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <CalendarCheck className="text-purple-500" size={18} />
            <div>
              <p className="text-sm font-medium">Request Date</p>
              <p className="text-sm text-gray-500">February 22, 2026</p>
            </div>
          </div>
        </div>

        {/* Status */}
        <div className="text-left mb-6">
          <p className="font-medium mb-3">Approve Process</p>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2 text-green-600">
              <CheckCircle2 size={16} /> Request Submitted
            </div>
            <div className="flex items-center gap-2 text-blue-600">
              <span className="w-4 h-4 rounded-full border-2 border-blue-600 flex items-center justify-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full" />
              </span>
              Under Review
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <span className="w-4 h-4 rounded-full border-2 border-gray-300" />
              Access Granted
            </div>
          </div>
        </div>

        {/* Buttons */}
        <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 mb-3">
          Check Email Inbox
        </button>

        <button className="w-full bg-blue-100 text-blue-700 py-3 rounded-xl font-medium hover:bg-blue-200">
          Contact Support
        </button>

        {/* Footer */}
        <p className="text-xs text-gray-500 mt-6">
          Need help? Email us at{" "}
          <span className="text-blue-600">support@example.com</span>
        </p>
      </div>
    </div>
  );
}