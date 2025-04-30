export const roadmapData = {
    "web-development": {
      title: "Web Development Roadmap",
      description: "A comprehensive guide to becoming a full-stack web developer",
      sections: [
        {
          title: "Fundamentals",
          items: [
            {
              name: "HTML & CSS Basics",
              description: "Learn the building blocks of the web: HTML for structure and CSS for styling.",
              difficulty: "beginner",
              resources: [
                {
                  title: "MDN Web Docs - HTML",
                  url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
                  type: "article",
                },
                {
                  title: "CSS Crash Course For Absolute Beginners",
                  url: "https://www.youtube.com/watch?v=yfoY53QXEnI",
                  type: "video",
                },
              ],
            },
            {
              name: "JavaScript Fundamentals",
              description:
                "Master the core concepts of JavaScript including variables, functions, objects, and DOM manipulation.",
              difficulty: "beginner",
              resources: [
                {
                  title: "JavaScript.info",
                  url: "https://javascript.info/",
                  type: "article",
                },
                {
                  title: "Eloquent JavaScript",
                  url: "https://eloquentjavascript.net/",
                  type: "book",
                },
              ],
            },
            {
              name: "Responsive Design",
              description: "Learn to create websites that work well on all devices and screen sizes.",
              difficulty: "beginner",
              resources: [
                {
                  title: "Responsive Web Design Fundamentals",
                  url: "https://web.dev/responsive-web-design-basics/",
                  type: "article",
                },
              ],
            },
            {
              name: "Version Control (Git)",
              description: "Learn to track and manage changes to your codebase using Git.",
              difficulty: "beginner",
              resources: [
                {
                  title: "Git & GitHub Crash Course",
                  url: "https://www.youtube.com/watch?v=RGOj5yH7evk",
                  type: "video",
                },
              ],
            },
          ],
        },
        {
          title: "Frontend Development",
          items: [
            {
              name: "JavaScript Frameworks (React)",
              description: "Learn React, a popular JavaScript library for building user interfaces.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "React Documentation",
                  url: "https://reactjs.org/docs/getting-started.html",
                  type: "article",
                },
                {
                  title: "Full React Course",
                  url: "https://www.youtube.com/watch?v=4UZrsTqkcW4",
                  type: "video",
                },
              ],
            },
            {
              name: "State Management",
              description: "Learn to manage application state using tools like Redux, Context API, or Zustand.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "Redux Toolkit Documentation",
                  url: "https://redux-toolkit.js.org/introduction/getting-started",
                  type: "article",
                },
              ],
            },
            {
              name: "CSS Frameworks & Preprocessors",
              description: "Explore Tailwind CSS, SASS, and other tools to enhance your styling workflow.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "Tailwind CSS Documentation",
                  url: "https://tailwindcss.com/docs",
                  type: "article",
                },
              ],
            },
            {
              name: "TypeScript",
              description: "Add static typing to JavaScript to improve code quality and developer experience.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "TypeScript Handbook",
                  url: "https://www.typescriptlang.org/docs/handbook/intro.html",
                  type: "article",
                },
              ],
            },
            {
              name: "Testing (Jest, React Testing Library)",
              description: "Learn to write tests for your frontend applications to ensure reliability.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "Testing React Applications",
                  url: "https://jestjs.io/docs/tutorial-react",
                  type: "article",
                },
              ],
            },
          ],
        },
        {
          title: "Backend Development",
          items: [
            {
              name: "Node.js Fundamentals",
              description: "Learn to use JavaScript on the server with Node.js.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "Node.js Documentation",
                  url: "https://nodejs.org/en/docs/",
                  type: "article",
                },
              ],
            },
            {
              name: "Express.js",
              description: "Build web servers and APIs with the most popular Node.js framework.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "Express.js Documentation",
                  url: "https://expressjs.com/",
                  type: "article",
                },
              ],
            },
            {
              name: "RESTful API Design",
              description: "Learn principles and best practices for designing RESTful APIs.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "RESTful API Design Best Practices",
                  url: "https://blog.restcase.com/restful-api-design-13-best-practices-to-make-your-api-successful/",
                  type: "article",
                },
              ],
            },
            {
              name: "Authentication & Authorization",
              description: "Implement user authentication and authorization in your applications.",
              difficulty: "advanced",
              resources: [
                {
                  title: "JWT Authentication Tutorial",
                  url: "https://www.youtube.com/watch?v=7Q17ubqLfaM",
                  type: "video",
                },
              ],
            },
            {
              name: "Databases (SQL & NoSQL)",
              description: "Learn to work with different types of databases like PostgreSQL and MongoDB.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "SQL Tutorial",
                  url: "https://www.w3schools.com/sql/",
                  type: "article",
                },
                {
                  title: "MongoDB University",
                  url: "https://university.mongodb.com/",
                  type: "course",
                },
              ],
            },
          ],
        },
        {
          title: "Full-Stack Development",
          items: [
            {
              name: "Next.js",
              description: "Build full-stack React applications with server-side rendering and API routes.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "Next.js Documentation",
                  url: "https://nextjs.org/docs",
                  type: "article",
                },
                {
                  title: "Next.js Crash Course",
                  url: "https://www.youtube.com/watch?v=mTz0GXj8NN0",
                  type: "video",
                },
              ],
            },
            {
              name: "GraphQL",
              description: "Learn this query language for APIs and a runtime for executing those queries.",
              difficulty: "advanced",
              resources: [
                {
                  title: "GraphQL Documentation",
                  url: "https://graphql.org/learn/",
                  type: "article",
                },
              ],
            },
            {
              name: "Deployment & DevOps",
              description: "Learn to deploy your applications using platforms like Vercel, Netlify, and AWS.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "Deploying Next.js to Vercel",
                  url: "https://nextjs.org/docs/deployment",
                  type: "article",
                },
              ],
            },
            {
              name: "Performance Optimization",
              description: "Techniques to make your web applications fast and efficient.",
              difficulty: "advanced",
              resources: [
                {
                  title: "Web Performance Optimization",
                  url: "https://web.dev/fast/",
                  type: "article",
                },
              ],
            },
            {
              name: "Progressive Web Apps (PWAs)",
              description: "Create web applications that work offline and provide a native-like experience.",
              difficulty: "advanced",
              resources: [
                {
                  title: "PWA Documentation",
                  url: "https://web.dev/progressive-web-apps/",
                  type: "article",
                },
              ],
            },
          ],
        },
      ],
    },
    "ai-ml": {
      title: "AI & Machine Learning Roadmap",
      description: "A structured path to becoming proficient in artificial intelligence and machine learning",
      sections: [
        {
          title: "Mathematics Fundamentals",
          items: [
            {
              name: "Linear Algebra",
              description: "Master vectors, matrices, and linear transformations - the foundation of ML algorithms.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "Essence of Linear Algebra",
                  url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab",
                  type: "video",
                },
                {
                  title: "Linear Algebra for Machine Learning",
                  url: "https://www.coursera.org/learn/linear-algebra-machine-learning",
                  type: "course",
                },
              ],
            },
            {
              name: "Calculus",
              description: "Learn derivatives, integrals, and optimization techniques used in training ML models.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "Essence of Calculus",
                  url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr",
                  type: "video",
                },
              ],
            },
            {
              name: "Probability & Statistics",
              description: "Understand probability distributions, hypothesis testing, and statistical inference.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "Introduction to Probability and Statistics",
                  url: "https://www.edx.org/course/introduction-to-probability-and-statistics",
                  type: "course",
                },
              ],
            },
          ],
        },
        {
          title: "Programming & Tools",
          items: [
            {
              name: "Python Programming",
              description: "Learn Python, the most popular language for AI and ML development.",
              difficulty: "beginner",
              resources: [
                {
                  title: "Python for Everybody",
                  url: "https://www.py4e.com/",
                  type: "course",
                },
              ],
            },
            {
              name: "Data Manipulation (NumPy, Pandas)",
              description: "Master libraries for efficient data manipulation and analysis.",
              difficulty: "beginner",
              resources: [
                {
                  title: "NumPy Quickstart",
                  url: "https://numpy.org/doc/stable/user/quickstart.html",
                  type: "article",
                },
                {
                  title: "Pandas Tutorial",
                  url: "https://pandas.pydata.org/docs/getting_started/index.html",
                  type: "article",
                },
              ],
            },
            {
              name: "Data Visualization (Matplotlib, Seaborn)",
              description: "Learn to create insightful visualizations to understand and communicate data patterns.",
              difficulty: "beginner",
              resources: [
                {
                  title: "Matplotlib Tutorials",
                  url: "https://matplotlib.org/stable/tutorials/index.html",
                  type: "article",
                },
              ],
            },
            {
              name: "Jupyter Notebooks",
              description: "Master this interactive computing environment for data science and ML experimentation.",
              difficulty: "beginner",
              resources: [
                {
                  title: "Jupyter Notebook Tutorial",
                  url: "https://www.dataquest.io/blog/jupyter-notebook-tutorial/",
                  type: "article",
                },
              ],
            },
          ],
        },
        {
          title: "Machine Learning Fundamentals",
          items: [
            {
              name: "Supervised Learning",
              description: "Learn regression, classification, decision trees, and other supervised learning algorithms.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "Machine Learning by Andrew Ng",
                  url: "https://www.coursera.org/learn/machine-learning",
                  type: "course",
                },
              ],
            },
            {
              name: "Unsupervised Learning",
              description: "Explore clustering, dimensionality reduction, and other unsupervised techniques.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "Unsupervised Learning Tutorial",
                  url: "https://scikit-learn.org/stable/unsupervised_learning.html",
                  type: "article",
                },
              ],
            },
            {
              name: "Model Evaluation & Validation",
              description: "Learn techniques to evaluate model performance and avoid overfitting.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "Model Evaluation in Scikit-Learn",
                  url: "https://scikit-learn.org/stable/modules/model_evaluation.html",
                  type: "article",
                },
              ],
            },
            {
              name: "Feature Engineering",
              description: "Master the art of creating effective features to improve model performance.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "Feature Engineering for Machine Learning",
                  url: "https://www.oreilly.com/library/view/feature-engineering-for/9781491953235/",
                  type: "book",
                },
              ],
            },
          ],
        },
        {
          title: "Deep Learning",
          items: [
            {
              name: "Neural Networks Fundamentals",
              description:
                "Understand the building blocks of neural networks: neurons, activation functions, and backpropagation.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "Deep Learning Specialization",
                  url: "https://www.coursera.org/specializations/deep-learning",
                  type: "course",
                },
              ],
            },
            {
              name: "Convolutional Neural Networks (CNNs)",
              description: "Learn about CNNs for image processing and computer vision tasks.",
              difficulty: "advanced",
              resources: [
                {
                  title: "CS231n: Convolutional Neural Networks",
                  url: "http://cs231n.stanford.edu/",
                  type: "course",
                },
              ],
            },
            {
              name: "Recurrent Neural Networks (RNNs)",
              description: "Explore RNNs, LSTMs, and GRUs for sequential data like text and time series.",
              difficulty: "advanced",
              resources: [
                {
                  title: "Understanding LSTM Networks",
                  url: "https://colah.github.io/posts/2015-08-Understanding-LSTMs/",
                  type: "article",
                },
              ],
            },
            {
              name: "Transformers & Attention Mechanisms",
              description: "Learn about the architecture behind modern NLP models like BERT and GPT.",
              difficulty: "advanced",
              resources: [
                {
                  title: "The Illustrated Transformer",
                  url: "https://jalammar.github.io/illustrated-transformer/",
                  type: "article",
                },
              ],
            },
            {
              name: "Deep Learning Frameworks (PyTorch, TensorFlow)",
              description: "Master popular frameworks for building and training neural networks.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "PyTorch Tutorials",
                  url: "https://pytorch.org/tutorials/",
                  type: "article",
                },
                {
                  title: "TensorFlow Tutorials",
                  url: "https://www.tensorflow.org/tutorials",
                  type: "article",
                },
              ],
            },
          ],
        },
        {
          title: "Advanced Topics",
          items: [
            {
              name: "Reinforcement Learning",
              description: "Learn how agents can learn optimal behaviors through interaction with environments.",
              difficulty: "advanced",
              resources: [
                {
                  title: "Reinforcement Learning: An Introduction",
                  url: "http://incompleteideas.net/book/the-book-2nd.html",
                  type: "book",
                },
              ],
            },
            {
              name: "Natural Language Processing (NLP)",
              description: "Explore techniques for processing and understanding human language.",
              difficulty: "advanced",
              resources: [
                {
                  title: "Natural Language Processing with PyTorch",
                  url: "https://www.oreilly.com/library/view/natural-language-processing/9781491978221/",
                  type: "book",
                },
              ],
            },
            {
              name: "Computer Vision",
              description: "Learn techniques for image and video analysis and understanding.",
              difficulty: "advanced",
              resources: [
                {
                  title: "PyTorch Computer Vision Tutorial",
                  url: "https://pytorch.org/tutorials/beginner/transfer_learning_tutorial.html",
                  type: "article",
                },
              ],
            },
            {
              name: "Generative Models",
              description: "Explore GANs, VAEs, and diffusion models for generating new content.",
              difficulty: "advanced",
              resources: [
                {
                  title: "GAN Lab",
                  url: "https://poloclub.github.io/ganlab/",
                  type: "article",
                },
              ],
            },
            {
              name: "MLOps & Deployment",
              description: "Learn to deploy, monitor, and maintain ML models in production.",
              difficulty: "advanced",
              resources: [
                {
                  title: "MLOps: Machine Learning Operations",
                  url: "https://ml-ops.org/",
                  type: "article",
                },
              ],
            },
          ],
        },
      ],
    },
    "mobile-dev": {
      title: "Mobile Development Roadmap",
      description: "A guide to becoming a proficient mobile application developer",
      sections: [
        {
          title: "Fundamentals",
          items: [
            {
              name: "Programming Basics",
              description: "Learn core programming concepts that apply across mobile platforms.",
              difficulty: "beginner",
              resources: [
                {
                  title: "Programming Fundamentals",
                  url: "https://www.freecodecamp.org/news/programming-fundamentals/",
                  type: "article",
                },
              ],
            },
            {
              name: "UI/UX Design Principles",
              description: "Understand the principles of creating user-friendly mobile interfaces.",
              difficulty: "beginner",
              resources: [
                {
                  title: "Mobile UI Design Fundamentals",
                  url: "https://www.nngroup.com/articles/mobile-ux/",
                  type: "article",
                },
              ],
            },
            {
              name: "Version Control (Git)",
              description: "Learn to track and manage changes to your codebase using Git.",
              difficulty: "beginner",
              resources: [
                {
                  title: "Git & GitHub Crash Course",
                  url: "https://www.youtube.com/watch?v=RGOj5yH7evk",
                  type: "video",
                },
              ],
            },
          ],
        },
        {
          title: "Cross-Platform Development",
          items: [
            {
              name: "React Native",
              description: "Build native mobile apps using JavaScript and React.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "React Native Documentation",
                  url: "https://reactnative.dev/docs/getting-started",
                  type: "article",
                },
                {
                  title: "React Native Crash Course",
                  url: "https://www.youtube.com/watch?v=0-S5a0eXPoc",
                  type: "video",
                },
              ],
            },
            {
              name: "Flutter",
              description: "Google's UI toolkit for building natively compiled applications from a single codebase.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "Flutter Documentation",
                  url: "https://flutter.dev/docs",
                  type: "article",
                },
                {
                  title: "Flutter Crash Course",
                  url: "https://www.youtube.com/watch?v=1gDhl4leEzA",
                  type: "video",
                },
              ],
            },
            {
              name: "Ionic",
              description: "Build cross-platform mobile apps using web technologies like HTML, CSS, and JavaScript.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "Ionic Documentation",
                  url: "https://ionicframework.com/docs",
                  type: "article",
                },
              ],
            },
          ],
        },
        {
          title: "Native Android Development",
          items: [
            {
              name: "Kotlin Programming",
              description: "Learn the modern language for Android app development.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "Kotlin Documentation",
                  url: "https://kotlinlang.org/docs/home.html",
                  type: "article",
                },
                {
                  title: "Android Kotlin Fundamentals",
                  url: "https://developer.android.com/courses/kotlin-android-fundamentals/overview",
                  type: "course",
                },
              ],
            },
            {
              name: "Android Studio & SDK",
              description: "Master the official IDE and development kit for Android.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "Android Studio User Guide",
                  url: "https://developer.android.com/studio/intro",
                  type: "article",
                },
              ],
            },
            {
              name: "Android UI Development",
              description: "Learn to create responsive and attractive Android user interfaces.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "Material Design for Android",
                  url: "https://developer.android.com/guide/topics/ui/look-and-feel",
                  type: "article",
                },
              ],
            },
            {
              name: "Android Jetpack",
              description: "Use this suite of libraries to follow best practices and reduce boilerplate code.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "Android Jetpack Documentation",
                  url: "https://developer.android.com/jetpack",
                  type: "article",
                },
              ],
            },
          ],
        },
        {
          title: "Native iOS Development",
          items: [
            {
              name: "Swift Programming",
              description: "Learn Apple's modern programming language for iOS development.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "Swift Documentation",
                  url: "https://swift.org/documentation/",
                  type: "article",
                },
                {
                  title: "Swift Programming Tutorial",
                  url: "https://developer.apple.com/tutorials/swiftui",
                  type: "course",
                },
              ],
            },
            {
              name: "Xcode & iOS SDK",
              description: "Master Apple's IDE and development kit for iOS.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "Xcode Documentation",
                  url: "https://developer.apple.com/documentation/xcode",
                  type: "article",
                },
              ],
            },
            {
              name: "SwiftUI",
              description: "Learn Apple's modern declarative framework for building user interfaces.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "SwiftUI Tutorials",
                  url: "https://developer.apple.com/tutorials/swiftui",
                  type: "article",
                },
              ],
            },
            {
              name: "UIKit",
              description: "Master the traditional framework for building iOS interfaces.",
              difficulty: "advanced",
              resources: [
                {
                  title: "UIKit Documentation",
                  url: "https://developer.apple.com/documentation/uikit",
                  type: "article",
                },
              ],
            },
          ],
        },
        {
          title: "Advanced Topics",
          items: [
            {
              name: "State Management",
              description: "Learn patterns and libraries for managing application state.",
              difficulty: "advanced",
              resources: [
                {
                  title: "Redux for React Native",
                  url: "https://redux.js.org/introduction/getting-started",
                  type: "article",
                },
              ],
            },
            {
              name: "Offline Support & Data Persistence",
              description: "Implement strategies for apps to work offline and persist data locally.",
              difficulty: "advanced",
              resources: [
                {
                  title: "Offline First Mobile Apps",
                  url: "https://www.smashingmagazine.com/2016/02/making-a-service-worker/",
                  type: "article",
                },
              ],
            },
            {
              name: "Mobile App Security",
              description: "Learn best practices for securing mobile applications and user data.",
              difficulty: "advanced",
              resources: [
                {
                  title: "OWASP Mobile Security Project",
                  url: "https://owasp.org/www-project-mobile-security/",
                  type: "article",
                },
              ],
            },
            {
              name: "App Store Optimization",
              description: "Learn techniques to improve your app's visibility and conversion rates in app stores.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "App Store Optimization Guide",
                  url: "https://www.apptentive.com/blog/2019/04/02/app-store-optimization-guide/",
                  type: "article",
                },
              ],
            },
            {
              name: "CI/CD for Mobile",
              description: "Set up continuous integration and delivery pipelines for mobile apps.",
              difficulty: "advanced",
              resources: [
                {
                  title: "Fastlane Documentation",
                  url: "https://docs.fastlane.tools/",
                  type: "article",
                },
              ],
            },
          ],
        },
      ],
    },
    devops: {
      title: "DevOps Roadmap",
      description: "A comprehensive guide to becoming a DevOps engineer",
      sections: [
        {
          title: "Fundamentals",
          items: [
            {
              name: "Operating Systems (Linux)",
              description: "Learn Linux fundamentals, shell scripting, and system administration.",
              difficulty: "beginner",
              resources: [
                {
                  title: "Linux Journey",
                  url: "https://linuxjourney.com/",
                  type: "article",
                },
                {
                  title: "Linux Command Line Basics",
                  url: "https://www.youtube.com/watch?v=HbgzrKJvDRw",
                  type: "video",
                },
              ],
            },
            {
              name: "Networking Basics",
              description: "Understand TCP/IP, DNS, HTTP, and other networking concepts.",
              difficulty: "beginner",
              resources: [
                {
                  title: "Computer Networking: A Top-Down Approach",
                  url: "https://gaia.cs.umass.edu/kurose_ross/index.php",
                  type: "book",
                },
              ],
            },
            {
              name: "Version Control (Git)",
              description: "Master Git for source code management and collaboration.",
              difficulty: "beginner",
              resources: [
                {
                  title: "Git Documentation",
                  url: "https://git-scm.com/doc",
                  type: "article",
                },
              ],
            },
            {
              name: "Programming & Scripting",
              description: "Learn a scripting language like Python, Bash, or PowerShell.",
              difficulty: "beginner",
              resources: [
                {
                  title: "Automate the Boring Stuff with Python",
                  url: "https://automatetheboringstuff.com/",
                  type: "book",
                },
                {
                  title: "Bash Scripting Tutorial",
                  url: "https://linuxconfig.org/bash-scripting-tutorial-for-beginners",
                  type: "article",
                },
              ],
            },
          ],
        },
        {
          title: "Infrastructure as Code",
          items: [
            {
              name: "Configuration Management",
              description: "Learn tools like Ansible, Puppet, or Chef to automate infrastructure configuration.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "Ansible Documentation",
                  url: "https://docs.ansible.com/",
                  type: "article",
                },
                {
                  title: "Ansible for DevOps",
                  url: "https://www.ansiblefordevops.com/",
                  type: "book",
                },
              ],
            },
            {
              name: "Infrastructure Provisioning",
              description: "Master tools like Terraform or CloudFormation to provision and manage infrastructure.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "Terraform Documentation",
                  url: "https://www.terraform.io/docs",
                  type: "article",
                },
                {
                  title: "Terraform: Up & Running",
                  url: "https://www.terraformupandrunning.com/",
                  type: "book",
                },
              ],
            },
            {
              name: "Containerization (Docker)",
              description: "Learn to package applications and their dependencies into containers.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "Docker Documentation",
                  url: "https://docs.docker.com/",
                  type: "article",
                },
                {
                  title: "Docker Deep Dive",
                  url: "https://www.youtube.com/watch?v=n9uCgUzfeRQ",
                  type: "video",
                },
              ],
            },
            {
              name: "Container Orchestration (Kubernetes)",
              description:
                "Master the leading platform for automating deployment and scaling of containerized applications.",
              difficulty: "advanced",
              resources: [
                {
                  title: "Kubernetes Documentation",
                  url: "https://kubernetes.io/docs/home/",
                  type: "article",
                },
                {
                  title: "Kubernetes: Up and Running",
                  url: "https://www.oreilly.com/library/view/kubernetes-up-and/9781492046523/",
                  type: "book",
                },
              ],
            },
          ],
        },
        {
          title: "Continuous Integration & Delivery",
          items: [
            {
              name: "CI/CD Concepts",
              description: "Understand the principles and practices of continuous integration and delivery.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "Continuous Delivery",
                  url: "https://continuousdelivery.com/",
                  type: "article",
                },
              ],
            },
            {
              name: "CI/CD Tools",
              description: "Learn tools like Jenkins, GitHub Actions, GitLab CI, or CircleCI.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "Jenkins Documentation",
                  url: "https://www.jenkins.io/doc/",
                  type: "article",
                },
                {
                  title: "GitHub Actions Documentation",
                  url: "https://docs.github.com/en/actions",
                  type: "article",
                },
              ],
            },
            {
              name: "Artifact Management",
              description: "Learn to manage build artifacts using tools like Nexus or Artifactory.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "JFrog Artifactory Documentation",
                  url: "https://www.jfrog.com/confluence/display/JFROG/JFrog+Artifactory",
                  type: "article",
                },
              ],
            },
            {
              name: "Testing in CI/CD",
              description: "Implement automated testing in your CI/CD pipelines.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "Test-Driven Development",
                  url: "https://www.agilealliance.org/glossary/tdd/",
                  type: "article",
                },
              ],
            },
          ],
        },
        {
          title: "Monitoring & Observability",
          items: [
            {
              name: "Infrastructure Monitoring",
              description: "Learn tools like Prometheus, Grafana, or Nagios to monitor infrastructure health.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "Prometheus Documentation",
                  url: "https://prometheus.io/docs/introduction/overview/",
                  type: "article",
                },
                {
                  title: "Grafana Documentation",
                  url: "https://grafana.com/docs/",
                  type: "article",
                },
              ],
            },
            {
              name: "Application Performance Monitoring",
              description: "Use tools like New Relic, Datadog, or Dynatrace to monitor application performance.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "New Relic Documentation",
                  url: "https://docs.newrelic.com/",
                  type: "article",
                },
              ],
            },
            {
              name: "Log Management",
              description: "Implement centralized logging with tools like ELK Stack or Graylog.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "ELK Stack Tutorial",
                  url: "https://www.elastic.co/guide/index.html",
                  type: "article",
                },
              ],
            },
            {
              name: "Alerting & Incident Response",
              description: "Set up alerting systems and develop incident response procedures.",
              difficulty: "advanced",
              resources: [
                {
                  title: "Google SRE Book: Practical Alerting",
                  url: "https://sre.google/sre-book/practical-alerting/",
                  type: "article",
                },
              ],
            },
          ],
        },
        {
          title: "Cloud Platforms",
          items: [
            {
              name: "Cloud Fundamentals",
              description: "Understand cloud computing concepts, service models, and deployment models.",
              difficulty: "beginner",
              resources: [
                {
                  title: "Cloud Computing Concepts",
                  url: "https://aws.amazon.com/what-is-cloud-computing/",
                  type: "article",
                },
              ],
            },
            {
              name: "AWS",
              description: "Learn Amazon Web Services, the leading cloud platform.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "AWS Documentation",
                  url: "https://docs.aws.amazon.com/",
                  type: "article",
                },
                {
                  title: "AWS Certified Solutions Architect",
                  url: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
                  type: "course",
                },
              ],
            },
            {
              name: "Azure",
              description: "Learn Microsoft's cloud computing platform.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "Azure Documentation",
                  url: "https://docs.microsoft.com/en-us/azure/",
                  type: "article",
                },
              ],
            },
            {
              name: "Google Cloud Platform",
              description: "Learn Google's cloud computing services.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "GCP Documentation",
                  url: "https://cloud.google.com/docs",
                  type: "article",
                },
              ],
            },
          ],
        },
      ],
    },
    dsa: {
      title: "Data Structures & Algorithms Roadmap",
      description:
        "A comprehensive guide to mastering data structures and algorithms for coding interviews and competitive programming",
      sections: [
        {
          title: "Programming Fundamentals",
          items: [
            {
              name: "Programming Language Basics",
              description: "Master a programming language (Python, Java, C++, JavaScript) for implementing algorithms.",
              difficulty: "beginner",
              resources: [
                {
                  title: "Python for Everybody",
                  url: "https://www.py4e.com/",
                  type: "course",
                },
                {
                  title: "JavaScript Algorithms and Data Structures",
                  url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/",
                  type: "course",
                },
              ],
            },
            {
              name: "Time & Space Complexity",
              description: "Learn Big O notation and how to analyze algorithm efficiency.",
              difficulty: "beginner",
              resources: [
                {
                  title: "Big O Notation Explained",
                  url: "https://www.youtube.com/watch?v=v4cd1O4zkGw",
                  type: "video",
                },
                {
                  title: "Complexity Analysis",
                  url: "https://www.geeksforgeeks.org/analysis-of-algorithms-set-1-asymptotic-analysis/",
                  type: "article",
                },
              ],
            },
            {
              name: "Problem-Solving Techniques",
              description: "Learn approaches to break down and solve algorithmic problems.",
              difficulty: "beginner",
              resources: [
                {
                  title: "How to Solve It by Computer",
                  url: "https://www.amazon.com/How-Solve-Computer-R-G-Dromey/dp/0134340019",
                  type: "book",
                },
              ],
            },
          ],
        },
        {
          title: "Basic Data Structures",
          items: [
            {
              name: "Arrays & Strings",
              description: "Master operations and common patterns for arrays and strings.",
              difficulty: "beginner",
              resources: [
                {
                  title: "Arrays & Strings Problems",
                  url: "https://leetcode.com/tag/array/",
                  type: "article",
                },
                {
                  title: "Array Manipulation Techniques",
                  url: "https://www.youtube.com/watch?v=Zq4upTEaQyM",
                  type: "video",
                },
              ],
            },
            {
              name: "Linked Lists",
              description: "Understand singly and doubly linked lists and their operations.",
              difficulty: "beginner",
              resources: [
                {
                  title: "Linked List Data Structure",
                  url: "https://www.geeksforgeeks.org/data-structures/linked-list/",
                  type: "article",
                },
                {
                  title: "Linked List Problems",
                  url: "https://leetcode.com/tag/linked-list/",
                  type: "article",
                },
              ],
            },
            {
              name: "Stacks & Queues",
              description: "Learn these fundamental LIFO and FIFO data structures and their applications.",
              difficulty: "beginner",
              resources: [
                {
                  title: "Stack Data Structure",
                  url: "https://www.geeksforgeeks.org/stack-data-structure/",
                  type: "article",
                },
                {
                  title: "Queue Data Structure",
                  url: "https://www.geeksforgeeks.org/queue-data-structure/",
                  type: "article",
                },
              ],
            },
            {
              name: "Hash Tables",
              description: "Master hash functions, collision resolution, and hash table operations.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "Hash Table Data Structure",
                  url: "https://www.geeksforgeeks.org/hashing-data-structure/",
                  type: "article",
                },
                {
                  title: "Hash Table Problems",
                  url: "https://leetcode.com/tag/hash-table/",
                  type: "article",
                },
              ],
            },
          ],
        },
        {
          title: "Advanced Data Structures",
          items: [
            {
              name: "Trees",
              description: "Learn binary trees, binary search trees, AVL trees, and tree traversals.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "Tree Data Structure",
                  url: "https://www.geeksforgeeks.org/binary-tree-data-structure/",
                  type: "article",
                },
                {
                  title: "Tree Traversal Techniques",
                  url: "https://www.youtube.com/watch?v=9RHO6jU--GU",
                  type: "video",
                },
              ],
            },
            {
              name: "Heaps",
              description: "Understand min-heaps, max-heaps, and priority queues.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "Heap Data Structure",
                  url: "https://www.geeksforgeeks.org/heap-data-structure/",
                  type: "article",
                },
                {
                  title: "Priority Queue and Heaps",
                  url: "https://www.youtube.com/watch?v=t0Cq6tVNRBA",
                  type: "video",
                },
              ],
            },
            {
              name: "Graphs",
              description: "Master graph representations, traversals (BFS, DFS), and common algorithms.",
              difficulty: "advanced",
              resources: [
                {
                  title: "Graph Data Structure",
                  url: "https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/",
                  type: "article",
                },
                {
                  title: "Graph Algorithms",
                  url: "https://www.youtube.com/watch?v=tWVWeAqZ0WU",
                  type: "video",
                },
              ],
            },
            {
              name: "Tries",
              description: "Learn this tree-like data structure for efficient string operations.",
              difficulty: "advanced",
              resources: [
                {
                  title: "Trie Data Structure",
                  url: "https://www.geeksforgeeks.org/trie-insert-and-search/",
                  type: "article",
                },
                {
                  title: "Trie Problems",
                  url: "https://leetcode.com/tag/trie/",
                  type: "article",
                },
              ],
            },
            {
              name: "Disjoint Set / Union Find",
              description: "Understand this data structure for tracking elements in disjoint sets.",
              difficulty: "advanced",
              resources: [
                {
                  title: "Disjoint Set Data Structure",
                  url: "https://www.geeksforgeeks.org/disjoint-set-data-structures/",
                  type: "article",
                },
              ],
            },
          ],
        },
        {
          title: "Basic Algorithms",
          items: [
            {
              name: "Sorting Algorithms",
              description: "Learn bubble, insertion, selection, merge, quick, and heap sort algorithms.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "Sorting Algorithms Visualized",
                  url: "https://visualgo.net/en/sorting",
                  type: "article",
                },
                {
                  title: "Sorting Algorithms Explained",
                  url: "https://www.youtube.com/watch?v=kPRA0W1kECg",
                  type: "video",
                },
              ],
            },
            {
              name: "Searching Algorithms",
              description: "Master linear search, binary search, and their variations.",
              difficulty: "beginner",
              resources: [
                {
                  title: "Binary Search Tutorial",
                  url: "https://www.geeksforgeeks.org/binary-search/",
                  type: "article",
                },
                {
                  title: "Binary Search Problems",
                  url: "https://leetcode.com/tag/binary-search/",
                  type: "article",
                },
              ],
            },
            {
              name: "Recursion",
              description: "Understand recursive thinking and solve problems using recursion.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "Recursion Explained",
                  url: "https://www.youtube.com/watch?v=ngCos392W4w",
                  type: "video",
                },
                {
                  title: "Recursion Practice Problems",
                  url: "https://leetcode.com/tag/recursion/",
                  type: "article",
                },
              ],
            },
            {
              name: "Divide and Conquer",
              description: "Learn this algorithmic paradigm for solving complex problems.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "Divide and Conquer Algorithm",
                  url: "https://www.geeksforgeeks.org/divide-and-conquer-algorithm-introduction/",
                  type: "article",
                },
              ],
            },
          ],
        },
        {
          title: "Advanced Algorithms",
          items: [
            {
              name: "Dynamic Programming",
              description: "Master this powerful technique for solving optimization problems.",
              difficulty: "advanced",
              resources: [
                {
                  title: "Dynamic Programming - Learn to Solve Algorithmic Problems",
                  url: "https://www.youtube.com/watch?v=oBt53YbR9Kk",
                  type: "video",
                },
                {
                  title: "Dynamic Programming Patterns",
                  url: "https://leetcode.com/discuss/study-guide/458695/Dynamic-Programming-Patterns",
                  type: "article",
                },
              ],
            },
            {
              name: "Greedy Algorithms",
              description: "Learn to make locally optimal choices to find global optimum.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "Greedy Algorithms",
                  url: "https://www.geeksforgeeks.org/greedy-algorithms/",
                  type: "article",
                },
                {
                  title: "Greedy Algorithm Problems",
                  url: "https://leetcode.com/tag/greedy/",
                  type: "article",
                },
              ],
            },
            {
              name: "Backtracking",
              description: "Master this algorithmic technique for solving constraint satisfaction problems.",
              difficulty: "advanced",
              resources: [
                {
                  title: "Backtracking Algorithms",
                  url: "https://www.geeksforgeeks.org/backtracking-algorithms/",
                  type: "article",
                },
                {
                  title: "Backtracking Problems",
                  url: "https://leetcode.com/tag/backtracking/",
                  type: "article",
                },
              ],
            },
            {
              name: "Graph Algorithms",
              description: "Learn Dijkstra's, Bellman-Ford, Floyd-Warshall, Kruskal's, and Prim's algorithms.",
              difficulty: "advanced",
              resources: [
                {
                  title: "Shortest Path Algorithms",
                  url: "https://www.geeksforgeeks.org/shortest-path-algorithms/",
                  type: "article",
                },
                {
                  title: "Minimum Spanning Tree Algorithms",
                  url: "https://www.geeksforgeeks.org/minimum-spanning-tree-algorithms-greedy-approach/",
                  type: "article",
                },
              ],
            },
            {
              name: "String Algorithms",
              description: "Master KMP, Rabin-Karp, and other string matching algorithms.",
              difficulty: "advanced",
              resources: [
                {
                  title: "String Matching Algorithms",
                  url: "https://www.geeksforgeeks.org/string-matching-algorithms/",
                  type: "article",
                },
              ],
            },
          ],
        },
        {
          title: "Problem Solving & Practice",
          items: [
            {
              name: "Competitive Programming",
              description: "Participate in coding contests to improve problem-solving skills.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "Competitive Programming Handbook",
                  url: "https://cses.fi/book/book.pdf",
                  type: "book",
                },
                {
                  title: "Codeforces",
                  url: "https://codeforces.com/",
                  type: "article",
                },
              ],
            },
            {
              name: "Interview Preparation",
              description: "Practice common interview problems and techniques.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "Cracking the Coding Interview",
                  url: "https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850",
                  type: "book",
                },
                {
                  title: "LeetCode",
                  url: "https://leetcode.com/",
                  type: "article",
                },
              ],
            },
            {
              name: "System Design",
              description: "Learn to design scalable systems using appropriate data structures and algorithms.",
              difficulty: "advanced",
              resources: [
                {
                  title: "System Design Primer",
                  url: "https://github.com/donnemartin/system-design-primer",
                  type: "article",
                },
                {
                  title: "Grokking the System Design Interview",
                  url: "https://www.educative.io/courses/grokking-the-system-design-interview",
                  type: "course",
                },
              ],
            },
            {
              name: "Mock Interviews",
              description: "Practice with mock interviews to improve communication and problem-solving skills.",
              difficulty: "intermediate",
              resources: [
                {
                  title: "Pramp",
                  url: "https://www.pramp.com/",
                  type: "article",
                },
                {
                  title: "InterviewBit",
                  url: "https://www.interviewbit.com/",
                  type: "article",
                },
              ],
            },
          ],
        },
      ],
    },
  }
  