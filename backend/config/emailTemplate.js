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
