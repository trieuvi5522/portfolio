import type { Locale } from "../data/types";

export const locales: Locale[] = ["en", "vi"];
export const defaultLocale: Locale = "en";

export const languageNames: Record<Locale, string> = {
  en: "English",
  vi: "Tiếng Việt",
};

const en = {
  /* Nav */
  "nav.home": "About",
  "nav.projects": "Projects",
  "nav.contact": "Contact",
  "nav.menu": "Menu",

  /* Home */
  "home.kicker": "IoT Specialist & Automation Engineer",
  "home.heroTitle": "Building reliable IoT systems, from field devices to cloud dashboards.",
  "home.heroDesc":
    "I'm Luca Nguyen — an automation engineer from Vietnam delivering industrial IoT, smart building, and energy monitoring systems for clients across Europe and Asia.",
  "home.viewProjects": "View Projects",
  "home.contactMe": "Contact Me",
  "home.featuredTitle": "Featured Projects",
  "home.featuredDesc": "Real production systems running for real clients.",
  "home.allProjects": "All projects",
  "home.statProjects": "Production projects",
  "home.statCountries": "Countries served",
  "home.statProtocols": "Protocols integrated",
  "home.ctaTitle": "Have an IoT project in mind?",
  "home.ctaDesc": "From feasibility to deployment and maintenance — let's talk about your system.",

  /* Projects */
  "projects.kicker": "Portfolio",
  "projects.title": "Projects",
  "projects.desc": "Production IoT systems I designed, built, and deployed for clients in Vietnam, Denmark, and Germany.",
  "projects.readCase": "Read case study",
  "projects.backToProjects": "Back to projects",

  /* Project detail */
  "project.results": "Results",
  "project.techHighlights": "Tech Highlights",
  "project.feature": "Feature",
  "project.technical": "Technical Implementation",
  "project.benefit": "Benefit",
  "project.techStack": "Tech stack",
  "project.architecture": "Architecture",
  "project.published": "Published",
  "project.location": "Location",
  "project.ctaButton": "Get in touch",

  /* About */
  "about.kicker": "About Me",
  "about.greeting": "Hi! I'm Triều Vĩ, but you can call me Luca — welcome to my portfolio 😄",
  "about.intro1":
    "I'm an Automation Engineer and IoT specialist based in Vietnam. I've worked with local and international partners to deliver a wide range of IoT systems — from Industrial IoT (IIoT) and Smart Buildings to high-tech agriculture.",
  "about.intro2":
    'My working philosophy can be summed up in two words: "Sustainable" and "Scalable". Instead of focusing on short-term fixes, I design systems that can scale flexibly, operate reliably with professional practices, and maintain strong security.',
  "about.focusTitle": "What I Focus On",
  "about.expertiseTitle": "Technical Expertise",
  "about.processTitle": "How I Work",
  "about.processSubtitle": "End-to-end process from discovery to operation.",
  "about.whyTitle": "Why Clients Work With Me",
  "about.ctaTitle": "Let's Build Something Together",
  "about.ctaDesc": "Whether you need consulting or a full IoT deployment — I'm here to help.",

  /* Contact */
  "contact.kicker": "Get In Touch",
  "contact.title": "Contact",
  "contact.desc": "Ready to start your IoT project? Let's talk.",
  "contact.email": "Email",
  "contact.whatsapp": "WhatsApp",
  "contact.linkedin": "LinkedIn",
  "contact.facebook": "Facebook",
  "contact.emailNote": "Best for project briefs and documents",
  "contact.whatsappNote": "Fastest way to reach me",
  "contact.linkedinNote": "Professional profile & background",
  "contact.facebookNote": "Personal page",
  "contact.copy": "Copy",
  "contact.copied": "Copied!",
  "contact.availability": "Based in Vietnam (GMT+7) — working with clients across Europe and Asia. I usually reply within 24 hours.",

  /* Footer */
  "footer.tagline": "IoT Specialist & Automation Engineer",
  "footer.rights": "All rights reserved.",

  /* 404 */
  "notFound.title": "Page not found",
  "notFound.desc": "The page you're looking for doesn't exist or has been moved.",
  "notFound.back": "Back to home",

  /* Theme */
  "theme.toggle": "Toggle dark mode",
} as const;

