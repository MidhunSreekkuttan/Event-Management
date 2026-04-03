import welcomeMessage from "./nodemailer.js";

export const welcomeMail = (name) => {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>

  <body style="margin:0; padding:0; background-color:#f3f4f6; font-family:Arial, sans-serif;">

    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center">

          <!-- Main Card -->
          <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; margin:40px 0; border-radius:16px; overflow:hidden; box-shadow:0 10px 25px rgba(0,0,0,0.08);">

            <!-- Hero Section -->
            <tr>
              <td style="background: linear-gradient(135deg, #7c3aed, #4f46e5); padding:40px 30px; text-align:center; color:white;">
                <h1 style="margin:0; font-size:28px;">🎉 Welcome to Adhithi Event Management Team</h1>
                <p style="margin-top:10px; font-size:15px; opacity:0.9;">
                  Where Moments Turn Into Memories
                </p>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:40px 30px; color:#374151;">

                <h2 style="margin-top:0; font-size:20px;">
                  Hi <span style="color:#7c3aed;">${name}</span> 👋,
                </h2>

                <p style="font-size:15px; line-height:1.6;">
                  We’re thrilled to have you onboard!  
                  Your journey into unforgettable events starts now.
                </p>

                <p style="font-size:15px; line-height:1.6;">
                  From weddings 💍 to corporate events 🏢 and grand celebrations 🎊 —
                  Adhithi makes planning effortless and magical.
                </p>

                <!-- Highlight Box -->
                <div style="background:#f9fafb; padding:18px; border-radius:10px; margin:25px 0;">
                  <strong>🚀 What you can do now:</strong>
                  <ul style="margin:10px 0 0 18px; padding:0; font-size:14px;">
                    <li>Explore trending events</li>
                    <li>Book trusted event planners</li>
                    <li>Manage everything in one place</li>
                  </ul>
                </div>

                <!-- CTA -->
                <div style="text-align:center; margin-top:30px;">
                  <a href="http://localhost:5173/eventList"
                     style="background:#7c3aed; color:white; text-decoration:none;
                     padding:14px 28px; border-radius:10px; font-weight:bold;
                     display:inline-block; box-shadow:0 6px 15px rgba(124,58,237,0.3);">
                     Explore Now 🎟
                  </a>
                </div>

              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background:#f9fafb; padding:20px; text-align:center; font-size:13px; color:#6b7280;">
                Need help? Contact us anytime ✉  
                <br><br>
                © 2026 Adhithi. All rights reserved.
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>

  </body>
  </html>
  `;
};

export const eventManagement = (name) => {
  return `

 <!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>

<body style="margin:0; padding:0; background-color:#080511; font-family:Arial, sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#080511;">
    <tr>
      <td align="center" style="padding:40px 15px;">

        <!-- Main Card -->
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="background:#120b22; border-radius:20px; overflow:hidden; box-shadow:0 12px 40px rgba(0,0,0,0.35);">

          <!-- Top Branding -->
          <tr>
            <td style="padding:22px 30px; background-color:#120b22; border-bottom:1px solid rgba(255,255,255,0.06);">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="left" valign="middle">
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td valign="middle" style="width:42px; height:42px; border-radius:12px; text-align:center; font-size:20px; color:#ffffff; background:linear-gradient(135deg,#ec4899,#8b5cf6,#4f46e5);">
                          ✦
                        </td>
                        <td valign="middle" style="padding-left:12px;">
                          <div style="font-size:22px; font-weight:bold; color:#ffffff; line-height:1.2;">
                            Adhithi
                          </div>
                          <div style="font-size:12px; color:#b7b0c9; line-height:1.4;">
                            Premium Event Management
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td align="right" valign="middle" style="font-size:12px; color:#cfc7df;">
                    New Account
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Hero Section -->
          <tr>
            <td style="padding:0;">

              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:linear-gradient(135deg,#1b1034 0%, #2a1249 35%, #4c1d95 70%, #7c3aed 100%);">
                <tr>
                  <td align="center" style="padding:48px 30px 28px 30px;">

                    <div style="display:inline-block; padding:8px 16px; border-radius:999px; background-color:rgba(255,255,255,0.08); color:#fde68a; font-size:11px; font-weight:bold; letter-spacing:2px; text-transform:uppercase;">
                      Live Event Energy
                    </div>

                    <h1 style="margin:18px 0 10px 0; font-size:34px; line-height:1.2; color:#ffffff; font-weight:bold;">
                      Welcome to Adhithi
                    </h1>

                    <p style="margin:0; font-size:15px; line-height:1.7; color:#e9defd; max-width:460px;">
                      Where Moments Turn Into Memories
                    </p>

                  </td>
                </tr>

                <!-- Hero mini strip -->
                <tr>
                  <td align="center" style="padding:0 30px 34px 30px;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:rgba(0,0,0,0.18); border:1px solid rgba(255,255,255,0.08); border-radius:14px;">
                      <tr>
                        <td align="center" style="padding:16px 10px; font-size:14px; color:#ffffff; font-weight:bold;">
                          🎵 Create Events
                        </td>
                        <td align="center" style="padding:16px 10px; font-size:14px; color:#ffffff; font-weight:bold;">
                          🎟 Sell Tickets
                        </td>
                        <td align="center" style="padding:16px 10px; font-size:14px; color:#ffffff; font-weight:bold;">
                          🎉 Host Experiences
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 30px 10px 30px; background-color:#120b22; color:#e5e7eb;">

              <div style="font-size:12px; color:#d8b4fe; font-weight:bold; letter-spacing:2px; text-transform:uppercase; margin-bottom:12px;">
                Welcome Email
              </div>

              <h2 style="margin:0 0 18px 0; font-size:28px; line-height:1.2; color:#ffffff;">
                Hi <span style="color:#e879f9;">${name}</span> 👋
              </h2>

              <p style="margin:0 0 16px 0; font-size:15px; line-height:1.8; color:#d6d3e1;">
                We’re excited to have you join <strong style="color:#ffffff;">Adhithi Event Management Team</strong> — your all-in-one platform to create, manage, and promote unforgettable events.
              </p>

              <p style="margin:0 0 22px 0; font-size:15px; line-height:1.8; color:#d6d3e1;">
                From weddings 💍 to corporate events 🏢 and grand celebrations 🎊 — Adhithi helps you plan every detail with elegance, speed, and confidence.
              </p>

            </td>
          </tr>

          <!-- Feature Cards -->
          <tr>
            <td style="padding:0 30px 10px 30px; background-color:#120b22;">

              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding-bottom:14px;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02)); border:1px solid rgba(255,255,255,0.08); border-radius:16px;">
                      <tr>
                        <td width="68" valign="top" style="padding:18px 0 18px 18px;">
                          <table width="50" height="50" cellpadding="0" cellspacing="0" border="0" style="border-radius:14px; background:linear-gradient(135deg,#fbbf24,#ec4899);">
                            <tr>
                              <td align="center" valign="middle" style="font-size:22px;">🎫</td>
                            </tr>
                          </table>
                        </td>
                        <td valign="top" style="padding:18px 18px 18px 12px;">
                          <div style="font-size:18px; font-weight:bold; color:#ffffff; margin-bottom:6px;">
                            Create Events
                          </div>
                          <div style="font-size:14px; line-height:1.7; color:#cfc7df;">
                            Launch weddings, conferences, meetups, and premium celebrations with a polished workflow.
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td style="padding-bottom:14px;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02)); border:1px solid rgba(255,255,255,0.08); border-radius:16px;">
                      <tr>
                        <td width="68" valign="top" style="padding:18px 0 18px 18px;">
                          <table width="50" height="50" cellpadding="0" cellspacing="0" border="0" style="border-radius:14px; background:linear-gradient(135deg,#67e8f9,#4f46e5);">
                            <tr>
                              <td align="center" valign="middle" style="font-size:22px;">✅</td>
                            </tr>
                          </table>
                        </td>
                        <td valign="top" style="padding:18px 18px 18px 12px;">
                          <div style="font-size:18px; font-weight:bold; color:#ffffff; margin-bottom:6px;">
                            Manage Guests
                          </div>
                          <div style="font-size:14px; line-height:1.7; color:#cfc7df;">
                            Track bookings, registrations, attendees, and planning updates in one simple place.
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td style="padding-bottom:14px;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02)); border:1px solid rgba(255,255,255,0.08); border-radius:16px;">
                      <tr>
                        <td width="68" valign="top" style="padding:18px 0 18px 18px;">
                          <table width="50" height="50" cellpadding="0" cellspacing="0" border="0" style="border-radius:14px; background:linear-gradient(135deg,#f472b6,#8b5cf6);">
                            <tr>
                              <td align="center" valign="middle" style="font-size:22px;">📣</td>
                            </tr>
                          </table>
                        </td>
                        <td valign="top" style="padding:18px 18px 18px 12px;">
                          <div style="font-size:18px; font-weight:bold; color:#ffffff; margin-bottom:6px;">
                            Promote Beautifully
                          </div>
                          <div style="font-size:14px; line-height:1.7; color:#cfc7df;">
                            Showcase events, attract your audience, and build memorable experiences with style.
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Highlight Box -->
          <tr>
            <td style="padding:8px 30px 0 30px; background-color:#120b22;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#1a1330; border:1px solid rgba(236,72,153,0.18); border-radius:16px;">
                <tr>
                  <td style="padding:22px;">
                    <div style="font-size:18px; font-weight:bold; color:#ffffff; margin-bottom:12px;">
                      ⚡ Getting Started
                    </div>
                    <div style="font-size:14px; line-height:1.9; color:#d6d3e1;">
                      1. Create your first event<br />
                      2. Customize tickets and planning details<br />
                      3. Invite your audience and start managing everything
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td align="center" style="padding:30px 30px 36px 30px; background-color:#120b22;">
              <a href="http://localhost:5173/event-management/events"
                 style="background:linear-gradient(135deg,#4ade80,#a3e635); color:#111827; text-decoration:none; padding:16px 34px; border-radius:999px; font-size:16px; font-weight:bold; display:inline-block;">
                Create Your First Event ⚡
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#0d0819; padding:24px 20px; text-align:center;">
              <div style="font-size:16px; font-weight:bold; color:#ffffff; margin-bottom:8px;">
                Need help? We’re here for you.
              </div>
              <div style="font-size:13px; line-height:1.8; color:#9ca3af;">
                Support: support@adhithi.com<br />
                Website: www.adhithi.com
              </div>
              <div style="margin-top:14px; font-size:12px; color:#6b7280;">
                © 2026 Adhithi. All rights reserved.
              </div>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>

