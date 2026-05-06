// =============================================
//  Atria Institute of Technology – AI Assistant
//  JavaScript Logic
// =============================================

// ── Knowledge Base ────────────────────────────
const KB = [
  {
    keys: ["course", "program", "branch", "engineering", "mba", "mca", "btech", "b.tech", "offered"],
    answer: `Atria Institute of Technology offers the following undergraduate and postgraduate programs:<br><br>
<strong>🎓 B.E. / B.Tech Programs:</strong>
<ul>
  <li>Computer Science & Engineering (CSE)</li>
  <li>Artificial Intelligence & Machine Learning (AIML)</li>
  <li>Information Science & Engineering (ISE)</li>
  <li>Electronics & Communication Engineering (ECE)</li>
  <li>Electrical & Electronics Engineering (EEE)</li>
  <li>Mechanical Engineering (ME)</li>
  <li>Civil Engineering (CE)</li>
</ul>
<strong>📘 Postgraduate Programs:</strong>
<ul>
  <li>MBA (Master of Business Administration)</li>
  <li>MCA (Master of Computer Applications)</li>
  <li>M.Tech (various specializations)</li>
</ul>
For the full list, visit <a href="https://atria.edu.in" target="_blank">atria.edu.in</a>.`
  },
  {
    keys: ["admission", "apply", "application", "enroll", "how to join", "registration"],
    answer: `Here's how to apply to Atria Institute of Technology:<br><br>
<strong>📋 Admission Process:</strong>
<ul>
  <li><strong>UG (B.E./B.Tech):</strong> Via Karnataka CET / COMEDK / Management Quota</li>
  <li><strong>PG (MBA/MCA/M.Tech):</strong> Based on KMAT / PGCET / merit</li>
</ul>
<strong>📝 Steps:</strong>
<ol style="padding-left:18px; margin-top:6px;">
  <li>Visit <a href="https://atria.edu.in" target="_blank">atria.edu.in</a></li>
  <li>Click on <strong>Admissions</strong></li>
  <li>Fill out the online application form</li>
  <li>Upload required documents</li>
  <li>Await counselling / confirmation</li>
</ol>
📞 For help, call the admission office directly.`
  },
  {
    keys: ["fee", "fees", "tuition", "cost", "payment", "scholarship"],
    answer: `Fee structures at Atria depend on the program and category (CET/COMEDK/Management).<br><br>
<strong>💰 Approximate Annual Fees:</strong>
<ul>
  <li>B.E. (CET): ₹70,000 – ₹1,00,000/year</li>
  <li>B.E. (COMEDK): ₹1,50,000 – ₹2,00,000/year</li>
  <li>MBA: ₹1,00,000 – ₹1,50,000/year</li>
  <li>MCA / M.Tech: Varies by specialization</li>
</ul>
<strong>🎓 Scholarships</strong> are available for merit students and SC/ST/OBC categories.<br><br>
For exact fee details, please visit <a href="https://atria.edu.in" target="_blank">atria.edu.in</a> or contact the admissions office.`
  },
  {
    keys: ["placement", "recruit", "job", "company", "career", "salary", "package", "hiring"],
    answer: `Atria Institute of Technology has an active Training & Placement Cell! 🚀<br><br>
<strong>🏢 Top Recruiters include:</strong>
<ul>
  <li>Infosys, Wipro, TCS, Accenture</li>
  <li>IBM, Cognizant, Capgemini</li>
  <li>Amazon, Flipkart, Bosch, and more</li>
</ul>
<strong>📊 Placement Highlights:</strong>
<ul>
  <li>Consistent 85%+ placement rate</li>
  <li>Highest packages in top MNCs</li>
  <li>Regular campus drives & internships</li>
  <li>Soft skills & aptitude training provided</li>
</ul>
Visit <a href="https://atria.edu.in" target="_blank">atria.edu.in</a> for the latest placement reports.`
  },
  {
    keys: ["hostel", "accommodation", "stay", "dorm", "pg", "room"],
    answer: `Yes! Atria Institute of Technology provides hostel facilities. 🏠<br><br>
<strong>🛏️ Hostel Details:</strong>
<ul>
  <li>Separate hostels for boys and girls</li>
  <li>Furnished rooms (single / double / triple sharing)</li>
  <li>24/7 security and CCTV surveillance</li>
  <li>Wi-Fi enabled campus & hostel</li>
  <li>Hygienic mess with nutritious meals</li>
  <li>Common rooms & recreational facilities</li>
</ul>
For availability and fees, contact the hostel office or visit <a href="https://atria.edu.in" target="_blank">atria.edu.in</a>.`
  },
  {
    keys: ["location", "address", "where", "situated", "bangalore", "bengaluru", "campus"],
    answer: `📍 <strong>Atria Institute of Technology</strong> is located in the heart of Bengaluru:<br><br>
<strong>Address:</strong><br>
Anandanagar, Hebbal,<br>
Bengaluru – 560 024,<br>
Karnataka, India.<br><br>
🚇 Well-connected by BMTC buses and easily accessible from Hebbal flyover and central Bengaluru.<br><br>
🗺️ Find us on Google Maps by searching <em>"Atria Institute of Technology Hebbal"</em>.`
  },
  {
    keys: ["contact", "phone", "email", "number", "call", "reach", "helpdesk"],
    answer: `📞 <strong>Contact Atria Institute of Technology:</strong><br><br>
<ul>
  <li>🌐 Website: <a href="https://atria.edu.in" target="_blank">atria.edu.in</a></li>
  <li>📍 Anandanagar, Hebbal, Bengaluru – 560024</li>
  <li>📧 Email: Available on the official website</li>
  <li>📞 Phone: Available on the official website</li>
</ul>
For the most up-to-date contact info, please visit <a href="https://atria.edu.in" target="_blank">atria.edu.in → Contact Us</a>.`
  },
  {
    keys: ["department", "faculty", "professor", "staff", "hod", "teacher"],
    answer: `Atria has experienced and qualified faculty across all departments! 👨‍🏫<br><br>
<strong>📚 Departments include:</strong>
<ul>
  <li>Computer Science & Engineering (CSE)</li>
  <li>AI & Machine Learning (AIML)</li>
  <li>Information Science (ISE)</li>
  <li>Electronics & Communication (ECE)</li>
  <li>Electrical & Electronics (EEE)</li>
  <li>Mechanical Engineering (ME)</li>
  <li>Civil Engineering (CE)</li>
  <li>MBA & MCA Departments</li>
  <li>Physics, Chemistry & Mathematics (Science dept.)</li>
</ul>
To view faculty profiles, visit <a href="https://atria.edu.in" target="_blank">atria.edu.in</a>.`
  },
  {
    keys: ["facility", "lab", "library", "cafeteria", "sport", "gym", "campus", "infrastructure", "wifi"],
    answer: `Atria has a world-class campus with excellent facilities! 🏛️<br><br>
<strong>🏫 Campus Facilities:</strong>
<ul>
  <li>🖥️ Advanced Computer & Research Labs</li>
  <li>📚 Well-stocked Central Library with e-resources</li>
  <li>🍽️ Student Cafeteria & Food Court</li>
  <li>🏋️ Gymnasium & Sports Complex</li>
  <li>🏏 Cricket, Basketball, Football grounds</li>
  <li>📡 High-speed Wi-Fi across campus</li>
  <li>🎤 Seminar Halls & Auditorium</li>
  <li>🏥 Medical / First Aid Room</li>
</ul>
Explore more at <a href="https://atria.edu.in" target="_blank">atria.edu.in</a>.`
  },
  {
    keys: ["event", "club", "fest", "cultural", "technical", "nss", "activity", "extracurricular"],
    answer: `Student life at Atria is vibrant and active! 🎉<br><br>
<strong>🎭 Clubs & Activities:</strong>
<ul>
  <li>Technical Fest & Cultural Fest (annual)</li>
  <li>IEEE, CSI Student Chapters</li>
  <li>Robotics & Coding Clubs</li>
  <li>NSS (National Service Scheme)</li>
  <li>Sports Teams & Tournaments</li>
  <li>Photography, Drama, Dance, Music clubs</li>
  <li>Entrepreneurship & Innovation Cell</li>
</ul>
These activities help in overall personality development. Check <a href="https://atria.edu.in" target="_blank">atria.edu.in</a> for upcoming events.`
  },
  {
    keys: ["exam", "result", "academic", "calendar", "semester", "schedule", "vtu", "syllabus"],
    answer: `Atria Institute of Technology is affiliated with <strong>VTU (Visvesvaraya Technological University)</strong>. 📅<br><br>
<strong>📋 Academic Info:</strong>
<ul>
  <li>Follows VTU semester system (2 semesters/year)</li>
  <li>Internal assessments + end-semester exams</li>
  <li>Results published on VTU portal: <a href="https://results.vtu.ac.in" target="_blank">results.vtu.ac.in</a></li>
  <li>Academic calendar shared at the start of each year</li>
</ul>
For the college academic schedule and circulars, visit <a href="https://atria.edu.in" target="_blank">atria.edu.in</a>.`
  },
  {
    keys: ["naac", "accreditation", "ranking", "recognition", "approved", "aicte", "ugc"],
    answer: `✅ <strong>Atria Institute of Technology – Accreditations:</strong><br><br>
<ul>
  <li>Approved by <strong>AICTE</strong> (All India Council for Technical Education)</li>
  <li>Affiliated to <strong>VTU</strong> (Visvesvaraya Technological University)</li>
  <li>Recognized by <strong>UGC</strong></li>
  <li>NAAC Accredited Institution</li>
</ul>
For more details, visit the official website: <a href="https://atria.edu.in" target="_blank">atria.edu.in</a>.`
  }
];

