var myApp = angular.module('myApp', ["ngRoute"]);

myApp.config(function($routeProvider) {
        // $locationProvider.html5Mode(true);
        $routeProvider
            .when("/", {
                templateUrl: "/view/home.html",
                controller: "slideShowController",
            })
            
            .when("/business&consumer", {
                templateUrl: "../view/govnservices.html",
                controller: "productController",
            })

            .when("/about", {
                templateUrl: "../view/about.html",
                controller: "pagController",
            })

            .when("/project", {
                templateUrl: "../view/projects.html",
                controller: "projController",
            })

            .when("/service", {
                templateUrl: "../view/services.html",
                controller: "servController",
            })

            .otherwise({
                redirectTo: '/',
            })
});

    // second
myApp.controller('headController', function ($scope) {

        // menulinks
        var menuItems = [
            {
                name: "About Us",
                templateUrl: "#!/about",
                subItems: [
                    { name: "Pragyawan at glance", templateUrl: "#!/about#pag" },
                    { name: "Our Mission", templateUrl: "#!/about#banners" },
                    { name: "Team", templateUrl: "#!/about#team" },
                    { name: "History", templateUrl: "#!/about#pbh" },
                    
                ]
            },
            {
                name: "Business Segments",
                templateUrl: "#!/",
                subItems: [
                    { name: "Business & Consumers", templateUrl: "#!/business&consumer" },
                    { name: "Government", templateUrl: "#!/project" },
                    { name: "Services", templateUrl: "#!/service" },
                ]
            },
        ];
        $scope.menuItems = menuItems;
});

    // third
myApp.controller('slideShowController', function ($scope, $timeout) {
 var slidesInSlideshow = 3;
 var slidesTimeIntervalInMs = 3000; 
  
  $scope.slideshow = 1;
  var slideTimer =
    $timeout(function interval() {
      $scope.slideshow = ($scope.slideshow % slidesInSlideshow) + 1;
      slideTimer = $timeout(interval, slidesTimeIntervalInMs);
    }, slidesTimeIntervalInMs);

    var self = this;
    self.c11 = 'Solutions for small to medium';
    self.c1a = 'scale enterprises.';
    self.c12 = 'BSNL certified modems.';
    self.c13 = 'Mobile chargers.'
    self.c21 = "Bull is world's largest manufacturer of electrical switches.";
    self.c22 = 'BULL has exclusively partnered with us for';
    self.c2a = 'their products distribution in India.'
    self.c31 = "We are COSHIP's exclusive partner";
    self.c3a = 'for their Product Distribution';
    self.c3c = 'and Marketing in India.'
    self.c32 = "COSHIP is one of the world's largest manufacturer of";
    self.c3b = 'Set Up Boxes, IOT and Home Automation Products.';
    self.btn = 'Enquire Now';
});
    // fourth
myApp.controller('businessController',[function (){
    var self = this;
    self.head = 'Our Business Segments';
    self.para = 'Pragyawan operates through three strategically structured business segments each catering to specific customer requirements while complementing each other to develop comprehensive solutions.';
    self.businessItem = [
        {image: 'img/icon/business.png', title: 'Business & Consumers'},
        {image: 'img/icon/government.png', title: 'Government'},
        {image: 'img/icon/service.png', title: 'Services'},
    ];
}]);
    //fifth
myApp.controller('b1Controller',[function (){
    var self = this;
    self.head = 'Business and Consumer';
    self.para1 = 'This segment mainly caters to the SME,large corporations and retail customers.';
    self.para2 = 'We primarily cater to following industries in the segment.';
    self.businessItem = [
        {title: 'Business & Consumer',
            services: [
                {image: 'img/icon/router.png', desc: 'Modem, Router'},
                {image: 'img/icon/dropcable.png', desc: 'Drop/fibre Cable'},
                {image: 'img/icon/mifi.png', desc: 'Mifi Devices'},
                {image: 'img/icon/ont.png', desc: 'ONT/ONU, GPON'},
            ]
        },
         {title: 'Electricals',
            services: [
                {image: 'img/icon/switch.png', desc: 'Switches'},
                {image: 'img/icon/powercable.png', desc: 'Power Cables'},
                {image: 'img/icon/fuse.png', desc: 'modelBs'},
                {image: 'img/icon/extension.png', desc: 'Extension Board'},
            ]
        },
         {title: 'IT and Mobiles',
            services: [
                {image: 'img/icon/smartphone.png', desc: 'Smart/Feature Phone'},
                {image: 'img/icon/bluetooth.png', desc: 'Bluetooth'},
                {image: 'img/icon/tab.png', desc: 'Tablet'},
                {image: 'img/icon/mobile.png', desc: 'Mobile Accessories'},
            ]
        },
    ];
}]);
    //sixth