`;
};

export const otpMail = (name, otp) => {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>

  <body style="margin:0; padding:0; background-color:#f3f4f6; font-family:Arial, sans-serif;">

    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center">

          <table width="600" cellpadding="0" cellspacing="0"
            style="background:#ffffff; margin:40px 0; border-radius:12px; overflow:hidden; box-shadow:0 8px 20px rgba(0,0,0,0.08);">

            <!-- Header -->
            <tr>
              <td style="background:#7c3aed; padding:30px; text-align:center; color:white;">
                <h1 style="margin:0; font-size:24px;">🔐 Email Verification</h1>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:40px 30px; color:#374151;">

                <h2 style="margin-top:0;">Hi ${name},</h2>

                <p style="font-size:15px; line-height:1.6;">
                  Thank you for registering with <strong>Adhithi Event Management</strong>.
                  Please use the OTP below to verify your email address.
                </p>

                <!-- OTP Box -->
                <div style="
                  margin:30px 0;
                  padding:20px;
                  text-align:center;
                  background:#f9fafb;
                  border-radius:10px;
                  border:1px dashed #7c3aed;
                  ">
                  <p style="margin:0; font-size:14px; color:#6b7280;">Your Verification Code</p>
                  <p style="margin:10px 0 0 0; font-size:28px; font-weight:bold; letter-spacing:4px; color:#7c3aed;">
                    ${otp}
                  </p>
                </div>

                <p style="font-size:14px; line-height:1.6;">
                  ⚠ This OTP is valid for 2 hours.  
                  Do not share this code with anyone.
                </p>

              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background:#f9fafb; padding:20px; text-align:center; font-size:13px; color:#6b7280;">
                If you didn’t request this, please ignore this email.
                <br><br>
                © 2026 Adhithi Event Management. All rights reserved.
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>

  </body>
  </html>
  `;
};

