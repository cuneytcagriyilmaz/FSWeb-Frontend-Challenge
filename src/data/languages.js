import spring from "../assests/spring.png";
import commerce from "../assests/commerce.png";

export const languages = {
  en: {
    title: "Creative Thinker, Minimalism Lover",
    description:
      " Hi, I'm Cagri. As a full-stack developer, I build powerful and scalable systems with Spring in the backend, while designing user-friendly and modern interfaces with React in the frontend. By combining Spring's flexible and reliable structure with React's dynamic and interactive user experience, I offer solutions that will bring your projects to life in the best way. If you want to take your projects to the next level with Spring and React, we can do great things together. Let's shake hands!",
    profile: "Profile",
    skill: "Skills",
    projects: "Projects",
    aboutSection: {
      section: "About Me",
      name: "Cüneyt Çağrı YILMAZ",
      bdaytitle: "Birthday",
      bday: "22.05.1998",
      cityTitle: "City",
      city: "Antalya",
      educationTitle: "Education",
      education: {
        uni: "Antalya Bilim Uni. Electrical Electornics Engineering",
        type: "Bachelor's degree",
        year: "2022",
      },
      role: "Full-Stack Java Developer - Back End Developer",
      roleTitle: "Preferred Role",
      aboutMe: [
        "I am a Full Stack Developer with a strong foundation in both frontend and backend technologies, committed to continuous growth. My passion for software development began during an artificial intelligence internship and was solidified through my work at EVAM, where I focused on backend development with Java and REST APIs.",
        "I further advanced my skills by completing the 960-hour Full Stack Development program at Workintech. My goal is to master software development and computer science principles to deliver innovative solutions.",
      ],
    },
    footerSection: {
      main: "Let’s work together on your next project.",
    },
    headerData: {
      logoText: "C.Ç.Y",
      navigationLinks: ["Skills", "Projects", "Hire Me"],
    },
    projectsData: [
      {
        id: 1,
        title: "E-Commerce",
        imageUrl: commerce,
        description:
          "A modern and user-friendly e-commerce interface was developed using React.js. Responsive design was created with Tailwind CSS, product pagination and infinite scrolling features were added. Redux and Redux Thunk were used for state management, API requests were integrated with Axios, token-based authentication and protected routing were implemented. User notifications were managed with Toastify, react-hook-form was used for efficient processing of forms, and Gravatar and FontAwesome integrations were implemented.",
        technologies: ["React", "Redux", "TailwindCSS"],
        githubLink: "https://github.com/cuneytcagriyilmaz/E-Commerce",
        viewSiteLink: "https://e-commerce-lime-six.vercel.app/",
      },
      {
        id: 2,
        title: "Flight Search API",
        imageUrl: spring,
        description:
          "RESTful API endpoints have been developed for users to manage airports and flights efficiently. Various endpoints have been provided including CRUD operations and search functionality. A scheduled task has been implemented to update the local database every midnight with data from a third-party API. Security measures have been taken using Spring Security to ensure the integrity and confidentiality of the data and different access levels (USER, MANAGER, ADMIN) have been defined. Swagger documentation has been integrated to facilitate discovery of API endpoints. Configuration has been made for security measures, database management and external API access to maximize the performance of the application.",
        technologies: ["Spring Boot", "SQL", "Hibernate"],
        githubLink: "https://github.com/cuneytcagriyilmaz/flightsearchapi",
        viewSiteLink: "#",
      },
      {
        id: 3,
        title: "Loan Application",
        imageUrl: spring,
        description:
          "RESTful API endpoints have been developed for users to manage airports and flights efficiently. Various endpoints have been provided including CRUD operations and search functionality. A scheduled task has been implemented to update the local database every midnight with data from a third-party API. Security measures have been implemented using Spring Security to ensure the integrity and confidentiality of the data and different access levels (USER, MANAGER, ADMIN) have been defined. Swagger documentation has been integrated to facilitate discovery of the API endpoints.",
        technologies: ["Spring Boot", "Thymeleaf", "SQL"],
        githubLink: "https://github.com/cuneytcagriyilmaz/Loan-Application",
        viewSiteLink: "#",
      },
    ],
    skillsData: [
      {
        title: "Spring Boot",
        description:
          "Spring Boot is a framework that makes it easy to develop microservices and standalone applications quickly and efficiently with Java, providing ready-made configurations and automatic configuration options.",
      },
      {
        title: "React.Js",
        description:
          "React is a component-based JavaScript library that makes it easy to create user interfaces and enables the development of fast and interactive web applications with dynamic and reusable UI components.",
      },
      {
        title: "SQL",
        description:
          "SQL (Structured Query Language) is a standard language and command set used to perform data query, insertion, update and deletion operations in relational databases.",
      }
    ],
  },
  tr: {
    title: "Yaratıcı Düşünür, Minimalist sever",
    description:
      "Merhaba, ben Çağrı. Full-stack developer olarak, backend'de Spring ile güçlü ve ölçeklenebilir sistemler inşa ederken, frontend'de React ile kullanıcı dostu ve modern arayüzler tasarlıyorum. Spring’in esnek ve güvenilir yapısını React’in dinamik ve interaktif kullanıcı deneyimiyle birleştirerek, projelerinizi en iyi şekilde hayata geçirecek çözümler sunuyorum. Eğer Spring ve React ile projelerinizi bir üst seviyeye taşımak istiyorsanız, birlikte harika işler yapabiliriz.",
    profile: "Profil",
    skill: "Yetenekler",
    projects: "Projeler",
    aboutSection: {
      section: "Hakkımda",
      name: "Cüneyt Çağrı YILMAZ",
      bdaytitle: "Doğum Tarihi",
      bday: "25.02.1998",
      cityTitle: "İkamet",
      city: "Antalya",
      educationTitle: "Eğitim Durumu",
      education: {
        uni: "Antalya Bilim Uni. Elektrik Elektronik Mühendisliği",
        type: "Lisans",
        year: "2022",
      },
      role: "Full-Stack Geliştirici - Back End Geliştirici",
      roleTitle: "Tercih Ettiği Rol",
      aboutMe: [
        "Hem Front End hem de Back End teknolojilerinde güçlü bir temele sahip, sürekli büyümeye kendini adamış bir Full Stack Geliştiricisiyim. Yazılım geliştirmeye olan tutkum, yapay zeka stajı sırasında başladı ve Java ve REST API'leriyle arka uç geliştirmeye odaklandığım EVAM'daki çalışmamla pekişti.",
        "Workintech'teki 960 saatlik Full Stack Geliştirme programını tamamlayarak becerilerimi daha da geliştirdim. Amacım, yenilikçi çözümler sunmak için yazılım geliştirme ve bilgisayar bilimi ilkelerinde ustalaşmaktır.",
      ],
    },
    footerSection: {
      main: "Bir sonraki ürününüz üzerinde birlikte çalışalım.",
    },
    headerData: {
      logoText: "C.Ç.Y",
      navigationLinks: ["Yetenekler", "Projeler", "Bana ulaş"],
    },
    projectsData: [
      {
        id: 1,
        title: "E-Ticatet",
        imageUrl: commerce,
        description:
          "React.js kullanarak modern ve kullanıcı dostu bir e-ticaret arayüzü geliştirilmiştir. Tailwind CSS ile responsive tasarım oluşturulmuş, ürün sayfalandırma ve sonsuz kaydırma özellikleri eklenmiştir. Durum yönetimi için Redux ve Redux Thunk kullanılmış, API istekleri Axios ile entegre edilerek, token tabanlı kimlik doğrulama ve korumalı yönlendirme işlemleri uygulanmıştır. Kullanıcı bildirimleri Toastify ile yönetilmiş, formların verimli işlenmesi için react-hook-form kullanılmış ve Gravatar ile FontAwesome entegrasyonları gerçekleştirilmiştir.",
        technologies: ["React", "Redux", "TailwindCSS"],
        githubLink: "https://github.com/cuneytcagriyilmaz/E-Commerce",
        viewSiteLink: "https://e-commerce-lime-six.vercel.app/",
      },
      {
        id: 2,
        title: "Uçuş Arama API",
        imageUrl: spring,
        description:
          "Kullanıcıların havalimanları ve uçuşları etkin bir şekilde yönetebilmesi için RESTful API uç noktaları geliştirilmiştir. CRUD işlemleri ve arama işlevselliği dahil olmak üzere çeşitli uç noktalar sağlanmıştır. Yerel veritabanının her gece yarısı üçüncü taraf bir API'den alınan verilerle güncellenmesi için zamanlanmış bir görev uygulanmıştır. Verilerin bütünlüğü ve gizliliğinin sağlanması amacıyla Spring Security kullanılarak güvenlik önlemleri alınmış ve farklı erişim seviyeleri (USER, MANAGER, ADMIN) tanımlanmıştır. API uç noktalarının keşfini kolaylaştırmak için Swagger dokümantasyonu entegre edilmiştir.",
        technologies: ["Spring Boot", "SQL", "Hibernate"],
        githubLink: "https://github.com/cuneytcagriyilmaz/flightsearchapi",
        viewSiteLink: "#",
      },
      {
        id: 3,
        title: "Kredi Uygulaması",
        imageUrl: spring,
        description:
          "Spring Boot ve Thymeleaf kullanılarak geliştirilen bu kredi başvuru sisteminde, RESTful API uç noktaları ile kullanıcıların kredi başvuruları yönetilmiştir. Kredi skorları ve aylık gelirler dikkate alınarak dinamik kredi limitleri atanmıştır. Teminat sağlandığında kredi limitine ekleme yapılmıştır. Başvurular veritabanına kaydedilmiş ve sonuçlar API aracılığıyla iletilmiştir. Kredi başvuruları, kimlik numarası ve doğum tarihi ile sorgulanabilir; bilgiler eşleşmediğinde sorgulama yapılmaz. Frontend Thymeleaf ile, backend ise Spring Boot ile yapılandırılmıştır. Kredi limit çarpanı varsayılan olarak 4 olarak belirlenmiştir.",
        technologies: ["Spring Boot", "Thymeleaf", "SQL"],
        githubLink: "https://github.com/cuneytcagriyilmaz/Loan-Application",
        viewSiteLink: "#",
      },
    ],
    skillsData: [
      {
        title: "Spring Boot",
        description:
          "Spring Boot, Java ile hızlı ve verimli bir şekilde mikroservisler ve bağımsız uygulamalar geliştirmeyi kolaylaştıran, hazır yapılandırmalar ve otomatik yapılandırma seçenekleri sunan bir framework'tür.",
      },
      {
        title: "React.Js",
        description:
          "React, kullanıcı arayüzleri oluşturmayı kolaylaştıran, bileşen tabanlı bir JavaScript kütüphanesidir ve dinamik ve yeniden kullanılabilir UI bileşenleri ile hızlı ve etkileşimli web uygulamaları geliştirilmesini sağlar.",
      },
      {
        title: "SQL",
        description:
          "SQL (Structured Query Language), ilişkisel veritabanlarında veri sorgulama, ekleme, güncelleme ve silme işlemlerini gerçekleştirmek için kullanılan standart bir dil ve komut setidir.",
      },
    ],
  },
};