myApp.controller('b2Controller',[function (){
    var self = this;
    self.head = 'Government';
    self.head1 = 'Government Projects Undertaken by Pragyawan';
    self.para = 'Since its inception, Pragyawan has won and successfully executed (individually and many times in partnership with other companies) government projects worth more than $80 million.';
    self.b2Item = [
        {image: 'img/icon/signal.png', title: 'Telecom and Wireless'},
        {image: 'img/icon/powerplug.png', title: 'Power'},
        {image: 'img/icon/leather.png', title: 'Leather'},
    ];
    self.b2Items = [
        {titles: 'Telecom Turnkey Project'},
        {titles: 'Other Turnkey Projects'},
        {titles: 'Telecom Equipment Supply'},
        {titles: 'Leather Supply'}
    ];
}]);
    //seventh
myApp.controller('serviceController',[function (){
    var self = this;
    self.head = 'Services';
    self.para = 'Pragyawan always strive to provide complete solutions to its clients. Following this ideology, we have been offering a range of services to our clients to comprehensively meet their needs.';
    self.sItem = [
        {image: 'img/icon/photos.png', title: 'Business Initiation Services'},
        {image: 'img/icon/stamp.png', title: 'Mandatory Approval Services'},
        {image: 'img/icon/business22.png', title: 'Business Strategy Consulting'},
        {image: 'img/icon/businessresearch.png', title: 'Business Research'},
        {image: 'img/icon/offshore.png', title: 'Business Offshoring Services'},
    ];
}]);
    //eighth
myApp.controller('clientController',[function (){
    var self = this;
    self.head = 'Partners';
    self.image = 'img/icon/partner2.png';
}]);     

myApp.controller('testController', function ($scope){
        var tests = {
            test1: "In any case, we accomplish that by utilizing  in intri cate arranging, keen evaluations, and future development projections and making protected.",
            test2: "In any case, we accomplish that by utilizing  in intri cate arranging, keen evaluations, and future development projections and making protected.",
            image1: "img/testimonials/quoto-1.png",
            image2: "img/testimonials/quoto-1.png",
            image3: "img/testimonials/testimonials-1.png",
            image4: "img/testimonials/testimonials-2.png",
            head1: "John Joe",
            head2: "John Joe",
            para1: "Marketing Manager",
            para2: "Marketing Manager"
        };
        $scope.tests = tests;
});

myApp.controller('contactController', function ($scope){
        $scope.h1 = "Contact Us";
        $scope.h2 = "You can drop message";
        $scope.h3 = "for any query.";
        $scope.h4 = "Call Us Toll Free";
        $scope.h5 = "1800 854 9875";
});

myApp.controller('footController', function ($scope){
        $scope.h1 = "1800-854-9875";
        $scope.h2 = "info@pragyawan.com";
        $scope.p1 = "A-36, Sector 67, Noida";
        $scope.h3 = "Uttar Pradesh, India";
        $scope.h4 = "QUick Links";
        $scope.h5 = "About";
        $scope.h6 = "Subscribe Us";
        $scope.h7 = "Subscribe now";
        

        var fabout = [
            {url: "#!/about#pag", head: "Pragyawan at Glance"},
            {url: "#!/about#banners", head: "Our Mission"},
            {url: "#!/about#team", head: "Team"},
            {url: "#!/about#pbh", head: "History"},
        ];
        $scope.fabout = fabout;

        var linker = [
            {url1: "#!/", head1: "Home"},
            {url1: "#!/about", head1: "About Us"},
            {url1: "#!/business&consumers", head1: "Business Segments"},
            {url1: "#!/contactus", head1: "Contact Us"},
        ];
        $scope.linker = linker;

        // social
        $scope.socialLinks = [
            { url: "https://www.facebook.com/", printText: "facebook" },
            { url: "https://twitter.com", printText: "twitter" },
            { url: "https://www.linkedin.com", printText: "linkedin" },
            { url: "http://www.google.com", printText: "google-plus" },
        ];

});