export const sendBookingSuccessEmail = ({
  to,
  customerName,
  receipt,
  eventName,
  eventDate,
  totalPaid,
  razorpayPaymentId,
  eventLocation,
  companyName
}) => {

  const formattedDate = new Date(eventDate).toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short"
  })

  const html =
    `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Payment Successful</title>
  </head>
  <body style="margin:0; padding:0; background-color:#0b0b14; font-family:Arial, Helvetica, sans-serif;">
    
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#0b0b14; margin:0; padding:0;">
      <tr>
        <td align="center" style="padding:30px 15px;">
          
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:600px; background-color:#6d28d9; border-radius:16px; overflow:hidden;">
            
            <!-- Header -->
            <tr>
              <td style="background-color:#000000; padding:24px 28px;">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                  <tr>
                    <td align="left" style="color:#ffffff; font-size:28px; font-weight:bold;">
                      LOGO
                    </td>
                    <td align="right" style="color:#a855f7; font-size:18px; font-weight:bold;">
                      Booking Confirmed ✅
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Main content -->
            <tr>
              <td style="padding:28px 20px 10px 20px;">

                <!-- Success Card -->
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:linear-gradient(180deg, #4c1d95 0%, #3b1680 100%); border-radius:14px; box-shadow:0 4px 14px rgba(0,0,0,0.25);">
                  <tr>
                    <td style="padding:28px 24px;">
                      <div style="color:#ffffff; font-size:18px; font-weight:bold; text-align:center; margin-bottom:20px;">
                        🎉 Payment Successful
                      </div>

                      <div style="height:1px; background-color:#8b5cf6; opacity:0.45; margin-bottom:24px;"></div>

                      <div style="color:#ffffff; font-size:16px; line-height:1.7;">
                        <p style="margin:0 0 16px 0;">Hi ${customerName},</p>
                        <p style="margin:0;">
                          Your booking has been confirmed successfully.<br />
                          Thank you for your payment.
                        </p>
                      </div>
                    </td>
                  </tr>
                </table>

                <!-- Spacer -->
                <div style="height:22px;"></div>

                <!-- Booking Details -->
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:linear-gradient(180deg, #12121d 0%, #090910 100%); border-radius:14px; box-shadow:0 4px 14px rgba(0,0,0,0.25);">
                  <tr>
                    <td style="padding:24px;">
                      <div style="color:#a855f7; font-size:16px; font-weight:bold; margin-bottom:18px;">
                        Booking Details
                      </div>

                      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
                        <tr>
                          <td style="padding:10px 0; color:#c084fc; font-size:15px; width:38%;">Event:</td>
                          <td style="padding:10px 0; color:#ffffff; font-size:15px;">${eventName}</td>
                        </tr>
                        <tr>
                          <td colspan="2" style="border-bottom:1px solid #3b2a5c;"></td>
                        </tr>

                        <tr>
                          <td style="padding:10px 0; color:#c084fc; font-size:15px;">Date:</td>
                          <td style="padding:10px 0; color:#ffffff; font-size:15px;">${formattedDate}</td>
                        </tr>
                        <tr>
                          <td colspan="2" style="border-bottom:1px solid #3b2a5c;"></td>
                        </tr>

                        <tr>
                          <td style="padding:10px 0; color:#c084fc; font-size:15px;">Location:</td>
                          <td style="padding:10px 0; color:#ffffff; font-size:15px;">${eventLocation}</td>
                        </tr>
                        <tr>
                          <td colspan="2" style="border-bottom:1px solid #3b2a5c;"></td>
                        </tr>

                        <tr>
                          <td colspan="2" style="border-bottom:1px dashed #4b3a70;"></td>
                        </tr>

                        <tr>
                          <td style="padding:14px 0 10px 0; color:#c084fc; font-size:15px;">Amount Paid:</td>
                          <td style="padding:14px 0 10px 0; color:#ffffff; font-size:15px; font-weight:bold;">₹${totalPaid}</td>
                        </tr>
                        <tr>
                          <td colspan="2" style="border-bottom:1px solid #3b2a5c;"></td>
                        </tr>

                        <tr>
                          <td style="padding:14px 0 0 0; color:#c084fc; font-size:15px;">Payment ID:</td>
                          <td style="padding:14px 0 0 0; color:#ffffff; font-size:15px;">${razorpayPaymentId}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>

                <!-- Spacer -->
                <div style="height:24px;"></div>

                <!-- Button -->
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                  <tr>
                    <td align="center">
                      <a href="${receipt}" 
                         style="display:inline-block; background:linear-gradient(180deg, #7c3aed 0%, #5b21b6 100%); color:#ffffff; text-decoration:none; font-size:18px; font-weight:bold; padding:14px 34px; border-radius:10px;">
                        Download Receipt
                      </a>
                    </td>
                  </tr>
                </table>

                <!-- Spacer -->
                <div style="height:28px;"></div>

              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background-color:#05050a; padding:26px 20px; text-align:center;">
                <p style="margin:0 0 12px 0; color:#e9d5ff; font-size:15px; line-height:1.6;">
                  If you have any questions, contact support.
                </p>
                <p style="margin:0 0 18px 0;">
                  <a href="mailto:${process.env.NO_REPLAY_EMAIL}" style="color:#c084fc; font-size:15px; font-weight:bold; text-decoration:underline;">
                    ${process.env.NO_REPLAY_EMAIL}
                  </a>
                </p>
                <div style="height:1px; background-color:#2b1d42; margin:0 auto 18px auto; max-width:500px;"></div>
                <p style="margin:0; color:#d8b4fe; font-size:14px;">
                  © 2026 ${companyName}
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>

  </body>
  </html>

  `

  return welcomeMessage.sendMail({
    from: `"Adhithi" <${process.env.NO_REPLAY_EMAIL}>`,
    to,
    subject: "Booking Confirmed - Payment Successful",
    html
  })

}