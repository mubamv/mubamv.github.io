

const Variables = {

    WorkActionSvg: `<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15.5" cy="15.5" r="15.5" fill="white" />
        <path d="M11.3442 7.35218C11.1238 7.57776 11 7.88366 11 8.20262C11 8.52157 11.1238 8.82747 11.3442 
            9.05305L17.1627 15.0073L11.3442 20.9615C11.13 21.1883 11.0116 21.4922 11.0142 21.8076C11.0169 
            22.123 11.1405 22.4247 11.3585 22.6477C11.5764 22.8707 11.8712 22.9972 12.1794 23C12.4876 23.0027 
            12.7846 22.8815 13.0063 22.6623L19.6558 15.8577C19.8762 15.6321 20 15.3262 20 15.0073C20 14.6883 
            19.8762 14.3824 19.6558 14.1568L13.0063 7.35218C12.7858 7.12668 12.4869 7 12.1752 7C11.8635 7 
            11.5646 7.12668 11.3442 7.35218Z" fill="#215039" />
    </svg>`,

    Works: [
        {
            name: "Blog",
            color: "#479FC8",
            type: "UI/UX . Web",
            featureImage: "assets/images/rivtn_blog.png",
            desc: "A blog is used to share knowledge in a particular field, and mission to create a connection with your audience.",
        },
        {
            name: "Intra",
            color: "#77CB0D",
            type: "UI/UX . Mobile App",
            featureImage: "assets/images/intra_mobile.png",
            desc: "Connect with people within your environments that is in need of your skills",
        },
        {
            color: "#4D1579",
            name: "Support Center",
            type: "UI/UX . Web . Prototyping",
            featureImage: "assets/images/rivtn_support.png",
            desc: "Responsive support center And seamless and way efficient way providing answers to their questions and resolving issues.",
        },
        {
            color: "#77CB0D",
            type: "UI/UX . Web",
            name: "Intra Landing Page",
            featureImage: "assets/images/intra_landing.png",
            desc: "Landing web page was designed to convert visitor into customers or achieve a specific goals.",
        },
        {
            color: "#77CB0D",
            name: "Dashboard",
            type: "UI/UX . Web",
            featureImage: "assets/images/intra_dashboard.png",
            desc: "A well-designed dashboard providing users, with a clear and concise overview of important information",
        },
        {
            color: "#479FC8",
            name: "Blog Admin",
            type: "UI/UX . Web . Prototype",
            featureImage: "assets/images/rivtn_blog_admin.png",
            desc: "Blog Admin allow administrators to quickly and efficiently manage and control system settings, users permissions, and other advance configurations.",
        },
    ],

    WorkDetails: [
        {
            name: "Rivtn Blog",
            location: "https://blog.rivtn.com",
            description: "Blog website where you can to share your thoughts, experiences, and expertise with a wider audience.",
            content: [
                {
                    type: "medias",
                    label: "Landing Page",
                    images: [
                        "./assets/images/blog1left.png",
                        "./assets/images/blog1right.png",
                    ],
                },
                {
                    type: "texts",
                    value: `I've crafted a blog landing page with a header featuring the organization's logo in the top left corner,
                            serving as a clickable home button. The navigation menu provides seamless access to key content through
                            "featured," "news," and "categories" links. The hero section showcases a prominent headline and subtitle
                            that clearly communicate the blog's focus. A featured post stands out with a large icon image, description,
                            and faded blue background with overlaid text, grabbing users' attention. A "see more" option invites users
                            to explore further, accompanied by a navigation arrow that reveals additional latest posts in the section.
                            The latest posts are displayed with faded blue backgrounds, hover effects, and essential details like
                            category
                            tags, comment icons, images, descriptions, and dates. A news section offers a convenient shortcut to the
                            latest updates, with clickable elements highlighted in blue for easy identification. To enhance user
                            engagement,
                            I've also introduced "Recommended" and "View All" button posts, allowing users to explore popular posts and
                            authors. The "Top Authors" section completes the landing page, featuring a "View All Posts" button in the
                            right
                            corner, enabling users to access all posts written by their favorite authors.`,
                },
                {
                    label: "News",
                    type: "medias",
                    images: [
                        "./assets/images/rivtn_blog2left.png",
                        "./assets/images/rivtn_blog2right.png",
                    ],
                },
                {
                    type: "texts",
                    value: `I've designed a dedicated news page, accessible via the 'News' button in the header. This page features a curated 
                        selection of both latest and archived news articles, complete with engaging hover effects that enhance the user 
                        experience. Each news article includes essential details such as the time it was posted, allowing users to quickly 
                        understand the relevance and timeliness of the content. The page is designed to provide a seamless and intuitive 
                        experience, making it easy for users to stay up-to-date with the latest news and updates.`,
                },
                {
                    type: "medias",
                    label: "Featured",
                    images: [
                        "./assets/images/rivtn_blog3left.png",
                        "./assets/images/rivtn_blog3right.png",
                    ],
                },
                {
                    type: "texts",
                    value: `I've created a dedicated Featured page, accessible via the prominently marked 'Featured' button in the header, 
                        which turns blue to indicate when users are on this specially designed page. This page is intended for both 
                        users and authors to showcase their latest or most popular blog posts, utilizing eye-catching images, headings, 
                        and summaries to captivate readers. Each featured post includes a comment icon and publication date, along 
                        with engaging hover effects that enhance the user experience. Additionally, a pagination feature allows users 
                        to seamlessly navigate to the next page, making it easy to explore and discover more great content.`,
                },
                {
                    type: "medias",
                    label: "Categories / Article Page",
                    images: [
                        "./assets/images/rivtn_blog4left.png",
                        "./assets/images/rivtn_blog4right.png",
                    ],
                },
                {
                    type: "texts",
                    value: `I've created a user-friendly Categories page, accessible via the prominently marked 'Categories' button in the 
                        header, which reveals a dropdown menu on hover. This page allows users to effortlessly explore and select 
                        relevant categories, enabling categorization or tagging of blog posts. By organizing content into clear categories, 
                        users can quickly discover related information and enjoy a seamless browsing experience. Each category leads 
                        to a dedicated page, where users can explore more related content. Additionally, selecting a specific post takes 
                        users to a full article page, providing access to detailed information and a more in-depth reading experience.`,
                },
            ]
        },
        {
            name: "Intra Mobile Application",
            description: "Intra Application is a networking app that connects hand-skilled job providers with individuals looking to their services.",
            content: [
                {
                    type: "medias",
                    label: "Sign In / Sign Up",
                    images: [
                        "./assets/images/intra_mobile1left.png",
                        "./assets/images/intra_mobile1right.png",
                    ],
                },
                {
                    type: "texts",
                    value: `I designed the Sign Up and Sign In page as a single page for registration, where users can submit their 
                        required details to gain access and log in. Each text box features an outline color to indicate when a user is 
                        still actively typing within the box. Additionally, a left text box icon represents the required text, providing 
                        a clear visual cue. The 'Remember Me' checkbox allows the app to save login details for future logins, 
                        streamlining the process. If a user forgets their password, they can easily reset it using the 'Forget' button. 
                        Conveniently, both Sign Up and Sign In options are available on each page, making it easy for users to switch 
                        between the two.`,
                },
                {
                    type: "medias",
                    label: "Pending / Complete Job Page",
                    images: [
                        "./assets/images/intra_mobile2left.png",
                        "./assets/images/intra_mobile2right.png",
                    ],
                },
                {
                    type: "texts",
                    value: `The bottom navigation bar allows users to seamlessly switch between pages, indicated by a color change and a 
                        small top bar. On the Home page, users can easily toggle between 'Pending Jobs' and 'Complete Jobs' by clicking 
                        on the corresponding buttons, which are filled with color to indicate the active page. This intuitive design enables 
                        users to effortlessly navigate and access the information they need.`,
                },
                {
                    type: "medias",
                    label: "Services / Wallet Page",
                    images: [
                        "./assets/images/intra_mobile3left.png",
                        "./assets/images/intra_mobile3right.png",
                    ],
                },
                {
                    type: "texts",
                    value: `Each service is represented by a distinctive icon, allowing users to quickly understand the status of a 
                        job at a glance. Completed jobs are denoted by a green marked circle, while ongoing jobs are indicated 
                        by a red icon. These icons are clickable, enabling users to access full details about the finished or ongoing 
                        service. The red icon serves as a visual indicator for ongoing jobs, while the green marked circle signifies 
                        completed services, providing a clear and intuitive way for users to track their jobs.
                        <br /><br />
                        The Wallet feature allows users to receive payments for completed services, with a toggle button enabling 
                        them to easily switch between withdrawing funds and viewing transaction history. The buttons are filled with 
                        color to indicate the active page, providing a clear visual cue. Additionally, users can filter transactions by date, 
                        making it simple to track and manage their financial activity. The transaction display includes summaries and 
                        highlights recent transactions, ensuring quick and easy access to essential information.`,
                },
                {
                    type: "medias",
                    label: "Message / Profile page",
                    images: [
                        "./assets/images/intra_mobile4left.png",
                        "./assets/images/intra_mobile4right.png",
                    ],
                },
                {
                    type: "texts",
                    value: `The Messages section is a dedicated space for users to receive messages and chat with their service providers, 
                        facilitating the exchange of important information. The front display features a prominent notification 
                        indicator at the top right corner, showcasing a numeric icon within a color circle to alert users of incoming 
                        messages. Additionally, the display includes essential details such as the date, name, and display picture of 
                        the service provider. By clicking on the notification, users can seamlessly access the chat feature and engage in 
                        conversation with their service provider, ensuring effortless communication and efficient information sharing.
                        <br /><br />
                        The Profile page offers a range of essential features, providing users with a centralized hub for managing their 
                        account and settings. The page comprises five clickable buttons, each represented by an arrow-filled color circle, 
                        making it easy for users to identify and access the following features:
                        <br /><br />
                        <br />- Settings: Customize app preferences and settings
                        <br />- Edit Profile: Update personal information and profile details
                        <br />- Account Number Setup: Manage account settings and configurations
                        <br />- App Update: Check for and install the latest app updates
                        <br />- Logout: Securely log out of the app
                        <br /><br />
                        The use of arrow-filled color circles ensures a visually appealing and intuitive design, enabling users to 
                        effortlessly navigate and access the features they need.`,
                },
            ]
        },
        {
            name: "Rivtn Support Center",
            location: "https://support.rivtn.com",
            description: "The Support Center is a website, providing users with a dedicated resource for assistance and guidance.",
            content: [
                {
                    type: "medias",
                    label: "Landing Page",
                    images: [
                        "./assets/images/rivtn_support1left.png",
                        "./assets/images/rivtn_support1right.png",
                    ],
                },
                {
                    type: "texts",
                    value: `I've created a user-friendly Support Center landing page, featuring a header with the organization's logo in
                        the top left corner, serving as a clickable home button with a dropdown menu to switch platforms. The 
                        navigation menu provides effortless access to essential content through clear and concise "Support", 
                        "Resources", and "Communities" links.
                        <br /><br />
                        The hero section prominently displays a headline, subtitle, and image, effectively communicating 
                        the support center's purpose and focus. The "Got a Question?" section is thoughtfully designed to 
                        anticipate users' queries, providing easy access to related questions and answers with a visually 
                        appealing hover effect for effortless recognition.
                        <br /><br />
                        Additionally, the landing page features buttons for FAQ, Guidelines, Resources, and Support, each with a 
                        hover effect and browse categories, ensuring users can quickly find the information they need. These buttons 
                        are clickable, allowing users to explore more and find answers to their questions with ease.`,
                },
                {
                    type: "medias",
                    label: "FAQs Page",
                    images: [
                        "./assets/images/rivtn_support2left.png",
                        "./assets/images/rivtn_support2right.png",
                    ],
                },
                {
                    type: "texts",
                    value: `The FAQs (Frequently Asked Questions) page is a dedicated resource for users to quickly find answers to common 
                        questions and concerns. Related questions are presented in a text box with a clickable dropdown feature, allowing 
                        users to easily access the answers below. Additionally, a thumbs up and down icon enables users to provide 
                        feedback on the helpfulness of the article or content.
                        <br />br />
                        For further assistance, a prominent purple 'Contact' button allows users to seamlessly navigate to the Contact page, 
                        where they can reach out for support or guidance. This intuitive design ensures a smooth user experience and 
                        efficient access to the information and support users need.`,
                },
                {
                    type: "medias",
                    label: "Featured",
                    images: [
                        "./assets/images/rivtn_support3left.png",
                        "./assets/images/rivtn_support3right.png",
                    ],
                },
                {
                    type: "texts",
                    value: `The Contact Support page is designed to facilitate user communication with the website's admin through various 
                        convenient channels. Each contact method is categorized and presented as a clickable option, accompanied by 
                        an outline color hover effect for easy recognition and accessibility.
                        <br /><br />
                        Each option is clearly labeled and clickable, making it simple for users to choose their preferred method of 
                        communication. The page's intuitive design ensures a seamless user experience and efficient support.`,
                }
            ]
        },
        {
            name: "Intrasoft Web",
            description: "An organization website.",
            content: [
                {
                    type: "medias",
                    label: "Landing Page",
                    images: [
                        "./assets/images/intra_web1left.png",
                        "./assets/images/intra_web1right.png",
                    ],
                },
                {
                    type: "texts",
                    value: `I've designed a user-friendly Intrasoft landing page, featuring a header with the organization's logo in the 
                        top left corner, serving as a clickable home button. The navigation menu provides seamless access to 
                        essential content through clear and concise links: "Home", "Support", "About", and a prominent login button, 
                        all indicated with color links.
                        <br /><br />
                        The hero section showcases an engaging auto-typing text animation with subtitles, accompanied by 
                        a color clickable button below, allowing users to explore more. A relevant picture helps users understand 
                        the organization's focus. Scrolling down, a large picture on the left side is accompanied by descriptions of 
                        how to build a career with the organization, along with a color button to sign up for free amd to learn more.
                        <br /><br />
                        The Features section highlights what the app offers users, while the Categories section explains the two 
                        types of categories users can fall into, with a hover effect and clickable links to learn more. 
                        Users can download the app from the Android Play Store or Apple Store, or use a scanner to access the app. 
                        Social media links, with a hover effect and color effect, are conveniently located at the footer left corner, 
                        allowing users to follow the organization.`,
                },
                {
                    type: "medias",
                    label: "Contact Page",
                    images: [
                        "./assets/images/intra_web2left.png",
                        "./assets/images/intra_web2right.png",
                    ],
                },
                {
                    type: "texts",
                    value: `I designed a dedicated page for users to get in touch with us, accessible through the 'Support' button link 
                        in the landing page header. This page features a hero section and subtitle, clearly communicating its purpose: 
                        to facilitate user communication with our organization.
                        <br /><br />
                        Users can reach out to us through various means, including:
                        <br /><br />
                        <br />- Email: via a text chat box
                        <br />- Additional contact details: provided for users to get in touch with us
                        <br />- Service hours: clearly indicated, so users know when our customer support agents are available to assist
                        <br /><br />
                        This page is designed to provide a seamless and intuitive experience for users to connect with us, ensuring 
                        they receive the support they need in a timely and efficient manner.
                        <br /><br />
                        The 'About Us' page is accessible via the 'About Us' link button in the header. Upon arrival, users are greeted 
                        by a hero section featuring a prominent hero text and subtitled below, clearly communicating the page's 
                        purpose.
                        <br /><br />
                        Below the hero section, users can find company logo as a picture, comprehensive text about our company, 
                        including our history, mission, values, and culture. This page serves as a digital representation of our 
                        organization, providing an in-depth look at who we are, what we do, and what drives us.`,
                }
            ]
        },
        {
            name: "Intra Dashboard",
            description: "For Administrator to monitor and oversee all company activities.",
            content: [
                {
                    type: "medias",
                    label: "My Dashboard",
                    images: [
                        "./assets/images/intra_dashboard1.png",
                    ],
                },
                {
                    type: "texts",
                    value: `The Intrasoft dashboard is a centralized hub designed for administrators to monitor and oversee all 
                        company activities, providing real-time insights and updates. The header features the company logo, a 
                        circular profile picture, and a notification icon, as well as a searchable icon that allows users to quickly find 
                        specific information.
                        <br /><br />
                        The sidebar menu offers easy access to key pages, including:
                        <br /><br />
                        <br />- My Dashboard
                        <br />- Services
                        <br />- Wallet
                        <br />- Settings
                        <br />- Support
                        <br />- Logout
                        <br /><br />
                        Each menu item is clickable, allowing users to navigate seamlessly to the corresponding page.
                        <br /><br />
                        A framed rectangle box provides a snapshot of vital statistics, including:
                        <br /><br />
                        <br />- Total transactions
                        <br />- Completed services
                        <br />- Today's services
                        <br />- Cancelled services
                        <br /><br />
                        This information is readily accessible, enabling users to stay informed and up-to-date.
                        <br /><br />
                        Additionally, a recent activities log is included, providing a chronological record of events for easy 
                        reference and tracking."`,
                },
                {
                    type: "medias",
                    label: "Services Page",
                    images: [
                        "./assets/images/intra_dashboard2.png",
                    ],
                },
                {
                    type: "texts",
                    value: `The Services page is easily accessible via the Services button, which is highlighted in color to indicate the 
                        current page. Upon arrival, a prominent hero text greets the administrator at the top of the page.
                        <br /><br />
                        Below the hero text, a comprehensive services log provides a detailed record of all services performed, 
                        including both recent and past activities. This log offers administrators a thorough and organized overview 
                        of all services, enabling them to track progress, monitor performance, and make informed decisions.
                        <br /><br />
                        The services log is designed to be user-friendly and intuitive, allowing administrators to quickly and easily 
                        access the information they need to manage services effectively.`,
                },
                {
                    type: "medias",
                    label: "Wallet Page",
                    images: [
                        "./assets/images/intra_dashboard3.png",
                    ],
                },
                {
                    type: "texts",
                    value: `The Wallet page is easily accessible via the Wallet button, which is highlighted in color to indicate the 
                        current page. Upon arrival, a clear and concise hero text welcomes the administrator at the top of the page, 
                        providing a brief overview of the page's purpose.
                        <br /><br />
                        The Wallet page is designed to provide administrators with a centralized hub for managing financial 
                        transactions, offering a user-friendly interface and intuitive navigation. From here, administrators can 
                        effortlessly monitor and control their financial activities, ensuring efficient and secure management of 
                        their wallet.`,
                },
                {
                    type: "medias",
                    label: "Setting Page",
                    images: [
                        "./assets/images/intra_dashboard4.png",
                    ],
                },
                {
                    type: "texts",
                    value: `The Settings page is a dedicated hub for administrators to modify and update crucial details and 
                        preferences. This page is thoughtfully designed to provide a centralized location for administrators to 
                        manage and customize various settings, ensuring a tailored experience that meets their specific needs.
                        <br /><br />
                        Each section of the Settings page features a clearly labeled box, accompanied by a representative icon, 
                        where administrators can enter and update specific details. These boxes are intuitively organized, 
                        making it easy for administrators to navigate and make changes to:
                        <br /><br />
                        <br />- Name settings
                        <br />- Email information
                        <br />- Mobile Number
                        <br />- Password settings
                        <br />- Address`,
                },
            ]
        },
        {
            name: "Rivtn Blog Administrator",
            description: "For Administrator to monitor and oversee all company activities",
            content: [
                {
                    type: "medias",
                    label: "Landing Page",
                    images: [
                        "./assets/images/rivtn_blog_admin1.png",
                    ],
                },
                {
                    type: "texts",
                    value: `The Administrator Blog page is a centralized hub for users to manage and oversee their blog posts. The header 
                        features the website's logo, a profile picture with the administrator's name (which doubles as a dropdown menu), 
                        and a sidebar menu bar with icon-labelled buttons for easy navigation: “Home,
                        Categories,
                        Comments,
                        Tags,
                        Authors”
                        <br />
                        A prominent hero text displays the author's name, and below, a list of all blog posts from the main 
                        website is displayed. Each post is clickable, with a hover effect highlighted in blue outline color. 
                        From here, administrators can:
                        “Edit, Publish, Delete” posts with ease.  Additionally, a search and filter 
                        function allows administrators to quickly find specific posts by:
                        ”Author, Category,
                        Draft message,
                        Scheduled posts”`,
                },
                {
                    type: "medias",
                    label: "Categories Page",
                    images: [
                        "./assets/images/rivtn_blog_admin2.png",
                    ],
                },
                {
                    type: "texts",
                    value: `The Categories page is easily accessible via the Categories side button, which features a hero text clearly 
                        indicating the page name. In the top right corner, a filter button allows administrators to sort categories 
                        by date, alongside a 'Create New Category' button.
                        <br /><br />
                        Each created category is listed on the page, accompanied by:
                        <br /><br />
                        <br />- A representative image on the left
                        <br />- The number of articles created under this category
                        <br />- An editable button (outlined in color with a hover effect)
                        <br />- A delete button next to it
                        <br /><br />
                        This design provides a clean, intuitive, and user-friendly interface for administrators to manage categories 
                        efficiently. With clear labeling and organization, administrators can quickly navigate, edit, and delete 
                        categories as needed.`,
                },
                {
                    type: "medias",
                    label: "Categories",
                    images: [
                        "./assets/images/rivtn_blog_admin3.png",
                    ],
                },
                {
                    type: "texts",
                    value: `The Filter button not only offers a convenient hover effect but also serves as a dropdown menu, 
                        providing users with a range of filtering options to refine their search. 
                        With a simple click, users can filter by:
                        <br /><br />
                        <br />- Author
                        <br />- Category
                        <br />- Date Created
                        <br />- Last Date Updated
                        <br /><br />
                        This dropdown menu offers a quick and easy way to narrow down search results, making it even 
                        more efficient for administrators to find specific categories.`,
                },
                {
                    type: "medias",
                    label: "Categories / Article Page",
                    images: [
                        "./assets/images/rivtn_blog_admin4.png",
                    ],
                },
                {
                    type: "texts",
                    value: `When clicking the 'Create New Category' button on categories page, users are taken to a dedicated 
                        page for creating and editing category posts. This page features:
                        <br /><br />
                        <br />- Text boxes with a hover effect and outline color, drawing attention to the input fields as users type
                        <br />- A 'Save' and 'Cancel' button in the top right corner, easily recognizable by their outline color and fill color`,
                },
                {
                    type: "medias",
                    label: "Comment Page",
                    images: [
                        "./assets/images/rivtn_blog_admin5.png",
                    ],
                },
                {
                    type: "texts",
                    value: `The Comment sidebar button serves as a gateway to a dedicated comment management page, 
                        where administrators can efficiently oversee and respond to user comments. This page offers a range 
                        of features, including:
                        <br /><br />
                        <br />- The ability to reply to comments via the prominent 'REPLY' button
                        <br />- React to comments with various emotions
                        <br />- Delete comments as needed
                        <br />- View detailed information about the user who left the comment, including:
                        <br />- Exact time and date of the comment
                        <br />- The post being commented on
                        <br /><br />
                        This design provides administrators with a comprehensive and user-friendly interface to manage comments, 
                        engage with users, and maintain a streamlined community.`,
                },
            ]
        },
    ],

}