myApp.controller('conmsgController', function ($scope){
         var succerr = [
            {id: "success", title: "Thank you", subtitle: "Your message is successfully sent..."},
            {id: "error", title: "Sorry !", subtitle: "Something went wrong "},
        ];
        $scope.succerr = succerr;
});

//govnservices controllers 

myApp.controller('productController',[function () {
    var self = this;
    self.head = "Our Products";
    self.products = [
        {
         image: 'img/icon/model1.jpg',
         h1: 'Wi-Fi Hotspot and 3G/4G Data Cards', 
         p1: 'Lorem ipsum dolor sit amet,consectetur',
         p2: 'adipisicing elit, sed do eiusmod', 
         p3: '', 
         feature: [
                    {name: 'Pragyawan offers a range of wireless routers and data cards that act as a mobile Wi-Fi hotspot, working via sim cards.', keys: ''},
                    {name: 'These devices are designed to increase consumer mobility. PTPL offers two types of devices : running via USB and running via rechargeable battery.',keys: ''},
                    {name: 'Supplied mainly to the B2B segment, we work with leading ODMs and OEMs to provide right solutions to our clients.',keys: ''},
                ]
        },
        {
         image: 'img/icon/model2.jpg',
         h1: 'Mobile Phone Chargers',
         p1: 'Lorem ipsum dolor sit amet,consectetur',
         p2: 'adipisicing elit, sed do eiusmod', 
         p3: '', 
         feature: [
                    {name: 'USB ports for connecting cable.', keys: ''},
                    {name: 'Various versions of chargers offered by Ramptel include:',
                        keys:[
                            {names: 'Input: 100-270V; Output: 5V DC/1.0 Amps'},
                            {names: 'Input: 100-270V; Output: 5V DC/1.5 Amps'},
                            {names: 'Input: 100-270V; Output: 5V DC/2.0 Amps'},
                        ]},
                    {name: 'Data/charging cable of 1 meter length.', keys: ''},
                    {name: 'Available for all types of phones​.', keys: ''},
                    {name: 'Multiple colors available​.', keys: ''},
                ]
        },
        
        {
         image: 'img/icon/model6.jpg',
         h1: 'ADSL2+ Modems​',
         p1: 'Lorem ipsum dolor sit amet,consectetur',
         p2: 'adipisicing elit, sed do eiusmod',
         p3: '', 
         feature: [
                    {name: 'Broadcom DSL and Wireless (Wi-Fi) Chipsets (Broadcom is world\'s most reliable, leading chipmaker).', keys: ''},
                    {name: '802.11n-compliant devices that combines the function of high speed ADSL2+ modem, wireless router and 4-port switch.',keys: ''},
                    {name: '8x faster wireless speed and 6x farther range than 802.11g.',keys: ''},
                    {name: 'Supports the faster ADSL2+ standards.',keys: ''},
                ]
        },
       
        
    ];
    self.products2 = [
         {
         image: 'img/icon/model3.jpg',
         h1: 'Mobile Cables',
         p1: 'Lorem ipsum dolor sit amet,consectetur',
         p2: 'adipisicing elit, sed do eiusmod',
         p3: '', 
         feature: [
                    {name: '340MHz maximum signal bandwidth, 10.2 Gbps maximum TDMS bandwidth.', keys: ''},
                    {name: '24K Gold plated connectors​.',keys: ''},
                    {name: 'Oxygen-free copper or tinned conductor with 99.99% purity.',keys: ''},
                ]
        },
        {
         image: 'img/icon/model7.jpg',
         h1: 'Wireless Routers​',
         p1: 'Lorem ipsum dolor sit amet,consectetur',
         p2: 'adipisicing elit, sed do eiusmod',
         p3: '', 
         feature: [
                    {name: 'Signal amplifier technology, which doubles wall penetrating ability.', keys: ''},
                    {name: 'WiFi timer switch ensures greenluma',keys: ''},
                    {name: 'Bandwidth control and high level wireless security.',keys: ''},
                ]
        },
         {
         image: 'img/icon/model8.jpg',
         h1: 'Electrical Extension Boards​',
         p1: 'Lorem ipsum dolor sit amet,consectetur',
         p2: 'adipisicing elit, sed do eiusmod',
         p3: '', 
         feature: [
                    {name: 'Integrated brass bar with thickness of 0.5 mm.',keys: ''},
                    {name: '10 amp, 2,500 watt rating.',keys: ''},
                    {name: '0.75 mm copper wire of three cores.',keys: ''},
                    {name: 'Push button switch with silver contact point.',keys: ''},
                    {name: '5 years warranty.',keys: ''},
                ]
        },
    ];
    self.products3 = [
        {
         image: 'img/icon/model4.jpg',
         h1: 'ONT/ONU, Switches, and Other Back-end Products​', 
         p1: 'Lorem ipsum dolor sit amet,consectetur',
         p2: 'adipisicing elit, sed do eiusmod', 
         p3: '', 
         feature: [
                    {name: 'We offer a range of products targeted to meet the back-end requirements of Internet Service Providers (ISPs)​.', keys: ''},
                    {name: 'While we mainly focus on developing specific solutions based on client needs, we have also launched standardized products to meet requirement of SME who can not make ‘big-ticket’ purchases​.', keys: ''},
                    {name: 'We have been procuring these products from some of the leading design houses and manufacturers in China​.', keys: ''},
                ]
        },
       {
         image: 'img/icon/model5.jpg',
         h1: 'Tablets​', 
         p1: 'Lorem ipsum dolor sit amet,consectetur',
         p2: 'adipisicing elit, sed do eiusmod', 
         p3: '', 
         feature: [
                    {name: 'Pragyawan entered into the Tablet computing devices business in 2013, primarily catered to the retail market.', keys: ''},
                    {name: 'Since then we have been supplying tablets in bulk quantities to BSNL & MTNL for their retail customers​.',keys: ''},
                    {name: 'We also supply tablets to large corporations, apart from developing in-house design and manufacturing capabilities, we have also partnered with some of world’s leading tablet manufacturers such as Hewlett-Packard (HP)​.', keys: ''},
                    {name: 'Our key selling channel partners include BSNL Franchises, MTNL Sanchaar Haats & our Distributers, Dealers and Retailers.',keys: ''},
                ]
        },
    ];
}]);