// ── Helpers ───────────────────────────────────
function getAnswer(input) {
  const text = input.toLowerCase();
  for (const entry of KB) {
    if (entry.keys.some(k => text.includes(k))) {
      return entry.answer;
    }
  }
  return null;
}

function scrollToBottom() {
  const box = document.getElementById("chatBox");
  box.scrollTop = box.scrollHeight;
}

function appendMessage(role, html) {
  const box = document.getElementById("chatBox");
  const row = document.createElement("div");
  row.className = `msg-row ${role}`;

  const avatar = document.createElement("div");
  avatar.className = `avatar ${role === "bot" ? "bot-avatar" : "user-avatar"}`;
  avatar.textContent = role === "bot" ? "A" : "👤";

  const bubble = document.createElement("div");
  bubble.className = `bubble ${role === "bot" ? "bot-bubble" : "user-bubble"}`;
  bubble.innerHTML = html;

  row.appendChild(avatar);
  row.appendChild(bubble);
  box.appendChild(row);
  scrollToBottom();
}

function showTyping() {
  const box = document.getElementById("chatBox");
  const row = document.createElement("div");
  row.className = "msg-row bot";
  row.id = "typingRow";

  const avatar = document.createElement("div");
  avatar.className = "avatar bot-avatar";
  avatar.textContent = "A";

  const bubble = document.createElement("div");
  bubble.className = "bubble bot-bubble";
  bubble.innerHTML = `<div class="typing-indicator">
    <span></span><span></span><span></span>
  </div>`;

  row.appendChild(avatar);
  row.appendChild(bubble);
  box.appendChild(row);
  scrollToBottom();
}