const QueryParamsManager = {

    _url: new URL(window.location.href),

    set: (key, value) => {
        QueryParamsManager._url.searchParams.set(key, value);
        window.history.replaceState(null, null, QueryParamsManager._url);
    },

    append: (key, value) => {
        QueryParamsManager._url.searchParams.append(key, value);
        window.history.replaceState(null, null, QueryParamsManager._url);
    },

    get: (key, fallback) => {
        return QueryParamsManager._url.searchParams.get(key) ?? fallback;
    },

    delete: (key) => {
        return QueryParamsManager._url.searchParams.delete(key);
    },

}

const Elements = {

    workPage: document.getElementById("work"),
    profilePage: document.getElementById("profile"),
    pageUnderline: document.getElementById("page-underline"),
    worksContainer: document.getElementById("works-container"),
    sPageUnderline: document.getElementById("s-page-underline"),
    fPageUnderline: document.getElementById("f-page-underline"),
    uiUxAnimationElement: document.getElementById("ui-ux-anim"),
    workPageToggle: document.getElementById("work-page-toggle"),
    sWorkPageToggle: document.getElementById("s-work-page-toggle"),
    fWorkPageToggle: document.getElementById("f-work-page-toggle"),
    contactPageToggle: document.getElementById("contact-page-toggle"),
    profilePageToggle: document.getElementById("profile-page-toggle"),
    sContactPageToggle: document.getElementById("s-contact-page-toggle"),
    fContactPageToggle: document.getElementById("f-contact-page-toggle"),
    sProfilePageToggle: document.getElementById("s-profile-page-toggle"),
    fProfilePageToggle: document.getElementById("f-profile-page-toggle"),
    lastPageToggleToggled: document.getElementById("profile-page-toggle"),
    sLastPageToggleToggled: document.getElementById("s-profile-page-toggle"),
    fLastPageToggleToggled: document.getElementById("f-profile-page-toggle"),
    headerSmallContent: document.getElementsByClassName("header-small-content")[0],

    getSingleWorks() {
        return document.getElementsByClassName("single-work");
    },

}