myApp.controller('aboutController',[function (){
    var self = this;
    self.head = 'Our Mission';
    self.mission = [
        {image: 'img/icon/laptop.png', text: 'Drive the new era through innovation and integration of state of the art technologies.'},
        {image: 'img/icon/paperbill.png', text: 'Deliver affordable products to our customers, along with ease of operations.'},
        {image: 'img/icon/clock.png', text: 'Focus on quality and on time delivery for all products and services.'},
        {image: 'img/icon/linechart.png', text: 'To be among the best service, support and maintenance company in India in all the industries where we have our presence.'},
    ]; 
    self.stat = [
        {count: '500+', p1: 'Happy Clients', p2: ''},
        {count: '20+', p1: 'Years of Industry', p2: 'Experience'},
        {count: '50+', p1: 'Employees', p2: ''},
        {count: '100+', p1: 'Successful', p2: 'Projects'},
    ];
}]);

myApp.controller('teamController',["$scope",function ($scope){
    var self = this;
    self.head = 'Management Team​';
    self.para = 'Our core team has 15+ years of experience in the industry where we are present, including execution of large scale projects for different types of clients​.';
    self.members = [
        {image: 'img/icon/man.jpg', name: 'Puneet Jain​', title: 'President', about: 'With 20+ years of experience in the telecom industry, Puneet is a dynamic entrepreneur—having developed several leading telecom companies(combined turnover of INR 10 billion)​.He has spearheaded some of the largest telecom infrastructure roll-outs for leading Indian telecom service providers(such as BSNL)​.In his position as President, Puneet is responsible for overall business growth and managing key client relationships​.'},
        {image: 'img/icon/man.jpg', name: 'Rahul Garg', title: 'CEO', about: 'Rahul has been associated with Puneet Jain for about 15+ years and have donned various hats during his carrier​.At Pragyawan, Rahul is the cornerstone of the company’s operations and is responsible for smooth operations of all business segments of the company.His key responsibilities include managing clients, overlooking financial operations, ensuring smooth execution of projects and laisioning with government organisations​.​'},
        {image: 'img/icon/man.jpg', name: 'Vineet Jain', title: 'TBF', about: 'TBF'},
        {image: 'img/icon/man.jpg', name: 'Kalpav Shah', title: 'TBF', about: 'TBF'},
        {image: 'img/icon/man.jpg', name: 'Chandresh Baid', title: 'Vice President-Overseas Sales', about: 'Chandresh is responsible for heading business development and managing client relationships for our overseas clients, based mainly in the US and Europe​.Prior to joining, Pragyawan, Chandresh has worked with Pitney Bowes for ~5 years as Manager–Product Development. He was also associated with CSC for ~10 years in various roles—most recent being Project Manager-Application Development​'},
        {image: 'img/icon/man.jpg', name: 'Manoj Kumar', title: 'Chief Technical Officer', about: 'With more than 15 years of experience, Manoj is the head of Pragyawan’s technical department​.His key responsibilities include identifying and developing new technologies, improving existing product technologies and troubleshooting; he is also the technical lead for all our infrastructure deployment projects​.Further, Manoj lead our ‘Government’ business segment and also manages all imports of the company​'},
        {image: 'img/icon/man.jpg', name: 'Gautam Prakash Singh', title: 'Senior Manager-Business Development', about: 'Gautam is the head for the company’s ‘Business & Consumer’ business segment​.His key responsibilities includes, driving sales, developing new marketing channels, identifying new product opportunities and managing client relationships​.Prior to joining Pragyawan, Gautam has worked for 10 years with leading IT and Telecom companies such as Cognizant, CSC and TCS​'},
        {image: 'img/icon/man.jpg', name: 'Shantanu Jain', title: 'Senior Manager-Business Development', about: 'Shantanu leads the company’s ‘Services’ business segment; he also works closely with other members of the management team in business development, identifying new product opportunities, and overlooking project execution​.Shantanu has a 8+ years of experience in working with a leading business research and consulting company—The Smart Cube'},
        {image: 'img/icon/man.jpg', name: 'Abhishek Kumar', title: 'Senior Manager-Technical', about: 'Abhishek works closely with Manoj and overlooks all the technical aspects of our operations—from understanding clients’ technical requirements to identifying suitable vendors and completing the delivery process​.He also is responsible for execution of ‘Government’ projects and looking after company’s import activities​.Abhishek has 10+ years of experience as ‘Project Manager’ in India’s leading IT & Telecom companies such as Lava, Itel and Teracom​'},
        {image: 'img/icon/man.jpg', name: 'Devashish Das Gupta', title: 'Consultant-Marketing strategy', about: 'One of the most eminent professors in the IIM community and a well-known name in the corporate circle, Devashish Das Gupta is a consultant to Pragyawan Group, helping the organization in developing its marketing strategy and ensuring that a robust marketing plan is followed​.Devashish Das Gupta has been associated with IIM Lucknow for more than 13 years now, having started his career in 1994​.His areas of consulting expertise include  Business Process Reengineering, Brand Image Revitalisation, Service Quality lead brand promotions, Designing and Developing of Academic programmes, Designing Service Products​'},
        {image: 'img/icon/man.jpg', name: 'Devesh Baid', title: 'Financial Controller', about: 'TBF'},
    ];

    $scope.showHide = function(index) {
        for (var i = index; i <= 10; i++) {
            var down = document.getElementById('round-'+i);
            var direction = document.getElementById('direction-'+i);
            if (down.style.top == '71px') {
              down.style.top = "201px";
              direction.src = 'img/icon/uparrow.png';
            } else {
              down.style.top = "71px";
              direction.src = 'img/icon/arrowdown.png';
            }        
            break;
        };
    };

}]);