function removeTyping() {
  const el = document.getElementById("typingRow");
  if (el) el.remove();
}

// ── Send Message ──────────────────────────────
function sendMessage() {
  const input = document.getElementById("userInput");
  const text = input.value.trim();
  if (!text) return;

  appendMessage("user", text);
  input.value = "";

  // Hide chips after first message
  document.getElementById("suggestions").classList.add("hidden");

  showTyping();

  setTimeout(() => {
    removeTyping();
    const answer = getAnswer(text);
    if (answer) {
      appendMessage("bot", answer);
    } else {
      appendMessage("bot", `Thanks for your question! 😊 I'm not sure about that specific detail, but I'd recommend:<br><br>
🌐 Visiting <a href="https://atria.edu.in" target="_blank">atria.edu.in</a><br>
📞 Or calling the college helpdesk directly.<br><br>
You can also ask me about <strong>courses, admissions, placements, hostel, fees, events,</strong> or <strong>campus facilities</strong>!`);
    }
  }, 1100);
}

// ── Quick Chip Click ──────────────────────────
function sendChip(btn) {
  const text = btn.textContent.replace(/^.{2}/, "").trim(); // strip emoji
  document.getElementById("userInput").value = text;
  sendMessage();
}

// ── Init: Welcome Message ─────────────────────
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    appendMessage("bot", `Hello! 👋 I'm the <strong>AI Assistant for Atria Institute of Technology</strong>.<br><br>
I can help you with:<br>
📚 Courses &nbsp;|&nbsp; 🎓 Admissions &nbsp;|&nbsp; 💼 Placements<br>
🏠 Hostel &nbsp;|&nbsp; 📍 Location &nbsp;|&nbsp; 🏛️ Facilities & more!<br><br>
How can I help you today?`);
  }, 400);
});