const MmScript = {

    __animating: false,

    toggleSmallPageHeader(show) {
        Elements.headerSmallContent.style.display = (show ? "flex" : "none");
    },

    animateLandingPageLabel() {
        if (MmScript.__animating) return;
        MmScript.__animating = true;
        let valueIndex = 0;
        let direction = "forward";
        const value = "UI & UX Designer".split("");
        const animation = () => {
            if (!Elements.uiUxAnimationElement) return;
            if (direction === "forward") {
                valueIndex++;
                Elements.uiUxAnimationElement.innerText = value.slice(0, valueIndex).join("");
                if (valueIndex === value.length) direction = "backward";
            } else if (direction === "backward") {
                valueIndex--;
                Elements.uiUxAnimationElement.innerText = value.slice(0, valueIndex).join("");
                if (valueIndex === 0) direction = "forward";
            }
            setTimeout(animation, 300);
        };
        setTimeout(animation, 300);
    },

    switchSection(section, isSmallPage, workToggle) {
        if (!section) return;
        let top = "40px";
        let left = "12px";
        Elements.lastPageToggleToggled.style.fontFamily = "InriaSans Light";
        Elements.sLastPageToggleToggled.style.fontFamily = "InriaSans Light";
        Elements.fLastPageToggleToggled.style.fontFamily = "InriaSans Light";
        switch (section) {
            case "profile":
                Elements.lastPageToggleToggled = Elements.profilePageToggle;
                Elements.sLastPageToggleToggled = Elements.sProfilePageToggle;
                Elements.fLastPageToggleToggled = Elements.fProfilePageToggle;
                break;
            case "work":
                left = "95px";
                top = "125px";
                Elements.lastPageToggleToggled = Elements.workPageToggle;
                Elements.sLastPageToggleToggled = Elements.sWorkPageToggle;
                Elements.fLastPageToggleToggled = Elements.fWorkPageToggle;
                break;
            case "contact":
                top = "215px";
                left = "180px";
                Elements.lastPageToggleToggled = Elements.contactPageToggle;
                Elements.sLastPageToggleToggled = Elements.sContactPageToggle;
                Elements.fLastPageToggleToggled = Elements.fContactPageToggle;
                break;
        }
        Elements.sPageUnderline.style.top = top;
        Elements.pageUnderline.style.left = left;
        Elements.fPageUnderline.style.left = left;
        QueryParamsManager.set("section", section);
        Elements.lastPageToggleToggled.style.fontFamily = "InriaSans Bold";
        Elements.sLastPageToggleToggled.style.fontFamily = "InriaSans Bold";
        Elements.fLastPageToggleToggled.style.fontFamily = "InriaSans Bold";
        if (workToggle) section = "profile";
        MmScript.animateLandingPageLabel();
        if (isSmallPage) {
            Elements.headerSmallContent.style.display = "none";
        }
        setTimeout(() => document.querySelector(`.${section}`)?.scrollIntoView({ behavior: 'smooth' }), 100);
        if (workToggle) return;
        if (QueryParamsManager.get("page") === "work") {
            QueryParamsManager.delete("page");
            MmScript.prepareHome();
        }
    },

    renderWork(index) {
        const work = Variables.WorkDetails[index];
        if (!work) return;
        const workDetailsLength = Variables.WorkDetails.length;
        Elements.workPage.innerHTML = `
        <div class="header">
            <span class="title">${work.name}</span>
            <span class="desc">${work.description}</span>
        </div>
        ${work.content.map((content) => {
            if (content.type === "texts") {
                return `<div class="texts">${content.value}</div>`;
            }
            const imagesLength = content.images.length ?? 1;
            return `
            <div class="medias">
                <div class="images">
                    ${content.images.map((image) => `<img alt="${work.name}" src="${image}" ${imagesLength === 1 ? 'style="margin-top: 0px; max-width: 100%;"' : ""}/>`).join("")}
                </div>
                <div ${imagesLength === 1 ? 'style="margin-top: unset;"' : ""} class="label">${content.label}</div>
            </div>
            `;
        })}
        <div class="footer">
                <div>
                    ${work.location ? `
                        <i class="fa fa-globe"></i>
                        <a href="${work.location}" target="_blank">${work.location}</a>
                    ` : ""}
                </div>
            <div>
                ${(index > 0) ? `
                    <div class="button" onclick="MmScript.renderWork(${index - 1})" style="margin-right: 20px;">Prev Project</div>
                ` : ""}
                ${(index < (workDetailsLength - 1)) ? `
                    <div class="button" onclick="MmScript.renderWork(${index + 1})">Next Project</div>
                ` : ""}
            </div>
        </div>`;
        QueryParamsManager.set("wi", index);
        QueryParamsManager.set("page", "work");
        MmScript.prepareWork();
    },

    prepareHome() {
        Elements.worksContainer.innerHTML = "";
        MmScript.switchSection(QueryParamsManager.get("section") ?? "profile");
        for (let index = 0; index < Variables.Works.length; index++) {
            const work = Variables.Works[index];
            const workDiv = document.createElement("div");
            const workDivDesc = document.createElement("div");
            const workDivDescName = document.createElement("span");
            const workDivDescType = document.createElement("span");
            const workDivDescDesc = document.createElement("span");
            workDiv.className = "single-work";
            workDivDescName.className = "name";
            workDivDescType.className = "type";
            workDivDescDesc.className = "desc";
            workDivDescName.innerHTML = work.name;
            workDivDescType.innerHTML = work.type;
            workDivDescDesc.innerHTML = work.desc;
            workDiv.style.backgroundImage = `url("${work.featureImage}")`;
            workDivDesc.style.background = `linear-gradient(180deg, ${work.color} 0%, rgba(0, 0, 0, 0.5) 100%)`;

            workDiv.addEventListener("click", (_) => MmScript.renderWork(index));
            workDiv.addEventListener("mouseenter", (e) => {
                e.target.style.backgroundSize = "110% 120%";
                if (e.target.firstElementChild) e.target.firstElementChild.style.display = "flex";
            });
            workDiv.addEventListener("mouseleave", (e) => {
                e.target.style.backgroundSize = "130% 150%";
                if (e.target.firstElementChild) e.target.firstElementChild.style.display = "none";
            });
            workDivDesc.appendChild(workDivDescName);
            workDivDesc.appendChild(workDivDescType);
            workDivDesc.appendChild(workDivDescDesc);
            workDivDesc.innerHTML = workDivDesc.innerHTML + Variables.WorkActionSvg;
            workDiv.appendChild(workDivDesc);
            Elements.worksContainer.appendChild(workDiv);
        }
        Elements.profilePage.style.display = "block";
        Elements.workPage.style.display = "none";
    },

    prepareWork() {
        Elements.profilePage.style.display = "none";
        QueryParamsManager.set("section", "work");
        Elements.workPage.style.display = "block";
        MmScript.switchSection("work", false, true);
    },

    onPageLoaded() {
        Elements.profilePage.style.display = "none";
        const page = QueryParamsManager.get("page") ?? "home";
        if (page === "work") {
            MmScript.renderWork(parseInt(QueryParamsManager.get("wi", 0)));
            return;
        }
        MmScript.prepareHome();
    },

}

// Global Listeners
document.addEventListener('DOMContentLoaded', MmScript.onPageLoaded, false);