myApp.controller('pagController',[function (){
    var self = this;
    self.head = 'Pragyawan at a Glance';
    self.para1 = 'Pragyawan Global is a diversified group providing a range of products and services to various industries such as Telecom & Wireless, Mobile Devices, Electrical, IT, Leather, Offshoring Services and Real Estate​.We strive to provide comprehensive solutions to our clients which mainly include end-consumers, SMEs, large Indian and multi-national corporations, and government​.';
    self.para3 = 'Pragyawan branches in other parts of world :';
    self.para2 = 'Pragyawan Global is the parent company which comprises of three other companies — Ramptel Solutions, GlocalView and Pragyawan Technologies — each focusing on a specific area of operation. ​Having separate companies allows the group to have flexibility of operations and quicker decision making for each of the specific business area, while leveraging on the synergies created by interconnectedness of each of these companies.';
    self.para4 = 'A Small Introduction..';
    self.image2 = 'img/icon/pag.jpg';
    self.items = [
        {image: 'img/icon/calendar.png', h2: 'Founded - 2011'},
        {image: 'img/icon/users.png', h2: 'Employees - 50+'},
        {image: 'img/icon/location.png', h2: 'Headquarters - Noida, India'},
    ];
    self.ourbranches = [
        {abt: 'American sales office - Washington, US'},
        {abt: 'European Sales office - Oslo, Norway'},
        {abt: 'Design house & Manufacturing - Shenzhen, China'},
        {abt: 'Sales Office - Hong Kong'},
    ];
}]);

