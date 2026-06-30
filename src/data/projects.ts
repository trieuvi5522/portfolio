import { ls, type Project } from "./types";

const projectEntries: Project[] = [
  {
    id: "luca-iot-cloud",
    slug: "luca-iot-cloud",
    title: ls(
      "Luca IoT Cloud — Self-Service Hosting Platform",
      "Luca IoT Cloud — Nền tảng hosting tự phục vụ"
    ),
    excerpt: ls(
      "A multi-tenant SaaS platform that hosts managed Node-RED, InfluxDB, and Grafana instances. Users spin up an isolated, ready-to-use instance in minutes — with automated backups, one-click upgrades, and per-plan resources — backed by a bilingual storefront.",
      "Nền tảng SaaS đa người dùng cung cấp dịch vụ hosting Node-RED, InfluxDB và Grafana được quản lý. Người dùng khởi tạo một instance độc lập, sẵn sàng sử dụng chỉ trong vài phút — kèm sao lưu tự động, nâng cấp một chạm và tài nguyên theo gói — cùng một website bán hàng song ngữ."
    ),
    industry: ls(
      "SaaS / Cloud Hosting / Platform Engineering",
      "SaaS / Cloud Hosting / Kỹ thuật nền tảng"
    ),
    location: ls("Vietnam / Global", "Việt Nam / Toàn cầu"),
    publishedAt: "2026-06-30",
    tech: [
      "Next.js",
      "Fastify",
      "TypeScript",
      "Supabase",
      "Docker",
      "Cloudflare",
      "Tailscale",
      "React",
    ],
    featured: true,
    cover: "luca-iot-cloud/home-hero.jpg",
    resultsTitle: ls("What the Platform Delivers", "Giá trị nền tảng mang lại"),
    results: [
      ls(
        "Self-service provisioning — a user picks a service and plan, and an isolated instance is live in a couple of minutes, no manual setup.",
        "Khởi tạo tự phục vụ — người dùng chọn dịch vụ và gói, một instance độc lập sẵn sàng chỉ sau vài phút, không cần thao tác thủ công."
      ),
      ls(
        "Reliable by default — automated daily backups and safe one-click upgrades that auto-roll back on failure.",
        "Tin cậy mặc định — sao lưu tự động hằng ngày và nâng cấp một chạm an toàn, tự động khôi phục khi gặp lỗi."
      ),
      ls(
        "Strong tenant isolation — every instance runs in its own container with per-plan CPU, RAM, and disk limits.",
        "Cô lập người dùng chặt chẽ — mỗi instance chạy trong container riêng với giới hạn CPU, RAM và ổ đĩa theo gói."
      ),
      ls(
        "Bilingual storefront with transparent, public pricing for every hosting plan.",
        "Website bán hàng song ngữ với bảng giá công khai, minh bạch cho mọi gói hosting."
      ),
      ls(
        "Running in production at lucaiot.com (storefront) and app.lucaiot.com (control panel).",
        "Đang vận hành thực tế tại lucaiot.com (website) và app.lucaiot.com (bảng điều khiển)."
      ),
    ],
    sections: [
      {
        id: "overview",
        title: ls("Overview", "Tổng quan"),
        body: ls(
          "Luca IoT Cloud is a managed-hosting product I have been building from April 2025 to the present. It lets engineers and teams run the IoT tools they rely on — Node-RED, InfluxDB, and Grafana — without managing servers, Docker, TLS, or backups themselves.\n\nThe product has two halves working together:\n- A control plane and node agent (the platform) that provisions and operates each customer instance.\n- A bilingual marketing storefront where visitors browse services, compare plans, and get started.",
          "Luca IoT Cloud là một sản phẩm hosting được quản lý mà tôi xây dựng từ tháng 4/2025 đến nay. Nó giúp các kỹ sư và đội nhóm vận hành các công cụ IoT quen thuộc — Node-RED, InfluxDB và Grafana — mà không phải tự quản lý máy chủ, Docker, TLS hay sao lưu.\n\nSản phẩm gồm hai phần phối hợp với nhau:\n- Control plane và node agent (nền tảng) chịu trách nhiệm khởi tạo và vận hành từng instance của khách hàng.\n- Website bán hàng song ngữ nơi khách tham khảo dịch vụ, so sánh gói và bắt đầu sử dụng."
        ),
      },
      {
        id: "architecture",
        title: ls("Architecture", "Kiến trúc"),
        flowLabel: ls(
          "Cloudflare edge -> Tunnel -> Traefik -> Service instance",
          "Cloudflare edge -> Tunnel -> Traefik -> Service instance"
        ),
        body: ls(
          "A central control plane (Next.js) handles authentication, the dashboard, and the business logic. It talks to a lightweight node agent (Fastify) over a private network; the agent is the only component that touches Docker, and it is never exposed to the public internet.\n\nEach customer instance runs as its own Docker Compose stack behind a reverse proxy, reachable over an outbound-only Cloudflare Tunnel — so the host needs no open inbound ports. Platform state, accounts, and backup metadata live in Supabase (Postgres), and backup archives are stored in object storage.",
          "Một control plane trung tâm (Next.js) xử lý xác thực, dashboard và toàn bộ logic nghiệp vụ. Nó giao tiếp với một node agent gọn nhẹ (Fastify) qua mạng riêng; agent là thành phần duy nhất chạm tới Docker và không bao giờ lộ ra Internet công cộng.\n\nMỗi instance của khách chạy như một stack Docker Compose riêng phía sau reverse proxy, truy cập qua Cloudflare Tunnel chỉ-đi-ra — nhờ đó máy chủ không cần mở cổng vào. Trạng thái nền tảng, tài khoản và metadata sao lưu được lưu trong Supabase (Postgres), còn các bản sao lưu được lưu trên object storage."
        ),
        cards: [
          {
            title: ls("Control plane", "Control plane"),
            body: ls(
              "Next.js app for auth, dashboard, and orchestration logic; never trusts the client — every action is re-checked server-side.",
              "Ứng dụng Next.js cho xác thực, dashboard và logic điều phối; không tin client — mọi thao tác đều được kiểm tra lại phía máy chủ."
            ),
          },
          {
            title: ls("Node agent", "Node agent"),
            body: ls(
              "Fastify service on each host, reachable only on a private network; the single component that drives Docker.",
              "Dịch vụ Fastify trên mỗi máy chủ, chỉ truy cập được trong mạng riêng; là thành phần duy nhất điều khiển Docker."
            ),
          },
          {
            title: ls("Provisioning", "Khởi tạo"),
            body: ls(
              "Renders a Docker Compose stack per instance with the right image, resource limits, and a branded login gate.",
              "Sinh ra một stack Docker Compose cho mỗi instance với image phù hợp, giới hạn tài nguyên và cổng đăng nhập gắn thương hiệu."
            ),
          },
          {
            title: ls("Data & storage", "Dữ liệu & lưu trữ"),
            body: ls(
              "Supabase (Postgres) for accounts and instance state; object storage for backup archives.",
              "Supabase (Postgres) cho tài khoản và trạng thái instance; object storage cho các bản sao lưu."
            ),
          },
        ],
      },
      {
        id: "provisioning",
        title: ls("Self-Service Provisioning", "Khởi tạo tự phục vụ"),
        body: ls(
          "The storefront offers managed hosting for three services, each with public plan tiers and clear resource limits:\n- Node-RED — Starter, Hobby, Start Up, Unicorn (1 vCPU / 1 GB up to 4 vCPU / 8 GB).\n- InfluxDB — time-series storage tuned for high write throughput.\n- Grafana — dashboards with a per-plan plugin allowance.\n\nWhen a user creates an instance, the platform renders a dedicated container stack, applies the plan's CPU/RAM/disk limits, and fronts it with a branded login gate so customers see a consistent Luca IoT experience instead of each tool's default login.",
          "Website cung cấp dịch vụ hosting được quản lý cho ba sản phẩm, mỗi sản phẩm có các gói công khai và giới hạn tài nguyên rõ ràng:\n- Node-RED — Starter, Hobby, Start Up, Unicorn (từ 1 vCPU / 1 GB đến 4 vCPU / 8 GB).\n- InfluxDB — lưu trữ time-series tối ưu cho lưu lượng ghi cao.\n- Grafana — dashboard với số lượng plugin theo gói.\n\nKhi người dùng tạo một instance, nền tảng sinh ra một stack container riêng, áp giới hạn CPU/RAM/ổ đĩa theo gói, và đặt phía trước một cổng đăng nhập gắn thương hiệu để khách có trải nghiệm Luca IoT nhất quán thay vì màn hình đăng nhập mặc định của từng công cụ."
        ),
        gallery: [
          {
            src: "luca-iot-cloud/services.jpg",
            alt: ls(
              "Luca IoT Cloud services page listing Node-RED, InfluxDB and Grafana hosting",
              "Trang dịch vụ Luca IoT Cloud liệt kê hosting Node-RED, InfluxDB và Grafana"
            ),
            caption: ls(
              "Service catalog: managed Node-RED, InfluxDB, and Grafana hosting.",
              "Danh mục dịch vụ: hosting Node-RED, InfluxDB và Grafana được quản lý."
            ),
          },
          {
            src: "luca-iot-cloud/pricing.jpg",
            alt: ls(
              "Node-RED hosting pricing plans from Starter to Unicorn",
              "Bảng giá hosting Node-RED từ Starter đến Unicorn"
            ),
            caption: ls(
              "Transparent public pricing with per-plan vCPU, RAM, and disk.",
              "Bảng giá công khai, minh bạch với vCPU, RAM và ổ đĩa theo từng gói."
            ),
          },
        ],
      },
      {
        id: "reliability-security",
        title: ls("Reliability & Security", "Độ tin cậy & Bảo mật"),
        body: ls(
          "Reliability and safety are built into day-to-day operations:\n- Automated backups archive each instance's data to object storage on a daily schedule, keeping a rolling set of recent restore points.\n- Safe upgrades take a pre-upgrade backup, apply the new version, and automatically roll back if the instance fails to come up healthy — with an email alert to the operator and owner.\n- Tenant isolation keeps every instance in its own container with strict resource limits.\n- Defense in depth: server-side role checks on every mutation, database row-level security so users only ever see their own resources, and encrypted secrets at rest.",
          "Độ tin cậy và an toàn được tích hợp vào vận hành hằng ngày:\n- Sao lưu tự động lưu dữ liệu mỗi instance lên object storage theo lịch hằng ngày, giữ một tập các điểm khôi phục gần nhất.\n- Nâng cấp an toàn sẽ sao lưu trước khi nâng cấp, áp phiên bản mới, và tự động khôi phục nếu instance không khởi động khỏe mạnh — kèm email cảnh báo cho người vận hành và chủ sở hữu.\n- Cô lập người dùng giữ mỗi instance trong container riêng với giới hạn tài nguyên chặt chẽ.\n- Phòng thủ nhiều lớp: kiểm tra vai trò phía máy chủ ở mọi thao tác thay đổi, bảo mật theo hàng (row-level security) để người dùng chỉ thấy tài nguyên của mình, và mã hóa bí mật khi lưu trữ."
        ),
      },
      {
        id: "storefront",
        title: ls("Bilingual Storefront", "Website bán hàng song ngữ"),
        body: ls(
          "The public website is a fast single-page app in English and Vietnamese. It presents the hosting catalog, transparent pricing, IoT consulting services, and real case studies, with a clear path from browsing a plan to getting started.\n\nLive: [lucaiot.com](https://lucaiot.com). The customer control panel lives at app.lucaiot.com (login-gated).",
          "Website công khai là một ứng dụng single-page nhanh, hỗ trợ tiếng Anh và tiếng Việt. Nó trình bày danh mục hosting, bảng giá minh bạch, dịch vụ tư vấn IoT và các case study thực tế, với lộ trình rõ ràng từ xem gói đến bắt đầu sử dụng.\n\nXem tại: [lucaiot.com](https://lucaiot.com). Bảng điều khiển dành cho khách hàng nằm tại app.lucaiot.com (yêu cầu đăng nhập)."
        ),
        image: "luca-iot-cloud/home-hero.jpg",
        imageAlt: ls(
          "Luca IoT Cloud marketing homepage hero",
          "Trang chủ giới thiệu của Luca IoT Cloud"
        ),
        imageCaption: ls(
          "The lucaiot.com storefront — bilingual, with managed hosting front and center.",
          "Website lucaiot.com — song ngữ, đặt dịch vụ hosting được quản lý làm trọng tâm."
        ),
      },
    ],
    techHighlights: [
      {
        feature: ls("Instance provisioning", "Khởi tạo instance"),
        technical: ls(
          "Per-instance Docker Compose stacks rendered on demand with plan-based limits",
          "Sinh stack Docker Compose cho mỗi instance theo yêu cầu với giới hạn theo gói"
        ),
        benefit: ls(
          "New isolated instances are live in minutes, fully self-service",
          "Instance độc lập mới sẵn sàng sau vài phút, hoàn toàn tự phục vụ"
        ),
      },
      {
        feature: ls("Backups & upgrades", "Sao lưu & nâng cấp"),
        technical: ls(
          "Scheduled backups to object storage; upgrades with pre-backup and automatic rollback",
          "Sao lưu định kỳ lên object storage; nâng cấp có sao lưu trước và tự động khôi phục"
        ),
        benefit: ls(
          "Customer data is protected and version changes are low-risk",
          "Dữ liệu khách được bảo vệ và việc đổi phiên bản ít rủi ro"
        ),
      },
      {
        feature: ls("Isolation & access control", "Cô lập & kiểm soát truy cập"),
        technical: ls(
          "Per-tenant containers, database row-level security, server-side role checks",
          "Container theo người dùng, bảo mật theo hàng, kiểm tra vai trò phía máy chủ"
        ),
        benefit: ls(
          "Users only ever reach their own resources, even under attack",
          "Người dùng chỉ truy cập được tài nguyên của mình, kể cả khi bị tấn công"
        ),
      },
      {
        feature: ls("Networking", "Mạng"),
        technical: ls(
          "Outbound-only Cloudflare Tunnel + private control-plane-to-agent link",
          "Cloudflare Tunnel chỉ-đi-ra + kết nối control plane tới agent qua mạng riêng"
        ),
        benefit: ls(
          "No inbound ports on hosts; smaller attack surface",
          "Không mở cổng vào trên máy chủ; giảm bề mặt tấn công"
        ),
      },
      {
        feature: ls("Bilingual storefront", "Website song ngữ"),
        technical: ls(
          "React SPA with EN/VI content and locale-prefixed routes",
          "React SPA với nội dung Anh/Việt và route theo locale"
        ),
        benefit: ls(
          "Reaches both local and international customers with transparent pricing",
          "Tiếp cận cả khách trong nước và quốc tế với bảng giá minh bạch"
        ),
      },
    ],
    ctaTitle: ls(
      "Need a managed-hosting or IoT platform like this?",
      "Cần một nền tảng hosting hoặc IoT tương tự?"
    ),
    ctaDescription: ls(
      "I design and build multi-tenant SaaS platforms — provisioning, backups, billing-ready dashboards, and secure infrastructure. Let's talk about your product.",
      "Tôi thiết kế và xây dựng các nền tảng SaaS đa người dùng — khởi tạo, sao lưu, dashboard sẵn sàng cho thanh toán và hạ tầng bảo mật. Hãy trao đổi về sản phẩm của bạn."
    ),
  },
  {
    id: "rooftop-solar-monitoring-system",
    slug: "rooftop-solar-monitoring-system",
    title: ls(
      "IoT System for a 1.2 MW Rooftop Solar Plant",
      "Hệ thống IoT cho hệ solar 1.2MW"
    ),
    excerpt: ls(
      "An edge-deployed monitoring platform that centralizes solar production, grid import/export, load consumption, and electrical parameters for an industrial rooftop solar plant.",
      "Nền tảng giám sát triển khai tại biên, tập trung dữ liệu sản lượng điện mặt trời, điện lưới nhập/xuất, tải tiêu thụ và các thông số điện quan trọng."
    ),
    industry: ls(
      "Solar Monitoring / Industrial IoT / Energy Management",
      "Giám sát điện mặt trời / IoT công nghiệp / Quản lý năng lượng"
    ),
    location: ls("Vietnam", "Việt Nam"),
    publishedAt: "2026-05-02",
    tech: ["Node-RED", "InfluxDB", "Grafana", "Raspberry Pi 5", "Modbus RTU/TCP", "Docker"],
    featured: true,
    cover: "rooftop-solar-monitoring/home.jpg",
    resultsTitle: ls("Value Delivered to the Client", "Giá trị mang lại cho khách hàng"),
    results: [
      ls(
        "Real-time visibility of solar generation, grid supply, and load consumption from one centralized interface.",
        "Theo dõi thời gian thực sản lượng điện mặt trời, nguồn điện lưới và tải tiêu thụ trên một giao diện tập trung."
      ),
      ls(
        "Historical time-series data storage for analysis, troubleshooting, comparison, and reporting.",
        "Lưu trữ dữ liệu time-series lịch sử để phân tích, xử lý sự cố, so sánh và lập báo cáo."
      ),
      ls(
        "Clear and scalable data mapping structure that can support additional meters, sensors, dashboards, integrations, or project sites.",
        "Cấu trúc mapping dữ liệu rõ ràng, có thể mở rộng cho thêm đồng hồ, cảm biến, dashboard, tích hợp hoặc site dự án mới."
      ),
      ls(
        "Edge deployment using Raspberry Pi 5 and Docker Compose, improving maintainability and reducing dependence on remote infrastructure.",
        "Triển khai edge bằng Raspberry Pi 5 và Docker Compose, giúp hệ thống dễ bảo trì hơn và giảm phụ thuộc vào hạ tầng từ xa."
      ),
    ],
    sections: [
      {
        id: "intro",
        title: ls("Project Overview", "Tổng quan dự án"),
        body: ls(
          "This project involved designing and deploying an IoT monitoring system for a 1.2 MW solar power system at an industrial plant in Vietnam.",
          "Dự án thiết kế và triển khai hệ thống IoT giám sát hệ thống điện mặt trời có công suất 1.2 MW cho một nhà máy công nghiệp tại Việt Nam."
        ),
        image: "rooftop-solar-monitoring/home.jpg",
        imageAlt: ls(
          "Main Grafana overview dashboard for rooftop solar monitoring system",
          "Dashboard tổng quan Grafana cho hệ thống giám sát điện mặt trời mái nhà"
        ),
        imageCaption: ls(
          "Main overview dashboard showing solar yield, grid supply, load consumption, and system trend.",
          "Dashboard tổng quan hiển thị sản lượng điện mặt trời, nguồn điện lưới, tải tiêu thụ và xu hướng hệ thống."
        ),
      },
      {
        id: "key-challenge",
        title: ls("Key Challenge", "Thách thức chính"),
        body: ls(
          "- Multi-source data collection: The system had to collect data from energy meters, sensors, and solar-related electrical equipment.\n- Modbus communication: Devices communicated through Modbus RTU and Modbus TCP, so the data needed to be read and handled correctly.\n- Data processing and mapping: Raw data had to be parsed, normalized, mapped, and stored in a clean structure before being displayed.\n- Long-term data usability: The system needed to support both real-time monitoring and historical analysis, troubleshooting, comparison, and reporting.\n- User-friendly dashboard: Operators needed to move easily from a high-level system overview to detailed meter-level information without confusion.",
          "- Thu thập dữ liệu từ nhiều nguồn: Hệ thống cần thu thập dữ liệu từ đồng hồ năng lượng, cảm biến và các thiết bị điện liên quan đến hệ thống điện mặt trời.\n- Giao tiếp Modbus: Các thiết bị giao tiếp qua Modbus RTU và Modbus TCP, nên dữ liệu cần được đọc và xử lý chính xác.\n- Xử lý và mapping dữ liệu: Dữ liệu thô cần được parse, chuẩn hóa, mapping và lưu trữ trong một cấu trúc sạch trước khi hiển thị.\n- Khả năng sử dụng dữ liệu dài hạn: Hệ thống cần hỗ trợ cả giám sát thời gian thực và phân tích lịch sử, xử lý sự cố, so sánh và báo cáo.\n- Dashboard dễ sử dụng: Đội vận hành cần di chuyển dễ dàng từ màn hình tổng quan hệ thống đến thông tin chi tiết từng đồng hồ mà không bị rối."
        ),
      },
      {
        id: "solution-overview",
        title: ls("Solution Implemented", "Giải pháp đã triển khai"),
        flowLabel: ls(
          "Meter / Sensor -> Node-RED -> InfluxDB -> Grafana",
          "Đồng hồ / Cảm biến -> Node-RED -> InfluxDB -> Grafana"
        ),
        body: ls(
          "Meter / Sensor (Modbus RTU/TCP)\n- Electrical meters and sensors collect real-time values from the solar plant, including active power, reactive power, apparent power, energy, voltage, current, frequency, and power factor.\n- Data is collected through Modbus RTU and Modbus TCP depending on the device and communication interface.\n\nNode-RED\n- Node-RED runs on Raspberry Pi 5 and works as the data processing layer.\n- It connects to the meters through Modbus RTU/TCP, reads the raw data, processes the values, maps them into a consistent structure, and sends the cleaned data into the database.\n\nInfluxDB\n- InfluxDB is used as the time-series database.\n- It stores data together with accurate timestamps, making it suitable for real-time monitoring, historical trends, and reporting.\n- The database structure is designed to make data mapping clear, scalable, and easy to extend when new devices or measurements are added.\n\nGrafana (User Interface)\n- Grafana is used to build the user interface.\n- The dashboard allows users to monitor the solar system from overview to detail, including solar generation, grid power, load consumption, phase values, voltage, current, frequency, and power factor.\n- Users can also export system data from Grafana for reporting and deeper analysis.",
          "Đồng hồ / Cảm biến (Modbus RTU/TCP)\n- Đồng hồ điện và cảm biến thu thập các giá trị thời gian thực từ hệ thống điện mặt trời, bao gồm công suất tác dụng, công suất phản kháng, công suất biểu kiến, điện năng, điện áp, dòng điện, tần số và hệ số công suất.\n- Dữ liệu được thu thập qua Modbus RTU hoặc Modbus TCP tùy theo thiết bị và giao diện truyền thông.\n\nNode-RED\n- Node-RED chạy trên Raspberry Pi 5 và đóng vai trò là tầng xử lý dữ liệu.\n- Node-RED kết nối đến các đồng hồ qua Modbus RTU/TCP, đọc dữ liệu thô, xử lý giá trị, mapping về cấu trúc thống nhất và gửi dữ liệu đã chuẩn hóa vào database.\n\nInfluxDB\n- InfluxDB được dùng làm cơ sở dữ liệu time-series.\n- Dữ liệu được lưu cùng timestamp chính xác, phù hợp cho giám sát thời gian thực, xem xu hướng lịch sử và lập báo cáo.\n- Cấu trúc database được thiết kế rõ ràng, có khả năng mở rộng khi cần thêm thiết bị hoặc thông số đo mới.\n\nGrafana (Giao diện người dùng)\n- Grafana được dùng để xây dựng giao diện người dùng.\n- Dashboard cho phép theo dõi hệ thống điện mặt trời từ tổng quan đến chi tiết, bao gồm sản lượng điện mặt trời, công suất lưới, tải tiêu thụ, giá trị từng pha, điện áp, dòng điện, tần số và hệ số công suất.\n- Người dùng cũng có thể xuất dữ liệu từ Grafana để phục vụ báo cáo và phân tích chuyên sâu."
        ),
        cards: [
          {
            title: ls("Meter / Sensor", "Đồng hồ / Cảm biến"),
            body: ls(
              "Collects Modbus RTU/TCP electrical and environmental data from the solar plant.",
              "Thu thập dữ liệu điện và môi trường từ hệ thống điện mặt trời qua Modbus RTU/TCP."
            ),
          },
          {
            title: ls("Node-RED", "Node-RED"),
            body: ls(
              "Polls devices, processes raw values, normalizes payloads, and routes clean data.",
              "Đọc dữ liệu thiết bị, xử lý giá trị thô, chuẩn hóa payload và điều hướng dữ liệu sạch."
            ),
          },
          {
            title: ls("InfluxDB", "InfluxDB"),
            body: ls(
              "Stores timestamped time-series data for real-time trends, history, and reporting.",
              "Lưu dữ liệu time-series kèm timestamp cho xu hướng thời gian thực, lịch sử và báo cáo."
            ),
          },
          {
            title: ls("Grafana", "Grafana"),
            body: ls(
              "Provides dashboards from system overview to detailed meter-level analysis.",
              "Cung cấp dashboard từ tổng quan hệ thống đến phân tích chi tiết từng đồng hồ."
            ),
          },
        ],
      },
      {
        id: "data-processing-nodered",
        title: ls("Data Processing Layer - Node-RED", "Tầng xử lý dữ liệu - Node-RED"),
        body: ls(
          "- Runs on Raspberry Pi 5 and acts as the central processing layer of the monitoring system.\n- Connects to the electrical meters through Modbus RTU and Modbus TCP. After reading the data, Node-RED processes the raw values, applies the required mapping, normalizes the payload structure, and sends the final data into the database for storage.",
          "- Được chạy trên Raspberry Pi 5 và đóng vai trò là tầng xử lý trung tâm của hệ thống giám sát.\n- Kết nối đến các đồng hồ điện qua Modbus RTU và Modbus TCP. Sau khi đọc dữ liệu, Node-RED xử lý giá trị thô, áp dụng mapping cần thiết, chuẩn hóa cấu trúc payload và gửi dữ liệu cuối cùng vào database để lưu trữ."
        ),
        image: "rooftop-solar-monitoring/node-red-flow.jpg",
        imageAlt: ls(
          "Node-RED flow for collecting and processing solar monitoring data",
          "Flow Node-RED dùng để thu thập và xử lý dữ liệu giám sát điện mặt trời"
        ),
        imageCaption: ls(
          "Node-RED flow used for polling, processing, mapping, and routing data before storage.",
          "Flow Node-RED dùng để polling, xử lý, mapping và điều hướng dữ liệu trước khi lưu trữ."
        ),
      },
      {
        id: "storage-influxdb",
        title: ls("Storage Layer - InfluxDB", "Tầng lưu trữ - InfluxDB"),
        body: ls(
          "InfluxDB is used as the database because it is designed for time-series data.\n\nEach record is stored with a timestamp, which makes data retrieval accurate and clear when building historical charts, reports, and performance analysis views.\n\nThe database structure is designed with clear mapping between devices, measurements, and electrical parameters. This makes the system easier to maintain and expand when new meters, sensors, or dashboard requirements are added in the future.",
          "InfluxDB được sử dụng làm database vì nền tảng này được thiết kế cho dữ liệu time-series.\n\nMỗi bản ghi được lưu cùng timestamp, giúp việc truy xuất dữ liệu chính xác và rõ ràng khi xây dựng biểu đồ lịch sử, báo cáo và các màn hình phân tích hiệu suất.\n\nCấu trúc database được thiết kế với mapping rõ ràng giữa thiết bị, measurement và các thông số điện. Điều này giúp hệ thống dễ bảo trì và mở rộng khi cần thêm đồng hồ, cảm biến hoặc yêu cầu dashboard mới trong tương lai."
        ),
      },
      {
        id: "user-interface-grafana",
        title: ls("User Interface - Grafana", "Giao diện người dùng - Grafana"),
        body: ls(
          "Grafana is used as the visualization and user interface layer.\n\nThe dashboards are designed to help users monitor the operation and performance of the solar system from overview to detail. The main dashboard provides a quick summary of solar yield, grid supply, and load consumption, while the detailed dashboards show meter-level electrical values such as phase power, voltage, current, frequency, and power factor.\n\nGrafana also allows users to export system data for reports. This helps make analysis more accurate, faster, and easier for operation and maintenance work.",
          "Grafana được sử dụng làm tầng trực quan hóa và giao diện người dùng.\n\nCác dashboard được thiết kế để giúp người dùng theo dõi vận hành và hiệu suất của hệ thống điện mặt trời từ tổng quan đến chi tiết. Dashboard chính cung cấp tóm tắt nhanh về sản lượng điện mặt trời, nguồn điện lưới và tải tiêu thụ, trong khi các dashboard chi tiết hiển thị giá trị điện ở cấp đồng hồ như công suất từng pha, điện áp, dòng điện, tần số và hệ số công suất.\n\nGrafana cũng cho phép người dùng xuất dữ liệu hệ thống để lập báo cáo. Điều này giúp việc phân tích chính xác hơn, nhanh hơn và thuận tiện hơn cho công tác vận hành và bảo trì."
        ),
        gallery: [
          {
            src: "rooftop-solar-monitoring/solar-energy-meter.jpg",
            alt: ls("Solar energy meter Grafana dashboard", "Dashboard Grafana của đồng hồ điện mặt trời"),
            caption: ls(
              "Solar energy meter dashboard showing PV power, phase data, voltage, current, frequency, and power factor.",
              "Dashboard đồng hồ điện mặt trời hiển thị công suất PV, dữ liệu pha, điện áp, dòng điện, tần số và hệ số công suất."
            ),
          },
          {
            src: "rooftop-solar-monitoring/grid-energy-meter.jpg",
            alt: ls("Grid energy meter Grafana dashboard", "Dashboard Grafana của đồng hồ điện lưới"),
            caption: ls(
              "Grid Energy Meter dashboard showing import/export energy, active power, phase power, and grid quality values.",
              "Dashboard Grid Energy Meter hiển thị điện năng nhập/xuất, công suất tác dụng, công suất từng pha và các thông số chất lượng điện lưới."
            ),
          },
        ],
      },
      {
        id: "credit",
        title: ls("Credit", "Ghi nhận"),
        body: ls(
          "This project was completed together with [Mr. Hao Ho Huy](https://www.linkedin.com/in/haohohuy/).",
          "Dự án này được hoàn thành cùng với [Mr. Hao Ho Huy](https://www.linkedin.com/in/haohohuy/)."
        ),
      },
    ],
    techHighlights: [
      {
        feature: ls("Modbus Integration", "Tích hợp Modbus"),
        technical: ls("Modbus RTU/TCP polling and mapping", "Polling và mapping dữ liệu qua Modbus RTU/TCP"),
        benefit: ls(
          "Reliable data collection across meters, sensors, and solar equipment",
          "Thu thập dữ liệu ổn định từ đồng hồ, cảm biến và thiết bị điện mặt trời"
        ),
      },
      {
        feature: ls("Edge Deployment", "Triển khai Edge"),
        technical: ls("Raspberry Pi 5 with Docker Compose", "Raspberry Pi 5 kết hợp Docker Compose"),
        benefit: ls(
          "Maintainable local infrastructure for daily operation",
          "Hạ tầng cục bộ dễ bảo trì cho vận hành hằng ngày"
        ),
      },
      {
        feature: ls("Time-Series Storage", "Lưu trữ Time-Series"),
        technical: ls("InfluxDB measurement and timestamp structure", "Cấu trúc measurement và timestamp trong InfluxDB"),
        benefit: ls(
          "Historical analysis, trend review, and export-ready reporting",
          "Hỗ trợ phân tích lịch sử, xem xu hướng và xuất báo cáo"
        ),
      },
      {
        feature: ls("Operational Dashboard", "Dashboard vận hành"),
        technical: ls("Grafana overview and meter-level dashboards", "Dashboard Grafana từ tổng quan đến chi tiết từng đồng hồ"),
        benefit: ls(
          "Clear monitoring from system summary to electrical detail",
          "Theo dõi rõ ràng từ tổng quan hệ thống đến chi tiết thông số điện"
        ),
      },
    ],
    ctaTitle: ls(
      "Need a Similar Solar or Energy Monitoring System?",
      "Bạn cần hệ thống giám sát năng lượng hoặc điện mặt trời tương tự?"
    ),
    ctaDescription: ls(
      "I can help design and deploy an end-to-end monitoring system for solar plants, industrial energy systems, and multi-site operation dashboards.",
      "Tôi có thể hỗ trợ thiết kế và triển khai hệ thống giám sát end-to-end cho nhà máy điện mặt trời, hệ thống năng lượng công nghiệp và dashboard vận hành nhiều site."
    ),
  },
  {
    id: "alkes-have-heat-control",
    slug: "alkes-have-heat-control",
    title: ls(
      "HVAC Monitoring & Control System for a Residential Complex in Denmark",
      "Hệ thống giám sát/điều khiển HVAC cho khu dân cư ở Đan Mạch"
    ),
    excerpt: ls(
      "A fail-safe, 3-layer smart heating system for 40 apartments: Shelly edge control keeps running offline, Node-RED orchestrates MQTT data per apartment, and Datacake provides centralized operations with timer-based energy saving.",
      "Hệ thống sưởi thông minh 3 lớp cho 40 căn hộ: Shelly chạy điều khiển cục bộ kể cả khi mất mạng, Node-RED điều phối dữ liệu MQTT theo từng căn, Datacake cung cấp dashboard vận hành tập trung với timer tiết kiệm điện."
    ),
    industry: ls("Smart Building / Heating", "Toà nhà thông minh / Hệ thống sưởi"),
    location: ls("Denmark", "Đan Mạch"),
    publishedAt: "2025-12-20",
    tech: ["Shelly", "Node-RED", "MQTT", "Datacake"],
    featured: true,
    cover: "alkes-have/alkes-have.png",
    results: [
      ls(
        "Peace of mind: the heating system runs 24/7 even during connectivity issues.",
        "Sự an tâm tuyệt đối: Hệ thống sưởi luôn hoạt động 24/7 bất chấp sự cố đường truyền."
      ),
      ls(
        "Real energy savings: timer-based buffer valve scheduling significantly reduces unnecessary electricity usage.",
        "Tiết kiệm năng lượng thực tế: Việc lên lịch cho van bồn đệm giúp cắt giảm đáng kể lượng điện tiêu thụ dư thừa."
      ),
      ls(
        "Smarter operations: technicians can troubleshoot remotely, reducing on-site maintenance cost.",
        "Quản lý thông minh: Kỹ thuật viên có thể xử lý sự cố từ xa, giảm thiểu chi phí bảo trì tại hiện trường."
      ),
    ],
    sections: [
      {
        id: "overview",
        title: ls("Project Overview", "Tổng quan dự án"),
        body: ls(
          "My project with Alkes Have in Denmark is a clear example of applying IoT to solve large-scale heat management. With 40 independent apartments, the core goal was to automate Buffer Tank and DHW control—balancing energy efficiency with maximum comfort.",
          "Dự án của tôi với đối tác Alkes Have tại Đan Mạch là minh chứng điển hình cho việc ứng dụng IoT để giải quyết bài toán quản lý nhiệt lượng quy mô lớn. Với 40 căn hộ độc lập, mục tiêu trọng tâm là tự động hóa điều khiển bồn đệm (Buffer Tank) và nước nóng sinh hoạt (DHW), đảm bảo sự cân bằng hoàn hảo giữa tiết kiệm năng lượng và tiện nghi tối đa."
        ),
        image: "alkes-have/alkes-have.png",
        imageAlt: ls("Alkes Have site overview", "Tổng quan khu Alkes Have"),
        imageCaption: ls("Project site overview (Alkes Have, Denmark)", "Tổng quan dự án (Alkes Have, Đan Mạch)"),
      },
      {
        id: "challenges",
        title: ls("Key Challenges", "Thách thức đặt ra"),
        body: ls(
          "To operate the building efficiently, the system had to overcome three major barriers:\n- Fail-safe operation: remain stable and keep running even when the internet is down.\n- Personalized demand: each apartment has different habits and preferred temperature thresholds.\n- Cost optimization: reduce wasted electricity during low-demand hours or when there is no usage.",
          "Để vận hành hiệu quả một tòa nhà, hệ thống phải vượt qua 3 rào cản lớn:\n- Vận hành không gián đoạn: Hệ thống phải duy trì tính ổn định tuyệt đối ngay cả khi mất kết nối Internet (chế độ Fail-safe).\n- Cá nhân hóa nhu cầu: Mỗi căn hộ là một thực thể riêng biệt với thói quen sinh hoạt và ngưỡng nhiệt độ mong muốn khác nhau.\n- Bài toán chi phí: Tối ưu hóa việc sử dụng điện năng, tránh lãng phí vào các khung giờ thấp điểm hoặc khi không có nhu cầu sử dụng."
        ),
      },
      {
        id: "solution-overview",
        title: ls("Solution Overview", "Giải pháp đề ra"),
        flowLabel: ls(
          "Shelly (Edge) -> Node-RED (Orchestration) -> Datacake (Operations)",
          "Shelly (Tầng biên) -> Node-RED (Điều phối) -> Datacake (Vận hành)"
        ),
        body: ls(
          'Solution: a "Smart & Resilient" 3-layer architecture\n- Edge Computing: Shelly runs on-site logic so the system still operates when the internet is down.\n- Orchestration: Node-RED maps data per apartment and uses MQTT Retain to restore configuration after reconnect.\n- Operations: Datacake provides a centralized dashboard with manual override and timer scheduling for energy optimization.',
          'Giải pháp: Kiến trúc 3 lớp "Thông minh & Bền bỉ"\n- Tầng biên (Edge Computing): Shelly vận hành logic tại chỗ để hệ thống vẫn hoạt động khi mất Internet.\n- Tầng điều phối: Node-RED định danh dữ liệu theo từng căn hộ và đẩy cấu hình bằng MQTT Retain để tự phục hồi sau khi reconnect.\n- Tầng vận hành: Datacake cung cấp dashboard tập trung, điều khiển manual/override và lập lịch (timer) cho tối ưu năng lượng.'
        ),
        cards: [
          {
            title: ls("Shelly (Edge)", "Shelly (Tầng biên)"),
            body: ls(
              "Local control scripts switch valves by real temperature — no cloud dependency.",
              "Script điều khiển cục bộ đóng/ngắt van theo nhiệt độ thực tế — không phụ thuộc cloud."
            ),
          },
          {
            title: ls("Node-RED", "Node-RED"),
            body: ls(
              "Maps MQTT data per apartment and restores configuration via MQTT Retain.",
              "Mapping dữ liệu MQTT theo từng căn hộ và khôi phục cấu hình qua MQTT Retain."
            ),
          },
          {
            title: ls("Datacake", "Datacake"),
            body: ls(
              "Centralized dashboard with manual override and timer-based energy saving.",
              "Dashboard tập trung với override thủ công và timer tiết kiệm năng lượng."
            ),
          },
        ],
      },
      {
        id: "edge-shelly",
        title: ls("Layer 1 — Edge Computing (Shelly)", "Lớp 1 — Edge Computing (Shelly)"),
        body: ls(
          'Edge Computing: On-site intelligence with Shelly\nActing as the on-site "nervous system", Shelly Plus 2PM combined with temperature add-ons enables:\n- Autonomous operation: control scripts run directly on the device to switch valves based on real temperature—without waiting for cloud commands.\n- Instant response: removes latency and reduces risk during network outages.',
          'Tầng biên (Edge Computing): Trí tuệ tại chỗ với Shelly\nĐóng vai trò là "hệ thần kinh" trực tiếp tại hiện trường, thiết bị Shelly Plus 2PM kết hợp cùng cảm biến nhiệt Add-on cho phép:\n- Tự chủ vận hành: Các script điều khiển chạy trực tiếp trên thiết bị giúp đóng/ngắt van dựa theo nhiệt độ thực tế mà không cần chờ lệnh từ Cloud.\n- Phản ứng tức thì: Loại bỏ độ trễ và rủi ro khi mất mạng.'
        ),
        image: "alkes-have/shelly-1.png",
        imageAlt: ls("Shelly device used in the project", "Thiết bị Shelly sử dụng trong dự án"),
      },
      {
        id: "edge-shelly-ui",
        title: ls("Local Control & Status on Device", "Điều khiển & trạng thái tại thiết bị"),
        body: ls(
          "Local state and manual actions are available on the device level, supporting fast troubleshooting and safe overrides when needed.",
          "Trạng thái và thao tác thủ công luôn sẵn có tại thiết bị, giúp xử lý nhanh khi cần và hỗ trợ override an toàn."
        ),
        image: "alkes-have/shelly-2.png",
        imageAlt: ls("Shelly local device status interface", "Giao diện trạng thái thiết bị Shelly"),
      },
      {
        id: "orchestration-nodered",
        title: ls("Layer 2 — Orchestration (Node-RED)", "Lớp 2 — Điều phối (Node-RED)"),
        body: ls(
          'Orchestration: Smart data management with Node-RED\nNode-RED acts as the "conductor" for system data flows:\n- Accurate identification: automatically maps each apartment\'s MQTT data to the correct management ID—preventing data mix-ups.\n- Self-recovery: uses MQTT Retain so devices immediately receive the latest configuration after reconnect.',
          'Tầng điều phối: Quản lý dữ liệu thông minh qua Node-RED\nNode-RED đóng vai trò là "nhạc trưởng" điều phối các luồng thông tin:\n- Định danh chính xác: Tự động ánh xạ dữ liệu MQTT của từng căn hộ về đúng ID quản lý, loại bỏ sai sót dữ liệu.\n- Khả năng tự phục hồi: Sử dụng cơ chế MQTT Retain để đảm bảo thiết bị nhận lại ngay cấu hình gần nhất khi kết nối lại.'
        ),
        image: "alkes-have/node-red.png",
        imageAlt: ls("Node-RED flows used for orchestration and mapping", "Luồng Node-RED dùng để điều phối và mapping"),
      },
      {
        id: "platform-datacake",
        title: ls("Layer 3 — Operations Dashboard (Datacake)", "Lớp 3 — Trung tâm vận hành (Datacake)"),
        body: ls(
          "Operations: Centralized dashboard on Datacake\nThe status of all 40 apartments is brought into a single operations screen:\n- Multi-level monitoring: from a building-wide view down to per-apartment temperatures and valve states.\n- Flexible control: technicians can manually override or schedule timers with a few clicks.",
          'Tầng vận hành: Dashboard tập trung trên Datacake\nToàn bộ trạng thái của 40 căn hộ được "gói gọn" trong một màn hình điều khiển:\n- Giám sát đa tầng: Từ cái nhìn tổng thể toàn tòa nhà đến chi tiết từng thông số nhiệt độ, trạng thái van của từng hộ dân.\n- Tương tác linh hoạt: Kỹ thuật viên có thể can thiệp thủ công (Override) hoặc thiết lập lịch trình (Timer) chỉ với vài thao tác.'
        ),
        image: "alkes-have/datacake-1.png",
        imageAlt: ls("Global operations dashboard overview", "Dashboard giám sát tổng quan toàn hệ thống"),
        imageCaption: ls("Main monitoring dashboard for all 40 apartments", "Giao diện chính giám sát toàn bộ 40 căn hộ"),
      },
      {
        id: "datacake-manual-timer",
        title: ls("Manual Control & Timer Scheduling", "Điều khiển manual & cài đặt timer"),
        body: ls(
          "Operator tools for energy saving and fast intervention:\n• Manual control/override when needed\n• Timer scheduling for Buffer Valve to reduce unnecessary runtime",
          "Công cụ vận hành để tiết kiệm điện và can thiệp nhanh khi cần:\n• Điều khiển manual/override khi cần\n• Cài đặt timer cho Buffer Valve để giảm vận hành dư thừa"
        ),
        image: "alkes-have/datacake-2.png",
        imageAlt: ls("Datacake manual control and timer settings", "Datacake — điều khiển thủ công và thiết lập timer"),
        imageCaption: ls("Manual control interface and timer scheduling settings", "Giao diện điều khiển manual và setting timer"),
      },
      {
        id: "per-apartment-thresholds",
        title: ls("Per-Apartment Threshold Settings", "Tuỳ chỉnh ngưỡng nhiệt theo từng căn hộ"),
        body: ls(
          "Each apartment can have its own ON/OFF temperature thresholds for Buffer and DHW, allowing tailored comfort and better energy usage without changing the global logic.",
          "Mỗi căn hộ có thể cấu hình riêng các ngưỡng nhiệt bật/tắt (ON/OFF) cho Buffer và DHW, giúp tối ưu tiện nghi và năng lượng mà không cần thay đổi logic tổng."
        ),
        image: "alkes-have/datacake-3.png",
        imageAlt: ls("Per-apartment threshold configuration", "Cấu hình ngưỡng nhiệt theo từng căn hộ"),
        imageCaption: ls("Per-apartment configuration and control interface", "Giao diện cài đặt và điều khiển riêng cho từng căn hộ"),
      },
    ],
    techHighlights: [
      {
        feature: ls("Offline-First", "Offline-First"),
        technical: ls("Local scripting on Shelly devices", "Script cục bộ chạy trực tiếp trên Shelly"),
        benefit: ls(
          "24/7 operation regardless of internet stability",
          "Hệ thống vận hành 24/7 kể cả khi Internet chập chờn"
        ),
      },
      {
        feature: ls("Energy Saving", "Tiết kiệm năng lượng"),
        technical: ls("Timer scheduling for Buffer Valve via dashboard", "Timer scheduling cho Buffer Valve qua dashboard"),
        benefit: ls(
          "Reduce unnecessary runtime during low-demand hours",
          "Giảm vận hành dư thừa trong khung giờ ít nhu cầu"
        ),
      },
      {
        feature: ls("Data Integrity", "Toàn vẹn dữ liệu"),
        technical: ls("MQTT mapping + retained configuration", "MQTT mapping + retain cấu hình"),
        benefit: ls(
          "Correct per-apartment data and quick recovery after reconnect",
          "Dữ liệu đúng theo từng căn và khôi phục nhanh sau khi reconnect"
        ),
      },
      {
        feature: ls("Central Control", "Điều khiển tập trung"),
        technical: ls("Central manual override commands", "Lệnh override tập trung"),
        benefit: ls(
          "Fast intervention for operational safety",
          "Can thiệp nhanh để đảm bảo vận hành an toàn"
        ),
      },
    ],
    ctaTitle: ls(
      "Planning a Smart Heating or Building Control System?",
      "Bạn đang lên kế hoạch cho hệ thống sưởi hoặc điều khiển toà nhà thông minh?"
    ),
    ctaDescription: ls(
      "I can help design a resilient, energy-efficient control architecture for multi-apartment buildings — from edge devices to centralized operations dashboards.",
      "Tôi có thể hỗ trợ thiết kế kiến trúc điều khiển ổn định, tiết kiệm năng lượng cho toà nhà nhiều căn hộ — từ thiết bị biên đến dashboard vận hành tập trung."
    ),
  },
  {
    id: "germany-energy-hvac-insight",
    slug: "energy-monitoring-hvac-insight-germany",
    title: ls(
      "Energy Monitoring for a Smart Building in Germany",
      "Giám sát năng lượng cho tòa nhà thông minh tại Đức"
    ),
    excerpt: ls(
      "A custom end-to-end monitoring solution for heat pump performance, floor-level energy analysis, and historical reporting.",
      "Giải pháp giám sát end-to-end tùy chỉnh cho hiệu suất bơm nhiệt, phân tích năng lượng theo từng tầng và báo cáo lịch sử."
    ),
    industry: ls("Smart Building / HVAC / Energy Monitoring", "Tòa nhà thông minh / HVAC / Giám sát năng lượng"),
    location: ls("Germany", "Đức"),
    publishedAt: "2026-01-17",
    tech: ["Shelly", "Node-RED", "ThingsBoard", "REST API"],
    featured: false,
    cover: "germany-hvac-insight/home-dashboard.jpg",
    resultsTitle: ls("Real-World Results", "Kết quả thực tế"),
    results: [
      ls(
        "Operational reliability: the system runs continuously without interruption.",
        "Độ ổn định vận hành: hệ thống chạy liên tục, không gián đoạn."
      ),
      ls(
        "Decision support: the client can clearly observe building behavior during winter conditions.",
        "Hỗ trợ ra quyết định: khách hàng quan sát rõ hành vi tòa nhà trong điều kiện mùa đông."
      ),
      ls(
        "Professional usability: the dashboard is easy to use and includes export and reporting capability.",
        "Khả năng sử dụng chuyên nghiệp: dashboard dễ dùng và có chức năng xuất dữ liệu, báo cáo."
      ),
    ],
    sections: [
      {
        id: "intro",
        title: ls("Introduction", "Giới thiệu"),
        body: ls(
          "A tailored energy and heat pump monitoring solution designed specifically for a customer in Germany.",
          'Giải pháp giám sát năng lượng, hiệu suất hệ thống sưởi được thiết kế "đo ni đóng giày" cho khách hàng tại Đức.'
        ),
      },
      {
        id: "project-overview",
        title: ls("Project Overview", "Tổng quan dự án"),
        body: ls(
          "- Client-owned 3-floor apartment building in Germany\n- The heating system is installed in the basement\n- The client needed to monitor the correlation between the heating system and ambient temperature",
          "- Căn hộ khách hàng 3 tầng tại Đức\n- Hệ thống sưởi được lắp đặt tại tầng hầm\n- Khách hàng cần theo dõi sự tương quan giữa hệ thống sưởi và nhiệt độ môi trường."
        ),
        image: "germany-hvac-insight/heat-system-top70.jpg",
        imageAlt: ls(
          "Basement mechanical room with installed heating and monitoring infrastructure",
          "Phòng cơ điện tầng hầm với hạ tầng sưởi và giám sát đã lắp đặt"
        ),
        imageCaption: ls("Heating system image in the basement.", "Hình ảnh hệ thống sưởi tại tầng hầm."),
      },
      {
        id: "customer-challenge",
        title: ls("Customer Challenge", "Thách thức của khách hàng"),
        body: ls(
          "Lack of visibility\n- The client could not determine how ambient temperature affected heating system performance.\n- The client could not assess whether the heating system was operating efficiently.\n\nNo easy historical analysis\n- The client needed to export data from the system for analysis, maintenance planning, and operational review.",
          "Thiếu khả năng quan sát\n- Khách hàng không thể xác định nhiệt độ môi trường ảnh hưởng thế nào đến hiệu năng của hệ thống sưởi.\n- Khách hàng không thể đánh giá hệ thống sưởi có đang vận hành hiệu quả hay không.\n\nThiếu phân tích lịch sử thuận tiện\n- Khách hàng cần xuất dữ liệu từ hệ thống để tiến hành phân tích, lập kế hoạch bảo trì và rà soát vận hành."
        ),
      },
      {
        id: "solution-overview",
        title: ls("Solution Overview", "Tổng quan giải pháp"),
        flowLabel: ls("Field Devices -> Middleware -> Cloud", "Thiết bị hiện trường -> Middleware -> Cloud"),
        body: ls(
          "Field Devices\n- Shelly EM monitors power and energy consumption for the whole building, heat pump, floor 1, floor 2, and floor 3.\n- Shelly H&T monitors indoor and outdoor ambient temperature.\n- Shelly Plus + Add-on with tank sensors captures flow/return temperatures for floors 1, 2, 3 and buffer tank temperature.\n\nMiddleware (Node-RED)\n- Handles authentication, API storage and refresh, API calls to retrieve data from field devices, data processing, normalization, and forwarding to cloud.\n\nCloud (ThingsBoard)\n- Receives and stores telemetry.\n- Provides operational dashboards.\n- Supports historical data export for deeper engineering analysis.",
          "Thiết bị hiện trường\n- Shelly EM giám sát công suất và điện năng tiêu thụ của toàn bộ tòa nhà, bơm nhiệt, tầng 1, tầng 2 và tầng 3.\n- Shelly H&T giám sát nhiệt độ môi trường trong nhà và ngoài trời.\n- Shelly Plus + Add-on kết hợp cảm biến bồn ghi nhận nhiệt độ cấp/hồi cho tầng 1, 2, 3 và nhiệt độ bồn đệm.\n\nMiddleware (Node-RED)\n- Xử lý xác thực, lưu trữ và làm mới API, gọi API lấy dữ liệu từ thiết bị hiện trường, xử lý, chuẩn hóa và chuyển tiếp dữ liệu lên cloud.\n\nCloud (ThingsBoard)\n- Tiếp nhận và lưu trữ telemetry.\n- Cung cấp dashboard vận hành.\n- Hỗ trợ xuất dữ liệu lịch sử để phân tích kỹ thuật chuyên sâu."
        ),
        cards: [
          {
            title: ls("Field Devices", "Thiết bị hiện trường"),
            body: ls("Power, energy, and temperature sensing layer", "Lớp thu thập công suất, năng lượng và nhiệt độ"),
          },
          {
            title: ls("Middleware", "Middleware"),
            body: ls(
              "Data retrieval, processing, normalization, and forwarding",
              "Thu thập, xử lý, chuẩn hóa và chuyển tiếp dữ liệu"
            ),
          },
          {
            title: ls("Cloud", "Cloud"),
            body: ls(
              "Storage, dashboarding, and historical export/reporting",
              "Lưu trữ, dashboard và xuất báo cáo lịch sử"
            ),
          },
        ],
      },
      {
        id: "dashboard-insights",
        title: ls("What the Dashboard Helps the Client See", "Dashboard giúp khách hàng quan sát được gì"),
        body: ls(
          "- Outdoor temperature versus flow/return temperature trends\n- Heat pump power consumption versus thermal response\n- Comparison of energy usage by floor\n- Historical review for anomaly detection and inefficient operating windows\n- Export-ready data for deeper engineering analysis",
          "- Xu hướng nhiệt độ ngoài trời so với nhiệt độ cấp/hồi\n- Tương quan giữa công suất bơm nhiệt và phản ứng nhiệt\n- So sánh mức tiêu thụ năng lượng theo từng tầng\n- Rà soát lịch sử để phát hiện bất thường và các khung vận hành kém hiệu quả\n- Dữ liệu có thể xuất để phục vụ phân tích kỹ thuật chuyên sâu"
        ),
        image: "germany-hvac-insight/home-dashboard.jpg",
        imageAlt: ls("Home dashboard for user monitoring and analysis", "Dashboard tổng quan cho người dùng theo dõi và phân tích"),
        imageCaption: ls("Dashboard for user.", "Dashboard cho người dùng."),
      },
      {
        id: "field-device-gallery",
        title: ls("Some real-world images from the client side", "Một số hình ảnh thực tế từ phía khách hàng"),
        body: ls("", ""),
        gallery: [
          {
            src: "germany-hvac-insight/sensor-1.jpg",
            alt: ls(
              "Temperature and monitoring sensor installed in the mechanical room",
              "Cảm biến nhiệt độ và giám sát lắp trong phòng cơ điện"
            ),
            caption: ls("Sensor installation point 1", "Vị trí lắp cảm biến 1"),
          },
          {
            src: "germany-hvac-insight/sensor-2.jpg",
            alt: ls(
              "Additional field sensor integrated with heating infrastructure",
              "Cảm biến hiện trường bổ sung tích hợp với hạ tầng sưởi"
            ),
            caption: ls("Sensor installation point 2", "Vị trí lắp cảm biến 2"),
          },
          {
            src: "germany-hvac-insight/shelly-sensor.jpg",
            alt: ls(
              "Shelly monitoring hardware used for power and thermal telemetry",
              "Thiết bị Shelly dùng để giám sát dữ liệu công suất và nhiệt"
            ),
            caption: ls("Shelly sensor", "Cảm biến Shelly"),
          },
          {
            src: "germany-hvac-insight/panel.jpg",
            alt: ls(
              "Electrical panel and monitoring integration for field devices",
              "Tủ điện và phần tích hợp giám sát cho thiết bị hiện trường"
            ),
            caption: ls("Main electrical panel", "Tủ điện chính"),
          },
        ],
      },
      {
        id: "historical-reporting",
        title: ls("Historical Reporting & Data Export", "Báo cáo lịch sử & xuất dữ liệu"),
        body: ls(
          "The reporting view allows timestamp-based export of power and energy records, supporting deeper trend analysis, maintenance planning, and technical investigation when abnormal behavior is observed.",
          "Màn hình báo cáo cho phép xuất dữ liệu công suất và năng lượng theo mốc thời gian, hỗ trợ phân tích xu hướng sâu hơn, lập kế hoạch bảo trì và điều tra kỹ thuật khi phát hiện hành vi bất thường."
        ),
        image: "germany-hvac-insight/export-data-dashboard.jpg",
        imageAlt: ls(
          "Historical dashboard view with exportable timestamp-based energy data",
          "Giao diện dashboard lịch sử với dữ liệu năng lượng có thể xuất theo mốc thời gian"
        ),
        imageCaption: ls(
          "Historical data query and report export interface",
          "Giao diện truy vấn lịch sử dữ liệu và xuất báo cáo"
        ),
      },
    ],
    techHighlights: [
      {
        feature: ls("Multi-Point Sensing", "Đo đa điểm"),
        technical: ls(
          "Shelly EM, H&T, and Plus + Add-on across building, floors, and heat pump",
          "Shelly EM, H&T và Plus + Add-on cho toà nhà, từng tầng và bơm nhiệt"
        ),
        benefit: ls(
          "Full visibility of power, temperature, and thermal flow per floor",
          "Quan sát đầy đủ công suất, nhiệt độ và dòng nhiệt theo từng tầng"
        ),
      },
      {
        feature: ls("API Middleware", "Middleware API"),
        technical: ls(
          "Node-RED handles auth, API polling, normalization, and forwarding",
          "Node-RED xử lý xác thực, gọi API, chuẩn hoá và chuyển tiếp dữ liệu"
        ),
        benefit: ls(
          "Reliable, automated data pipeline from field devices to cloud",
          "Luồng dữ liệu tự động, ổn định từ thiết bị hiện trường lên cloud"
        ),
      },
      {
        feature: ls("Cloud Platform", "Nền tảng Cloud"),
        technical: ls("ThingsBoard telemetry storage and dashboards", "Lưu trữ telemetry và dashboard trên ThingsBoard"),
        benefit: ls(
          "Operational dashboards with historical analysis in one place",
          "Dashboard vận hành kèm phân tích lịch sử trong một nền tảng"
        ),
      },
      {
        feature: ls("Data Export", "Xuất dữ liệu"),
        technical: ls("Timestamp-based export of power and energy records", "Xuất dữ liệu công suất, năng lượng theo mốc thời gian"),
        benefit: ls(
          "Supports reporting, maintenance planning, and investigation",
          "Phục vụ báo cáo, lập kế hoạch bảo trì và điều tra kỹ thuật"
        ),
      },
    ],
    ctaTitle: ls(
      "Need Similar HVAC or Heat Pump Monitoring for Your Building?",
      "Bạn cần giải pháp tương tự cho HVAC hoặc bơm nhiệt của tòa nhà?"
    ),
    ctaDescription: ls(
      "If you are planning an energy monitoring platform for HVAC, heat pump, or multi-floor buildings, I can design and deploy a practical end-to-end solution for your site.",
      "Nếu bạn đang lên kế hoạch xây dựng nền tảng giám sát năng lượng cho HVAC, bơm nhiệt hoặc tòa nhà nhiều tầng, tôi có thể thiết kế và triển khai giải pháp end-to-end phù hợp với hiện trường của bạn."
    ),
  },
  {
    id: "bosei-school-energy-monitoring",
    slug: "iot-energy-monitoring-idraetshojskolen-bosei-denmark",
    title: ls(
      "IoT System for Bosei College in Denmark",
      "Hệ thống IoT cho trường cao đẳng Bosei ở Đan Mạch"
    ),
    excerpt: ls(
      "An IoT solution monitoring electricity, heat, and water at Idrætshøjskolen Bosei in Denmark — connecting multiple device types and protocols into one centralized platform for clearer consumption visibility and early anomaly detection.",
      "Giải pháp IoT giám sát điện, nhiệt và nước cho Idrætshøjskolen Bosei tại Đan Mạch — kết nối nhiều loại thiết bị và giao thức về một nền tảng tập trung, giúp theo dõi tiêu thụ rõ hơn và phát hiện bất thường sớm."
    ),
    industry: ls("Energy IoT / Education / Operations Management", "IoT năng lượng / Trường học / Quản lý vận hành"),
    location: ls("Denmark", "Đan Mạch"),
    publishedAt: "2026-03-05",
    tech: ["Shelly", "Mivo Gateway", "M-Bus", "HTTP", "Shelly Cloud API"],
    featured: true,
    cover: "bosei-energy-monitoring/home-dashboard.png",
    resultsTitle: ls("Value Delivered to the Client", "Giá trị mang lại cho khách hàng"),
    results: [
      ls(
        "Consolidated all fragmented electricity, heat, and water data into one management interface.",
        "Tập trung tất cả dữ liệu rời rạc từ điện, nhiệt, nước về 1 giao diện quản lý."
      ),
      ls(
        "Enabled fast tracking of consumption trends by system and by area.",
        "Theo dõi nhanh xu hướng tiêu thụ theo từng hệ thống, từng khu vực."
      ),
      ls(
        "Supported report exports for analysis and early anomaly detection.",
        "Hỗ trợ xuất báo cáo cho mục đích phân tích và phát hiện sớm các dấu hiệu bất thường."
      ),
      ls(
        "Provided a data foundation for proactive maintenance planning.",
        "Cung cấp cơ sở dữ liệu để có thể chủ động lập kế hoạch bảo trì."
      ),
    ],
    sections: [
      {
        id: "intro",
        title: ls("Project Overview", "Giới thiệu dự án"),
        body: ls(
          "I implemented an IoT system to monitor electricity, heat, and water for Idrætshøjskolen Bosei in Denmark, bringing data from multiple systems into one unified platform. This helps the school track consumption more clearly, detect anomalies earlier, and support more efficient operations.",
          "Triển khai hệ thống IoT giám sát điện, nhiệt và nước cho trường cao đẳng Idrætshøjskolen Bosei tại Đan Mạch, giúp nhà trường theo dõi tiêu thụ, phát hiện bất thường sớm và hỗ trợ vận hành hiệu quả."
        ),
        image: "bosei-energy-monitoring/home-dashboard.png",
        imageAlt: ls(
          "Overview dashboard for electricity, heat, and water monitoring at Bosei",
          "Dashboard tổng quan giám sát điện, nhiệt và nước tại Bosei"
        ),
        imageCaption: ls(
          "Overview dashboard for electricity, heat, and water monitoring at Bosei",
          "Dashboard tổng quan giám sát điện, nhiệt và nước tại Bosei"
        ),
      },
      {
        id: "challenge-section",
        title: ls("Operational Challenge", "Bài toán vận hành"),
        body: ls(
          "In educational and facility operations environments, data is often scattered across different device types and isolated systems. This makes continuous monitoring, data reconciliation, and reporting time-consuming and error-prone. To solve this, my goal was to centralize data into a single source while preserving enough detail for managers to analyze and make operational decisions based on real data.",
          "Trong môi trường trường học và cơ sở vận hành, dữ liệu nằm rải rác theo từng loại thiết bị và từng hệ thống riêng lẻ. Điều đó làm cho việc theo dõi liên tục, đối chiếu số liệu và lập báo cáo mất rất nhiều thời gian và xảy ra nhiều sai sót. Với các khó khăn đó mục tiêu của tôi khi xây dựng hệ thống này là gom dữ liệu về một đầu mối chung nhưng vẫn giữ đủ độ chi tiết để người quản lý có thể phân tích và đưa ra quyết định vận hành dựa trên dữ liệu thực tế."
        ),
      },
      {
        id: "system-architecture",
        title: ls("Integration Architecture", "Kiến trúc tích hợp"),
        flowLabel: ls(
          "Shelly + M-Bus Meters -> Mivo Gateway -> HTTP -> Monitoring Platform",
          "Shelly + Đồng hồ M-Bus -> Mivo Gateway -> HTTP -> Nền tảng giám sát"
        ),
        body: ls(
          "Based on these requirements, I built a system architecture that connects multiple data sources into one monitoring platform. Shelly devices are used for electricity monitoring, while existing heat and water meters are read by a gateway via M-Bus. After normalization, data is sent to the monitoring platform for storage, dashboard visualization, and operational reporting.",
          "Từ các yêu cầu trên tôi xây dựng kiến trúc hệ thống theo hướng kết nối nhiều nguồn dữ liệu về cùng một nền tảng giám sát. Thiết bị Shelly được dùng cho phần điện năng, trong khi các đồng hồ nhiệt và công tơ nước hiện có được đọc bởi gateway bằng giao thức M-Bus. Sau khi chuẩn hóa, dữ liệu được gửi lên nền tảng giám sát để lưu trữ, hiển thị dashboard và phục vụ báo cáo vận hành."
        ),
        cards: [
          {
            title: ls("Field Meters", "Đồng hồ hiện trường"),
            body: ls(
              "Shelly devices for electricity; existing heat and water meters via M-Bus.",
              "Thiết bị Shelly cho điện năng; đồng hồ nhiệt và nước hiện có qua M-Bus."
            ),
          },
          {
            title: ls("Mivo Gateway", "Mivo Gateway"),
            body: ls(
              "Reads M-Bus meters and forwards normalized data over HTTP.",
              "Đọc đồng hồ M-Bus và chuyển tiếp dữ liệu chuẩn hoá qua HTTP."
            ),
          },
          {
            title: ls("Monitoring Platform", "Nền tảng giám sát"),
            body: ls(
              "Stores data, provides dashboards, and supports operational reporting.",
              "Lưu trữ dữ liệu, cung cấp dashboard và hỗ trợ báo cáo vận hành."
            ),
          },
        ],
      },
      {
        id: "electricity-overview",
        title: ls("Electricity Consumption Monitoring", "Giám sát điện năng"),
        body: ls(
          "For the electricity layer, I designed the dashboard to start with an overview and then drill down by area when needed. Key information includes electricity usage, consumption distribution, time-series trends, and time-based electricity pricing. This layout helps operators see both current values and trend behavior over time.",
          "Ở phần điện năng, tôi tổ chức dashboard theo hướng xem tổng quan trước rồi đi sâu vào từng khu vực khi cần. Các thông tin chính bao gồm mức tiêu thụ điện, phân bổ tiêu thụ, biểu đồ theo thời gian và giá điện theo giờ. Cách hiển thị này giúp đội vận hành không chỉ nhìn thấy số liệu hiện tại mà còn đọc được xu hướng biến động theo thời gian."
        ),
        image: "bosei-energy-monitoring/electric-1.png",
        imageAlt: ls("Electric meter interface - Overview", "Giao diện đồng hồ điện - Tổng quan"),
        imageCaption: ls("Electric meter interface - Overview", "Giao diện đồng hồ điện - Tổng quan"),
      },
      {
        id: "electricity-detail",
        title: ls("Electricity Monitoring by Area", "Giám sát tiêu thụ điện từng khu vực"),
        body: ls(
          "After the overview layer, I configured detailed dashboards per meter so area-level consumption checks are faster and clearer. This approach is especially useful for isolating points with unusual consumption increases.",
          "Sau lớp tổng quan, tôi cấu hình dashboard chi tiết cho từng đồng hồ để việc kiểm tra tiêu thụ theo khu vực trở nên nhanh và rõ hơn. Cách tiếp cận này đặc biệt hữu ích khi cần khoanh vùng một điểm đo có mức tiêu thụ tăng bất thường."
        ),
        image: "bosei-energy-monitoring/electric-2.png",
        imageAlt: ls("Electric meter interface - By area", "Giao diện đồng hồ điện - Từng khu vực"),
        imageCaption: ls("Electric meter interface - By area", "Giao diện đồng hồ điện - Từng khu vực"),
      },
      {
        id: "shelly-device-layer",
        title: ls("Electrical Device Management via Shelly Cloud", "Quản lý thiết bị điện qua Shelly Cloud"),
        body: ls(
          "I integrate data from Shelly devices into the monitoring platform through the Shelly Cloud API to manage and monitor the electricity device layer.",
          "Tôi tích hợp dữ liệu từ các thiết bị Shelly vào nền tảng giám sát thông qua API từ Shelly Cloud để quản lý và theo dõi lớp thiết bị điện năng."
        ),
        image: "bosei-energy-monitoring/shelly-cloud.png",
        imageAlt: ls("Shelly Cloud interface", "Giao diện Shelly Cloud"),
        imageCaption: ls("Shelly Cloud interface", "Giao diện Shelly Cloud"),
      },
      {
        id: "heating-monitoring",
        title: ls("Heat Consumption Monitoring", "Giám sát tiêu thụ nhiệt"),
        body: ls(
          "For the heating layer, I connect heat meters through a gateway via M-Bus and send data to the monitoring system over HTTP. The heating dashboard focuses on key metrics such as time-based consumption, supply and return temperatures, and flow rate. This gives the school a clearer basis to monitor and evaluate heating system performance.",
          "Với phần nhiệt, tôi kết nối các công tơ nhiệt qua Gateway thông qua giao thức M-Bus và đưa dữ liệu lên hệ thống giám sát bằng giao thức HTTP. Dashboard nhiệt tập trung vào các thông tin quan trọng như mức tiêu thụ theo thời gian, nhiệt độ cấp và hồi, cùng lưu lượng vận hành. Nhờ đó, nhà trường có thêm cơ sở để theo dõi, đánh giá hiệu suất hệ thống nhiệt rõ ràng hơn."
        ),
        image: "bosei-energy-monitoring/heat-meter.png",
        imageAlt: ls("Heat meter interface - By area", "Giao diện đồng hồ nhiệt - Từng khu vực"),
        imageCaption: ls("Heat meter interface - By area", "Giao diện đồng hồ nhiệt - Từng khu vực"),
      },
      {
        id: "water-monitoring",
        title: ls("Water Consumption Monitoring", "Giám sát tiêu thụ nước"),
        body: ls(
          "I connect water meters through the same gateway architecture so water data is standardized and centrally visualized alongside electricity and heating data. The water dashboard allows monitoring by time and by month, making trend review more intuitive.",
          "Triển khai kết nối các công tơ nước trên cùng kiến trúc gateway để dữ liệu nước được chuẩn hóa và hiển thị tập trung giống phần điện và nhiệt. Dashboard nước cho phép theo dõi mức tiêu thụ theo thời gian và theo tháng, giúp việc rà soát biến động trở nên trực quan hơn."
        ),
        image: "bosei-energy-monitoring/water-meter.png",
        imageAlt: ls("Water meter interface - By area", "Giao diện đồng hồ nước - Từng khu vực"),
        imageCaption: ls("Water meter interface - By area", "Giao diện đồng hồ nước - Từng khu vực"),
      },
    ],
    techHighlights: [
      {
        feature: ls("Multi-Protocol Integration", "Tích hợp đa giao thức"),
        technical: ls(
          "Shelly Cloud API for electricity; M-Bus via Mivo Gateway for heat and water",
          "Shelly Cloud API cho điện; M-Bus qua Mivo Gateway cho nhiệt và nước"
        ),
        benefit: ls(
          "One platform for data that previously lived in isolated systems",
          "Một nền tảng duy nhất cho dữ liệu vốn nằm rải rác ở nhiều hệ thống"
        ),
      },
      {
        feature: ls("Layered Dashboards", "Dashboard phân lớp"),
        technical: ls("Overview-first design with per-meter drill-down", "Thiết kế tổng quan trước, đi sâu theo từng đồng hồ"),
        benefit: ls(
          "Faster checks and easy isolation of abnormal consumption",
          "Kiểm tra nhanh và dễ khoanh vùng tiêu thụ bất thường"
        ),
      },
      {
        feature: ls("Reporting", "Báo cáo"),
        technical: ls("Export-ready consumption data by system and by area", "Dữ liệu tiêu thụ có thể xuất theo hệ thống và khu vực"),
        benefit: ls(
          "Supports analysis, evaluation, and early anomaly detection",
          "Hỗ trợ phân tích, đánh giá và phát hiện bất thường sớm"
        ),
      },
      {
        feature: ls("Maintenance Foundation", "Nền tảng bảo trì"),
        technical: ls("Centralized historical data per meter", "Dữ liệu lịch sử tập trung theo từng đồng hồ"),
        benefit: ls(
          "Enables proactive maintenance planning based on real data",
          "Chủ động lập kế hoạch bảo trì dựa trên dữ liệu thực tế"
        ),
      },
    ],
    ctaTitle: ls(
      "Do You Want to Implement a Similar Energy Monitoring Model?",
      "Bạn muốn triển khai mô hình giám sát năng lượng tương tự?"
    ),
    ctaDescription: ls(
      "I can support you from site assessment and multi-protocol integration architecture design to dashboard implementation tailored to your operational needs.",
      "Tôi có thể hỗ trợ từ khảo sát hiện trạng, thiết kế kiến trúc tích hợp đa giao thức đến triển khai dashboard theo đúng nhu cầu vận hành của đơn vị bạn."
    ),
  },
];

/** All projects, newest first */
export const projects: Project[] = [...projectEntries].sort((a, b) =>
  b.publishedAt.localeCompare(a.publishedAt)
);

export const featuredProjects: Project[] = projects.filter((p) => p.featured);

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);
