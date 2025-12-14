from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail
from django.conf import settings
import json
import logging

logger = logging.getLogger(__name__)


@csrf_exempt
def contact_view(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)

            name = data.get("name", "").strip()
            email = data.get("email", "").strip()
            message = data.get("message", "").strip()

            # Validate
            if not name or not email or not message:
                return JsonResponse(
                    {"status": "error", "message": "All fields are required"},
                    status=400,
                )

            # ================= EMAIL CONTENT =================
            subject = f"New Portfolio Contact – {name}"

            text_message = f"""
New Contact Form Submission

Name: {name}
Email: {email}

Message:
{message}

---
Sent from Kelvin Chacha Portfolio
"""

            html_message = f"""
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>New Contact Message</title>
    <style>
        body {{
            margin: 0;
            padding: 0;
            background-color: #f5f7fa;
            font-family: Arial, Helvetica, sans-serif;
            color: #333333;
        }}
        .wrapper {{
            width: 100%;
            padding: 20px 0;
        }}
        .container {{
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }}
        .header {{
            background: #0a192f;
            color: #ffffff;
            padding: 20px;
            text-align: center;
        }}
        .header h2 {{
            margin: 0;
            font-size: 20px;
            font-weight: 600;
        }}
        .content {{
            padding: 24px;
        }}
        .label {{
            font-size: 13px;
            color: #777777;
            margin-bottom: 4px;
        }}
        .value {{
            font-size: 15px;
            color: #111111;
            margin-bottom: 16px;
        }}
        .message-box {{
            background: #f1f5f9;
            border-left: 4px solid #0ea5e9;
            padding: 15px;
            border-radius: 4px;
            font-size: 14px;
            line-height: 1.6;
            white-space: pre-line;
        }}
        .footer {{
            padding: 16px;
            font-size: 12px;
            color: #888888;
            text-align: center;
            background: #fafafa;
            border-top: 1px solid #eeeeee;
        }}
    </style>
</head>
<body>
    <div class="wrapper">
        <div class="container">
            <div class="header">
                <h2>New Portfolio Contact</h2>
            </div>

            <div class="content">
                <div class="label">Name</div>
                <div class="value">{name}</div>

                <div class="label">Email</div>
                <div class="value">{email}</div>

                <div class="label">Message</div>
                <div class="message-box">
                    {message}
                </div>
            </div>

            <div class="footer">
                This message was sent from Kelvin Chacha Portfolio Website
            </div>
        </div>
    </div>
</body>
</html>
"""

            send_mail(
                subject=subject,
                message=text_message,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.EMAIL_HOST_USER],
                html_message=html_message,
                fail_silently=False,
            )

            return JsonResponse(
                {
                    "status": "success",
                    "message": "Your message has been sent successfully.",
                }
            )

        except json.JSONDecodeError:
            return JsonResponse(
                {"status": "error", "message": "Invalid JSON data"}, status=400
            )

        except Exception as e:
            logger.error(f"Contact form error: {str(e)}")
            return JsonResponse(
                {
                    "status": "error",
                    "message": "Server error. Please try again later.",
                },
                status=500,
            )

    return JsonResponse(
        {
            "status": "info",
            "message": "Contact API is running",
            "method": "POST",
            "required_fields": ["name", "email", "message"],
        }
    )