myApp.controller('pbhController',[function (){
    var self = this;
    self.head = 'Pragyawan – A Brief History';
    self.image = 'img/icon/hinfo.png';
}]);

myApp.controller('projController',[function (){
    var self = this;
    self.head = 'Our Key Projects';
    self.para1 = 'This is one of the core segments of Pragyawan and form one of our greatest strengths. This segment is mainly catered by Pragyawan Technologies. Since its inception, Pragyawan has won and successfully executed (individually and many time in partnership with other companies) government projects worth more that $80 million.';
    self.h3 = 'Key Government Projects Undertaken by Us.';
    self.projects = [
        {h2: 'Telecom Turnkey Project',
         h3: 'Supply, Installation, Comissioning and Maintenance of Telecom Equipment.', 
         h4: 'Pragyawan has successfully completed many projects over the years where we have undertaken end-to-end deployment and maintenance of back-end telecom equipment on a turnkey basis.', 
         ex: 'Key examples include:',
         keys: [
            {name: 'For ONGC, we deployed equipment such Wi-Max Radios, Mast Towers, Routers, Switches, UPS, and Antenna at offshore sites in North East, Gujarat and Rajasthan.'},
            {name: 'For BSNL, we played a key role in installation and maintenance of GEPON and GPON equipment on a PAN-India level.'},
            {name: 'For BSNL, we were involved in various aspects of FTTH installation; these includes activities such as site survey, BOQ preparation, installation of active infrastructure such as OLT, ONT, servers and passive infrastructure such as splitters, indoor cabling, etc.'},
            ]
        },
        {h2: 'Telecom Equipment Supply',
         h3: 'Supply and After Sales Support of Telecom Equipment.', 
         h4: 'We have supplied millions of quantities of telecom equipment such as ADSL Modems, Routers, CLIP Phones, Tablets and Biometric Scanners to government organizations.', 
         ex: 'Key examples include:',
         keys: [
            {name: 'We supplied more than 2 million ADSL2+ Modems to BSNL. These were supplied across the country and formed the mainstay of BSNL’s broadband connection at customer’s premise.'},
            {name: 'To BSNL, we supplied about 1 million CLIP phones across the country; these were custom-made phones and the contract included a after sales-support of 2 years.'},
            {name: 'We are currently competing for various tenders that include supply of tablets, biometric scanners and POS devices.'},
            {name: 'A follow-up tender for the aforementioned project is also likely to come and Pragyawan is one of the front-runners.'},
            ]
        },
        {h2: 'Other Turnkey Projects',
         h3: 'Supply, Installation, Commissioning and Maintenance of equipment such as CCTVs, security devices, IPTV, Intercom, etc.', 
         h4: '', 
         ex: 'Key Points Include:',
         keys: [
            {name: 'Leveraging on our project execution experience, we have participated in many projects involving commissioning of different IT-related equipments.'},
            {name: 'For example, for Indian Railways, we installed entire railway station security systems (imported from Israel) across multiple states.'},
            ]
        },
        {h2: 'Leather Supply ',
         h3: 'Supply of Leather and Related Products.', 
         h4: '', 
         ex: 'Key Points Include:',
         keys: [
            {name: 'Some of Pragyawan’s key strengths include import of products, supply/distribution in the Indian market and laisioning with government agencies.'},
            {name: 'Leveraging on the aforementioned strengths, the company decided to diversify into a new territory — Leather Products.'},
            {name: 'We are currently in the midst of executing a leather supply contract to FDDI across its various campuses in the country. The project is worth INR 800 Million.'},
            ]
        },
    ]; 
}]);