const vi: Record<keyof typeof en, string> = {
  /* Nav */
  "nav.home": "Giới thiệu",
  "nav.projects": "Dự án",
  "nav.contact": "Liên hệ",
  "nav.menu": "Menu",

  /* Home */
  "home.kicker": "Chuyên gia IoT & Kỹ sư Tự động hoá",
  "home.heroTitle": "Xây dựng hệ thống IoT tin cậy, từ thiết bị hiện trường đến dashboard trên cloud.",
  "home.heroDesc":
    "Tôi là Luca Nguyen — kỹ sư tự động hoá tại Việt Nam, triển khai các hệ thống IoT công nghiệp, toà nhà thông minh và giám sát năng lượng cho khách hàng tại châu Âu và châu Á.",
  "home.viewProjects": "Xem dự án",
  "home.contactMe": "Liên hệ",
  "home.featuredTitle": "Dự án nổi bật",
  "home.featuredDesc": "Các hệ thống thực tế đang vận hành cho khách hàng thật.",
  "home.allProjects": "Tất cả dự án",
  "home.statProjects": "Dự án triển khai",
  "home.statCountries": "Quốc gia phục vụ",
  "home.statProtocols": "Giao thức tích hợp",
  "home.ctaTitle": "Bạn đang ấp ủ một dự án IoT?",
  "home.ctaDesc": "Từ khảo sát khả thi đến triển khai và bảo trì — hãy trao đổi về hệ thống của bạn.",

  /* Projects */
  "projects.kicker": "Portfolio",
  "projects.title": "Dự án",
  "projects.desc": "Các hệ thống IoT tôi thiết kế, xây dựng và triển khai cho khách hàng tại Việt Nam, Đan Mạch và Đức.",
  "projects.readCase": "Xem chi tiết",
  "projects.backToProjects": "Quay lại danh sách dự án",

  /* Project detail */
  "project.results": "Kết quả",
  "project.techHighlights": "Điểm nổi bật kỹ thuật",
  "project.feature": "Tính năng",
  "project.technical": "Triển khai kỹ thuật",
  "project.benefit": "Lợi ích",
  "project.techStack": "Công nghệ sử dụng",
  "project.architecture": "Kiến trúc",
  "project.published": "Ngày đăng",
  "project.location": "Địa điểm",
  "project.ctaButton": "Liên hệ ngay",

  /* About */
  "about.kicker": "Giới thiệu",
  "about.greeting": "Xin chào! Tôi là Triều Vĩ nhưng bạn có thể gọi tôi là Luca — chào mừng đến portfolio của tôi 😄",
  "about.intro1":
    "Là một kỹ sư tự động hóa và chuyên viên IoT đang sinh sống tại Việt Nam. Tôi đã cùng các đối tác trong và ngoài nước triển khai nhiều hệ thống IoT đa dạng — từ Công nghiệp (IIoT), Toà nhà thông minh (Smart Building) đến Nông nghiệp công nghệ cao.",
  "about.intro2":
    'Triết lý làm việc của tôi gói gọn trong hai chữ: "Bền vững" và "Mở rộng". Thay vì chỉ tập trung vào giải pháp tức thời, tôi chú trọng thiết kế các hệ thống có khả năng mở rộng linh hoạt, vận hành chuyên nghiệp với độ ổn định cao và bảo mật tốt.',
  "about.focusTitle": "Lĩnh vực chuyên môn",
  "about.expertiseTitle": "Năng lực kỹ thuật",
  "about.processTitle": "Cách tôi làm việc",
  "about.processSubtitle": "Quy trình toàn diện từ khảo sát đến vận hành.",
  "about.whyTitle": "Tại sao chọn tôi",
  "about.ctaTitle": "Hãy cùng xây dựng",
  "about.ctaDesc": "Dù bạn cần tư vấn hay triển khai IoT toàn diện — tôi sẵn sàng hỗ trợ.",

  /* Contact */
  "contact.kicker": "Kết nối",
  "contact.title": "Liên hệ",
  "contact.desc": "Sẵn sàng bắt đầu dự án IoT của bạn? Hãy trao đổi.",
  "contact.email": "Email",
  "contact.whatsapp": "WhatsApp",
  "contact.linkedin": "LinkedIn",
  "contact.facebook": "Facebook",
  "contact.emailNote": "Phù hợp gửi mô tả dự án và tài liệu",
  "contact.whatsappNote": "Cách liên hệ nhanh nhất",
  "contact.linkedinNote": "Hồ sơ chuyên môn & kinh nghiệm",
  "contact.facebookNote": "Trang cá nhân",
  "contact.copy": "Sao chép",
  "contact.copied": "Đã sao chép!",
  "contact.availability": "Làm việc tại Việt Nam (GMT+7) — phục vụ khách hàng tại châu Âu và châu Á. Tôi thường phản hồi trong vòng 24 giờ.",

  /* Footer */
  "footer.tagline": "Chuyên gia IoT & Kỹ sư Tự động hoá",
  "footer.rights": "Bảo lưu mọi quyền.",

  /* 404 */
  "notFound.title": "Không tìm thấy trang",
  "notFound.desc": "Trang bạn tìm không tồn tại hoặc đã được di chuyển.",
  "notFound.back": "Về trang chủ",

  /* Theme */
  "theme.toggle": "Chuyển chế độ sáng/tối",
};