myApp.controller('servController',[function (){
    var self = this;
    self.head = 'Services';
    self.services = [
        {h2: 'Mandatory Approval Services',
         h4: 'This division primarily caters to the telecom industry (for both products and services). Under this category, we offer complete support to our clients in getting all the required approvals to run their business.',
         p1: 'Key Services:',
         image: 'img/icon/stamp.png',
         offers: [
            {name: 'Type & Interface Approval: The approval is given to the Telecom equipment that will be interfaced with the Public Switched Network in India as per the TEC standards and specifications'},
            {name: 'DoT Licensing Services: Key services include ETA Service, IP-1 License Services, ISP Consulting Services, DLP Licensing Services, Free Band Approval Licensing Services, etc.'},
            {name: 'BIS Approval Services: We specialize in providing end-to-end services a company may need to get BIS approval. This includes up to date information on regulations, liasioning with government, undertaking the required testing, and finally getting the certificate.'},
         ],
        },
        {h2: 'Business Offshoring Services',
         h4: 'Utilizing the global trends and competency, we help the local business succeed. We believe that future lies in capitalizing on the core business and outsource the non-core business to partners/vendors/3rd party service providers ',
         p1: 'Key Services:',
         image: 'img/icon/offshore.png',
         offers: [
            {name: 'Advisory and Consultancy Services: Includes services such as outsourcing strategy definition and execution, establish governance for sourcing deliveries, organization maturity assessment, portfolio assessment and optimization, cross culture training, etc.'},
            {name: 'Delivery Management Services: Key services include project and program management, change management, stakeholder management, contract management, vendor selection and management.'},
            {name: 'Application Lifecycle Management Services: We specialize in providing end-to-end services related to ALMS such as application development, application management, product development, mobile apps and test factory.'},
         ],
        },
        
    ];
    self.services2 = [
        {h2: 'Business Strategy Consulting',
         h4: 'It has been working with leading organizations in improving their business strategies, solving operational issues and bring business efficiencies.',
         p1: 'Key Services:',
         p2: 'Key Industries',
         image: 'img/icon/business.png',
         offers2: [
            {name: 'Marketing and Brand Strategy'},
            {name: 'Go-to-Market Strategy'},
            {name: 'Sales and Channel Effectiveness '},
            {name: 'Procurement'},
         ],
         projects2: [
            {name1: 'Telecom'},
            {name1: 'Real Estate'},
            {name1: 'Leather'},
            {name1: 'Electricals & IT'},
         ],
         h3: 'Project Example – Marketing Strategy for a Telecom Operator.',
         p3: 'PTPL worked with one of the India’s largest telecom company to help improve their subscriber base. The strategy, designed and executed by PTPL,resulted in 64% increase in new connections during the said period.',
        },
        {h2: 'Business Research',
         h4: 'Pragyawan has developed strong expertise in provided deep, insight-rich business research that help client in important decision making.',
         p1: 'These include conducting primary and secondary research to prepare reports on topics such as:',
         p2: '',
         image: 'img/icon/businessresearch.png',
         offers2: [
            {name: 'Commodity Price Tracking'},
            {name: 'Supplier Identification'},
            {name: 'Market Study and Size Estimation '},
            {name: 'Should-Cost Analysis'},
            {name: 'Spend Analysis '},
            {name: 'Price Forecasting'},
         ],
         projects2: '',
         h3: '',
         p3: '',
        },
    ];
    self.services3 = [
        {h2: 'Business Initiation Services',
         h4: 'Pragyawan provides end-to-end services to foreign and Indian entities to set-up their business in India, primarily in the telecom, IT, electrical and real-estate industries.',
         p1: 'Key Services:',
         p2: 'Key Projects:',
         image: 'img/icon/photos.png',
         offers2: [
            {name: 'Market Research'},
            {name: 'Government Approval'},
            {name: 'Business Registration'},
            {name: 'Office set-up'},
            {name: 'Land Identification'},
            {name: 'Supply Chain Management'},
            {name: 'Distribution Channel'},
            {name: 'Raw Material Purchase'},
            {name: 'Loans and Financing'},
            {name: 'Import/Export'},
            {name: 'Laisioning'},
            {name: 'Accounting'},
         ],
         projects2: [
            {name1: 'We are currently working for a leading Chinese mobile charger manufacturing company to establish their manufacturing facility in India. Phase-1 of the project included land identification, market research, preparation for getting required approvals etc.'},
            {name1: 'Helped a leading power cable manufacturer in India to establish their division for fiber cable, from setting of production facilities to getting government tenders. Our client became one of the largest suppliers of fiber cable to government within just a span of 5-6 years.'},
            {name1: 'We are helping a leading Chinese real estate company to establish their presence in India. Scope of work includes setting-up their office in Delhi & Mumbai, engaging with suitable real estate brokers in India and developing an investment strategy for the company till 2020'},
         ],
        },
    ];
}]);