export const ui: Record<Locale, typeof en> = { en, vi };

export type UIKey = keyof typeof en;

/* ----- About page content (lists, ported from the Luca IoT site) ----- */

export const aboutFocus: Record<Locale, string[]> = {
  en: [
    "Industrial IoT Architecture & Deployment",
    "Multi-Protocol Interoperability (Modbus, OPC UA, MQTT, etc.)",
    "Cloud IoT Infrastructure & Ecosystems (ThingsBoard, Node-RED)",
    "Real-time Operational Visibility & Automation",
    "Smart Home Design & Intelligent Integration",
    "Full-Lifecycle Project Delivery & Maintenance",
  ],
  vi: [
    "Thiết kế cấu trúc & Triển khai Hệ thống IoT Công nghiệp",
    "Tích hợp & Đồng bộ Đa giao thức Công nghiệp",
    "Xây dựng Hệ sinh thái & Hạ tầng IoT trên Đám mây (ThingsBoard, Node-RED)",
    "Giám sát Vận hành & Tự động hóa Thời gian thực",
    "Thiết kế & Tích hợp Giải pháp Nhà thông minh",
    "Quản lý Dự án Toàn diện từ Khảo sát đến Bảo trì",
  ],
};

export const aboutSkills: Record<Locale, string[]> = {
  en: [
    "Industrial Connectivity & Protocols: RS485, Modbus RTU/TCP, OPC UA, MQTT, TCP/IP",
    "Field-to-Cloud Integration: connecting sensors, PLCs, gateways, and controllers to higher-level systems.",
    "Edge & Cloud Orchestration: Developing robust workflows using Node-RED and ThingsBoard (PE/CE).",
    "Data Visualization & Operations: Designing intuitive, real-time dashboards for monitoring, alerting, and scheduling.",
    "Data Engineering & Telemetry: Building resilient telemetry pipelines and long-term data storage strategies.",
    "Infrastructure Resilience: Implementing maintainable deployment practices, backups, and system reliability.",
  ],
  vi: [
    "Giao thức & Kết nối Công nghiệp: RS485, Modbus RTU/TCP, OPC UA, MQTT, TCP/IP",
    "Tích hợp Hiện trường lên Cloud: kết nối cảm biến, PLC, gateway và bộ điều khiển đến tầng cao hơn trong hệ thống",
    "Xây dựng luồng xử lý Edge & Cloud: với Node-RED và ThingsBoard (PE/CE)",
    "Trực quan hóa & Vận hành: Thiết kế dashboard phục vụ giám sát thời gian thực, cảnh báo và vận hành",
    "Thu thập dữ liệu & Telemetry: Xây dựng luồng dữ liệu telemetry ổn định và lưu trữ dữ liệu dài hạn.",
    "Xây dựng Hạ tầng ổn định: Triển khai hệ thống theo tiêu chí vận hành bền vững, sao lưu và bảo trì chuyên nghiệp.",
  ],
};

export interface TitledItem {
  title: string;
  desc: string;
}

export const aboutProcess: Record<Locale, TitledItem[]> = {
  en: [
    { title: "Requirement Discovery", desc: "Understand your operations, goals, and constraints." },
    { title: "Solution Design", desc: "Architecture, protocol selection, and data flow planning." },
    { title: "Device Selection", desc: "Choose the right sensors, gateways, and controllers." },
    { title: "Connectivity & Integration", desc: "Connect devices using industrial protocols and cloud APIs." },
    { title: "Dashboard & Automation", desc: "Build monitoring dashboards, alerts, and scheduling." },
    { title: "Operation & Maintenance", desc: "Ongoing support, updates, backups, and optimization." },
  ],
  vi: [
    { title: "Khảo sát yêu cầu", desc: "Tìm hiểu hoạt động, mục tiêu và ràng buộc của bạn." },
    { title: "Thiết kế giải pháp", desc: "Kiến trúc, lựa chọn giao thức và lập kế hoạch luồng dữ liệu." },
    { title: "Lựa chọn thiết bị", desc: "Chọn cảm biến, gateway và bộ điều khiển phù hợp." },
    { title: "Kết nối & Tích hợp", desc: "Kết nối thiết bị bằng giao thức công nghiệp và API cloud." },
    { title: "Dashboard & Tự động hoá", desc: "Xây dựng dashboard giám sát, cảnh báo và lập lịch." },
    { title: "Vận hành & Bảo trì", desc: "Hỗ trợ liên tục, cập nhật, sao lưu và tối ưu hoá." },
  ],
};

export const aboutWhy: Record<Locale, TitledItem[]> = {
  en: [
    {
      title: "Direct Technical Ownership",
      desc: "I'll be with you throughout the entire technical stack — from field-level connectivity to advanced cloud logic — ensuring no detail is overlooked.",
    },
    {
      title: "Field-Proven Protocol Expertise",
      desc: "Beyond theory, I understand the nuances and limitations of industrial protocols in harsh, real-world deployment environments.",
    },
    {
      title: "From Concept to Commissioning",
      desc: "I don't just design; I stay on-site (or on-call) through testing and handover to ensure your system is fully operational and production-ready.",
    },
    {
      title: "Pragmatic & Scalable Solutions",
      desc: "I prioritize reliable, maintainable architectures that balance high performance with your actual operational needs and budget constraints.",
    },
    {
      title: "Frictionless Communication",
      desc: 'You work directly with me. This flat structure ensures fast responses, clear technical alignment, and zero "lost in translation" moments.',
    },
    {
      title: "Long-Term Operational Mindset",
      desc: "I build for the future. My support continues long after deployment, focusing on system health, proactive maintenance, and ongoing optimization.",
    },
  ],
  vi: [
    {
      title: "Trực tiếp làm chủ công nghệ",
      desc: "Tôi đồng hành cùng bạn trong toàn bộ các khâu kỹ thuật cốt lõi — từ kết nối thiết bị hiện trường đến logic đám mây — đảm bảo mọi chi tiết đều được kiểm soát chặt chẽ.",
    },
    {
      title: "Kinh nghiệm thực chiến về Giao thức",
      desc: "Không chỉ dừng lại ở lý thuyết, tôi am hiểu sâu sắc các đặc thù và giới hạn của giao thức công nghiệp trong các môi trường triển khai thực tế khắc nghiệt.",
    },
    {
      title: "Từ ý tưởng đến Vận hành thực tế",
      desc: "Không chỉ dừng lại ở bản vẽ. Tôi đồng hành xuyên suốt quá trình chạy thử và bàn giao để đảm bảo hệ thống sẵn sàng đi vào sản xuất ổn định.",
    },
    {
      title: "Giải pháp thực tiễn & Linh hoạt",
      desc: "Tôi ưu tiên các kiến trúc ổn định, dễ bảo trì, giúp cân bằng giữa hiệu suất cao với nhu cầu vận hành thực tế và ngân sách của doanh nghiệp.",
    },
    {
      title: "Hợp tác trực tiếp & Minh bạch",
      desc: "Bạn làm việc trực tiếp với tôi. Quy trình tinh gọn này giúp phản hồi nhanh chóng, thống nhất về kỹ thuật và loại bỏ mọi rào cản trong giao tiếp.",
    },
    {
      title: "Tư duy đồng hành dài hạn",
      desc: "Tôi xây dựng hệ thống cho tương lai. Tôi vẫn sẽ hỗ trợ bạn sau khi triển khai, tập trung vào tính ổn định hệ thống, bảo trì và tối ưu hóa liên tục.",
    },
  ],
};
