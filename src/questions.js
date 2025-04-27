const questions = [
  {
    id: "2",
    note: "",
    question:
      "Your company has datacenters in Los Angeles and New York. The company has a Microsoft Azure subscription.\nYou are configuring the two datacenters as geo-clustered sites for site resiliency.\nYou need to recommend an Azure storage redundancy option.\nYou have the following data storage requirements:\n✑ Data must be stored on multiple nodes.\n✑ Data must be stored on nodes in separate geographic locations.\n✑ Data can be read from the secondary location as well as from the primary location\nWhich of the following Azure stored redundancy options should you recommend?\n",
    options: [
      {
        value: "Geo-redundant storage",
      },
      {
        value: "Read-access geo-redundant storage",
        answer: 1,
      },
      {
        value: "Zone-redundant storage",
      },
      {
        value: "Locally redundant storage",
      },
    ],
    tags: [],
    comment:
      "Geo-redundant storage (with GRS or GZRS) replicates your data to another physical location in the secondary region to protect against regional outages. However, that data is available to be read only if the customer or Microsoft initiates a failover from the primary to secondary region. When you enable read access to the secondary region, your data is available to be read at all times, including in a situation where the primary region becomes unavailable. For read access to the secondary region, enable read-access geo-redundant storage (RA-GRS) or read-access geo-zone-redundant storage (RA-GZRS).",
  },
  {
    id: "3",
    note: "The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.",
    question:
      "Your company's Azure subscription includes a Basic support plan.\nThey would like to request an assessment of an Azure environment's design from Microsoft. This is, however, not supported by the existing plan.\nYou want to make sure that the company subscribes to a support plan that allows this functionality, while keeping expenses to a minimum.\nSolution: You recommend that the company subscribes to the Professional Direct support plan.\nDoes the solution meet the goal?\n",
    options: [
      {
        value: "Yes",
      },
      {
        value: "No",
        answer: 1,
      },
    ],
    tags: [],
    comment: `Review is only under Premier.
Premier is stil available but only for companies with enterprise agreement. Professional DIrect offers only :Guidance from a pool of ProDirect delivery managers". Guidance is not a design review.`,
  },
  {
    id: "4",
    note: "The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.",
    question:
      "You are tasked with deploying Azure virtual machines for your company.\nYou need to make use of the appropriate cloud deployment solution.\nSolution: You should make use of Software as a Service (SaaS).\nDoes the solution meet the goal?\n",
    options: [
      {
        value: "Yes",
      },
      {
        value: "No",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "5",
    note: "The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.",
    question:
      "You are tasked with deploying Azure virtual machines for your company.\nYou need to make use of the appropriate cloud deployment solution.\nSolution: You should make use of Platform as a Service (PaaS).\nDoes the solution meet the goal?\n",
    options: [
      {
        value: "Yes",
      },
      {
        value: "No",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "6",
    note: "The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.",
    question:
      "You are tasked with deploying Azure virtual machines for your company.\nYou need to make use of the appropriate cloud deployment solution.\nSolution: You should make use of Infrastructure as a Service (IaaS).\nDoes the solution meet the goal?\n",
    options: [
      {
        value: "Yes",
        answer: 1,
      },
      {
        value: "No",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "7",
    note: "",
    question:
      "Your developers have created 10 web applications that must be host on Azure.\nYou need to determine which Azure web tier plan to host the web apps. The web tier plan must meet the following requirements:\n✑ The web apps will use custom domains.\n✑ The web apps each require 10 GB of storage.\n✑ The web apps must each run in dedicated compute instances.\n✑ Load balancing between instances must be included.\n✑ Costs must be minimized.\nWhich web tier plan should you use?\n",
    options: [
      {
        value: "Standard",
        answer: 1,
      },
      {
        value: "Basic",
      },
      {
        value: "Free",
      },
      {
        value: "Shared",
      },
    ],
    tags: [],
    comment: `Please read the requirements: Many are not noting here the load balancing fact.
The web apps will use custom domains. (Basic, Shared and standard Support custom domain)
The web apps each require 10 GB of storage. (basic and standard support this)
The web apps must each run in dedicated compute instances.(basic support 3 instance max where standard support 10max)
Load balancing between instances must be included. (free, shared and basic dont support load balancing. standard and above tier only support load balancing/autosacling)
Costs must be minimized. Standard is less costier than premimum and isolated. I hope this is clear to chose the correct answer as STANDARD.
https://azure.microsoft.com/en-us/pricing/details/app-service/windows/`,
  },
  {
    id: "8",
    note: "The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.",
    question:
      "You are planning to migrate a company to Azure. Each of the company's numerous divisions will have an administrator in place to manage the Azure resources used by their respective division.\nYou want to make sure that the Azure deployment you employ allows for Azure to be segmented for the divisions, while keeping administrative effort to a minimum.\nSolution: You plan to make use of several Azure Active Directory (Azure AD) directories.\nDoes the solution meet the goal?\n",
    options: [
      {
        value: "Yes",
      },
      {
        value: "No",
        answer: 1,
      },
    ],
    tags: [],
    comment: `I think the key word is SEVERAL. Why in the world a company will create SEVERAL AADs when it can create a single AAD and organize its divisions right there?`,
  },
  {
    id: "9",
    note: "",
    question:
      "Your developers have created a portal web app for users in the Miami branch office. The web app will be publicly accessible and used by the Miami users to retrieve customer and product information. The web app is currently running in an on-premises test environment.\nYou plan to host the web app on Azure.\nYou need to determine which Azure web tier plan to host the web app. The web tier plan must meet the following requirements:\n✑ The website will use the miami.weyland.com URL.\n✑ The website will be deployed to two instances.\n✑ SSL support must be included.\n✑ The website requires 12 GB of storage.\n✑ Costs must be minimized.\nWhich web tier plan should you use?\n",
    options: [
      {
        value: "Standard",
        answer: 1,
      },
      {
        value: "Basic",
      },
      {
        value: "Free",
      },
      {
        value: "Shared",
      },
    ],
    tags: [],
    comment: `The Standard web tier plan in Azure App Service meets the specified requirements:

Custom Domain (miami.weyland.com): The Standard plan allows you to use custom domains, so you can set up the miami.weyland.com URL for the website.

Two Instances: The Standard plan provides the ability to scale out to multiple instances, which fulfills the requirement to deploy the website to two instances.

SSL Support: The Standard plan includes SSL support, which is necessary for secure communication over HTTPS.

Storage (12 GB): The Standard plan includes sufficient storage for the 12 GB requirement.

Costs Minimization: While the Standard plan might not be the lowest-cost option compared to Free, Basic, or Shared plans, it provides the necessary features and capacity for the given requirements.

Given that the website will be publicly accessible, require SSL, need multiple instances, and have a custom domain, the Standard plan is the most appropriate choice that meets all the criteria.`,
  },
  {
    id: "10",
    note: "The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.",
    question:
      "Your company is planning to migrate all their virtual machines to an Azure pay-as-you-go subscription. The virtual machines are currently hosted on the Hyper-V hosts in a data center.\nYou are required make sure that the intended Azure solution uses the correct expenditure model.\nSolution: You should recommend the use of the elastic expenditure model.\nDoes the solution meet the goal?\n",
    options: [
      {
        value: "Yes",
      },
      {
        value: "No",
        answer: 1,
      },
    ],
    tags: [],
    comment: `The term "elastic expenditure model" isn't a standard term or concept used in Azure or cloud computing. The two common expenditure models in Azure are "pay-as-you-go" and "reserved instances."

Pay-as-you-go: This is the default and most common expenditure model in Azure. It means you pay for resources you consume on an hourly or per-minute basis. It offers flexibility to scale resources up and down as needed.

Reserved Instances: This is an expenditure model where you commit to a one- or three-year term for a particular virtual machine instance type, size, and region. This commitment provides you with a discount compared to pay-as-you-go pricing.`,
  },
  {
    id: "11",
    note: "The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.",
    question:
      "Your company is planning to migrate all their virtual machines to an Azure pay-as-you-go subscription. The virtual machines are currently hosted on the Hyper-V hosts in a data center.\nYou are required make sure that the intended Azure solution uses the correct expenditure model.\nSolution: You should recommend the use of the scalable expenditure model.\nDoes the solution meet the goal?\n",
    options: [
      {
        value: "Yes",
      },
      {
        value: "No",
        answer: 1,
      },
    ],
    tags: [],
    comment: `we have two expenditure models. One is Cap-Ex, another is Op-Ex. So Scalable Expenditure is not the right answer.`,
  },
  {
    id: "12",
    note: "The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.",
    question:
      "Your company is planning to migrate all their virtual machines to an Azure pay-as-you-go subscription. The virtual machines are currently hosted on the Hyper-V hosts in a data center.\nYou are required make sure that the intended Azure solution uses the correct expenditure model.\nSolution: You should recommend the use of the operational expenditure model.\nDoes the solution meet the goal?\n",
    options: [
      {
        value: "Yes",
        answer: 1,
      },
      {
        value: "No",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "13",
    note: "The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.",
    question:
      "You are required to deploy an Artificial Intelligence (AI) solution in Azure.\nYou want to make sure that you are able to build, test, and deploy predictive analytics for the solution.\nSolution: You should make use of Azure Cosmos DB.\nDoes the solution meet the goal?\n",
    options: [
      {
        value: "Yes",
      },
      {
        value: "No",
        answer: 1,
      },
    ],
    tags: [],
    comment: `Machine Learning Studio (classic) is a drag-and-drop tool you can use to build, test, and deploy predictive analytics solutions.


Azure Cosmos DB is a fully managed NoSQL database for modern app development.


AI Fits with ML not with Cosmos DB`,
  },
  {
    id: "15",
    note: "The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.",
    question:
      "You are required to deploy an Artificial Intelligence (AI) solution in Azure.\nYou want to make sure that you are able to build, test, and deploy predictive analytics for the solution.\nSolution: You should make use of Azure Machine Learning Studio.\nDoes the solution meet the goal?\n",
    options: [
      {
        value: "Yes",
        answer: 1,
      },
      {
        value: "No",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "33",
    note: "The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.",
    question:
      "Your company's Active Directory forest includes thousands of user accounts.\nYou have been informed that all network resources will be migrated to Azure. Thereafter, the on-premises data center will be retired.\nYou are required to employ a strategy that reduces the effect on users, once the planned migration has been completed.\nSolution: You plan to require Azure Multi-Factor Authentication (MFA).\nDoes the solution meet the goal?\n",
    options: [
      {
        value: "Yes",
        answer: 1,
      },
      {
        value: "No",
      },
    ],
    tags: [],
    comment:
      "The best way to resolve this issue would be to sync all the Active Directory user accounts to Azure Active Directory (Azure AD).",
  },
  {
    id: "14",
    note: "The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.",
    question:
      "Your company's Active Directory forest includes thousands of user accounts.\nYou have been informed that all network resources will be migrated to Azure. Thereafter, the on-premises data center will be retired.\nYou are required to employ a strategy that reduces the effect on users, once the planned migration has been completed.\nSolution: You plan to sync all the Active Directory user accounts to Azure Active Directory (Azure AD).\nDoes the solution meet the goal?\n",
    options: [
      {
        value: "Yes",
        answer: 1,
      },
      {
        value: "No",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "16",
    note: "The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.",
    question:
      "Your company's infrastructure includes a number of business units that each need a large number of various Azure resources for everyday operation.\nThe resources required by each business unit are identical.\nYou are required to sanction a strategy to create Azure resources automatically.\nSolution: You recommend that the Azure API Management service be included in the strategy.\nDoes the solution meet the goal?\n",
    options: [
      {
        value: "Yes",
      },
      {
        value: "No",
        answer: 1,
      },
    ],
    tags: [],
    comment: `Answer is B - No. Azure API Management Service i( APIM ) is a way to create and manage customer APIs for existing backend services. The Question is asking about a way to create Azure resources automatically ( on the fly ). ARM (Azure Resource Manager) is a tool that automates the deployments on the AZ cloud.`,
  },
  {
    id: "17",
    note: "The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.",
    question:
      "Your company's infrastructure includes a number of business units that each need a large number of various Azure resources for everyday operation.\nThe resources required by each business unit are identical.\nYou are required to sanction a strategy to create Azure resources automatically.\nSolution: You recommend that management groups be included in the strategy.\nDoes the solution meet the goal?\n",
    options: [
      {
        value: "Yes",
      },
      {
        value: "No",
        answer: 1,
      },
    ],
    tags: [],
    comment: `Azure Resource Manager templates should be used (as in the next question). Management groups are only containers. To add the automating capability we need to utilise templates.`,
  },
  {
    id: "18",
    note: "The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.",
    question:
      "Your company's infrastructure includes a number of business units that each need a large number of various Azure resources for everyday operation.\nThe resources required by each business unit are identical.\nYou are required to sanction a strategy to create Azure resources automatically.\nSolution: You recommend that the Azure Resource Manager templates be included in the strategy.\nDoes the solution meet the goal?\n",
    options: [
      {
        value: "Yes",
        answer: 1,
      },
      {
        value: "No",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "19",
    note: "The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.",
    question:
      "You are tasked with deploying a critical LOB application, which will be installed on a virtual machine, to Azure.\nYou are informed that the application deployment strategy should allow for a guaranteed availability of 99.99 percent. You need to make sure that the strategy requires as little virtual machines and availability zones as possible.\nSolution: You include two virtual machines and one availability zone in your strategy.\nDoes the solution meet the goal?\n",
    options: [
      {
        value: "Yes",
      },
      {
        value: "No",
        answer: 1,
      },
    ],
    tags: [],
    comment: `For all Virtual Machines that have two or more instances deployed across two or more Availability Zones in the same Azure region, we guarantee you will have Virtual Machine Connectivity to at least one instance at least 99.99% of the time.
For all Virtual Machines that have two or more instances deployed in the same Availability Set or in the same Dedicated Host Group, we guarantee you will have Virtual Machine Connectivity to at least one instance at least 99.95% of the time.
For any Single Instance Virtual Machine using Premium SSD or Ultra Disk for all Operating System Disks and Data Disks, we guarantee you will have Virtual Machine Connectivity of at least 99.9%.
For any Single Instance Virtual Machine using Standard SSD Managed Disks for Operating System Disk and Data Disks, we guarantee you will have Virtual Machine Connectivity of at least 99.5%.
For any Single Instance Virtual Machine using Standard HDD Managed Disks for Operating System Disks and Data Disks, we guarantee you will have Virtual Machine Connectivity of at least 95%.`,
  },
  {
    id: "20",
    note: "The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.",
    question:
      "You are tasked with deploying a critical LOB application, which will be installed on a virtual machine, to Azure.\nYou are informed that the application deployment strategy should allow for a guaranteed availability of 99.99 percent. You need to make sure that the strategy requires as little virtual machines and availability zones as possible.\nSolution: You include one virtual machine and two availability zones in your strategy.\nDoes the solution meet the goal?\n",
    options: [
      {
        value: "Yes",
      },
      {
        value: "No",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "21",
    note: "The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.",
    question:
      "You are tasked with deploying a critical LOB application, which will be installed on a virtual machine, to Azure.\nYou are informed that the application deployment strategy should allow for a guaranteed availability of 99.99 percent. You need to make sure that the strategy requires as little virtual machines and availability zones as possible.\nSolution: You include two virtual machines and two availability zones in your strategy.\nDoes the solution meet the goal?\n",
    options: [
      {
        value: "Yes",
        answer: 1,
      },
      {
        value: "No",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "22",
    note: "The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.",
    question:
      "Your company's developers intend to deploy a large number of custom virtual machines on a weekly basis. They will also be removing these virtual machines during the same week it was deployed. Sixty percent of the virtual machines have Windows Server 2016 installed, while the other forty percent has Ubuntu Linux installed.\nYou are required to make sure that the administrative effort, needed for this process, is reduced by employing a suitable Azure service.\nSolution: You recommend the use of Microsoft Managed Desktop.\nDoes the solution meet the goal?\n",
    options: [
      {
        value: "Yes",
      },
      {
        value: "No",
        answer: 1,
      },
    ],
    tags: [],
    comment: `Azure DevTest Labs enable you to quickly create environments using reusable templates and artifacts.`,
  },
  {
    id: "23",
    note: "The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.",
    question:
      "Your company's developers intend to deploy a large number of custom virtual machines on a weekly basis. They will also be removing these virtual machines during the same week it was deployed. Sixty percent of the virtual machines have Windows Server 2016 installed, while the other forty percent has Ubuntu Linux installed.\nYou are required to make sure that the administrative effort, needed for this process, is reduced by employing a suitable Azure service.\nSolution: You recommend the use of Azure Reserved Virtual Machines (VM) Instances.\nDoes the solution meet the goal?\n",
    options: [
      {
        value: "Yes",
      },
      {
        value: "No",
        answer: 1,
      },
    ],
    tags: [],
    comment: `Azure DevTest Labs enable you to quickly create environments using reusable templates and artifacts.`,
  },
  {
    id: "24",
    note: "The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.",
    question:
      "Your company's developers intend to deploy a large number of custom virtual machines on a weekly basis. They will also be removing these virtual machines during the same week it was deployed. Sixty percent of the virtual machines have Windows Server 2016 installed, while the other forty percent has Ubuntu Linux installed.\nYou are required to make sure that the administrative effort, needed for this process, is reduced by employing a suitable Azure service.\nSolution: You recommend the use of Azure DevTest Labs.\nDoes the solution meet the goal?\n",
    options: [
      {
        value: "Yes",
        answer: 1,
      },
      {
        value: "No",
      },
    ],
    tags: [],
    comment: `Azure DevTest Labs enable you to quickly create environments using reusable templates and artifacts.`,
  },
  {
    id: "25",
    note: "",
    question:
      "Your company has virtual machines (VMs) hosted in Microsoft Azure. The VMs are located in a single Azure virtual network named VNet1.\nThe company has users that work remotely. The remote workers require access to the VMs on VNet1.\nYou need to provide access for the remote workers.\nWhat should you do?\n",
    options: [
      {
        value: "Configure a Site-to-Site (S2S) VPN.",
      },
      {
        value: "Configure a VNet-toVNet VPN.",
      },
      {
        value: "Configure a Point-to-Site (P2S) VPN.",
        answer: 1,
      },
      {
        value: "Configure DirectAccess on a Windows Server 2012 server VM.",
      },
      {
        value: "Configure a Multi-Site VPN",
      },
    ],
    tags: [],
    comment: `A Point-to-Site (P2S) VPN gateway connection lets you create a secure connection to your virtual network from an individual client computer. ... P2S VPN is also a useful solution to use instead of S2S VPN when you have only a few clients that need to connect to a VNet.`,
  },
  {
    id: "26",
    note: "The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.",
    question:
      "You have been informed by your superiors of the company's intentions to automate server deployment to Azure. There is, however, some concern that administrative credentials could be uncovered during this process.\nYou are required to make sure that during the deployment, the administrative credentials are encrypted using a suitable Azure solution.\nSolution: You recommend the use of Azure Information Protection.\nDoes the solution meet the goal?\n",
    options: [
      {
        value: "Yes",
      },
      {
        value: "No",
        answer: 1,
      },
    ],
    tags: [],
    comment: `No, the solution does not meet the goal. Azure Information Protection is primarily used for classifying, labeling, and protecting documents and emails, but it is not specifically designed for encrypting administrative credentials during deployment.
For securely encrypting administrative credentials during server deployment, Azure Key Vault should be used.`,
  },
  {
    id: "27",
    note: "The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.",
    question:
      "You have been informed by your superiors of the company's intentions to automate server deployment to Azure. There is, however, some concern that administrative credentials could be uncovered during this process.\nYou are required to make sure that during the deployment, the administrative credentials are encrypted using a suitable Azure solution.\nSolution: You recommend the use of Azure Multi-Factor Authentication (MFA).\nDoes the solution meet the goal?\n",
    options: [
      {
        value: "Yes",
      },
      {
        value: "No",
        answer: 1,
      },
    ],
    tags: [],
    comment: `key word = concern that administrative CREDENTIALS could be uncovered during this process = Key Vault`,
  },
  {
    id: "29",
    note: "The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.",
    question:
      "Your company has an Azure Active Directory (Azure AD) environment. Users occasionally connect to Azure AD via the Internet.\nYou have been tasked with making sure that users who connect to Azure AD via the internet from an unidentified IP address, are automatically encouraged to change passwords.\nSolution: You configure the use of Azure AD Identity Protection.\nDoes the solution meet the goal?\n",
    options: [
      {
        value: "Yes",
        answer: 1,
      },
      {
        value: "No",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "30",
    note: "The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.",
    question:
      "Your company has an Azure Active Directory (Azure AD) environment. Users occasionally connect to Azure AD via the Internet.\nYou have been tasked with making sure that users who connect to Azure AD via the internet from an unidentified IP address, are automatically encouraged to change passwords.\nSolution: You configure the use of Azure AD Privileged Identity Management.\nDoes the solution meet the goal?\n",
    options: [
      {
        value: "Yes",
      },
      {
        value: "No",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "31",
    note: "The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.",
    question:
      "You are planning a strategy to deploy numerous web servers and database servers to Azure.\nThis strategy should allow for connection types between the web servers and database servers to be controlled.\nSolution: You include network security groups (NSGs) in your strategy.\nDoes the solution meet the goal?\n",
    options: [
      {
        value: "Yes",
        answer: 1,
      },
      {
        value: "No",
      },
    ],
    tags: [],
    comment:
      "You can use an Azure network security group to filter network traffic to and from Azure resources in an Azure virtual network.",
  },
  {
    id: "32",
    note: "The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.",
    question:
      "You are planning a strategy to deploy numerous web servers and database servers to Azure.\nThis strategy should allow for connection types between the web servers and database servers to be controlled.\nSolution: You include a local network gateway in your strategy.\nDoes the solution meet the goal?\n",
    options: [
      {
        value: "Yes",
      },
      {
        value: "No",
        answer: 1,
      },
    ],
    tags: [],
    comment:
      "A local network gateway represents the hardware or software VPN device in your local network. Use this with a connection to set up a site-to-site VPN connection between an Azure virtual network and your local network.",
  },

  {
    id: "37",
    note: "",
    question:
      "You have an on-premises network that contains several servers.\nYou plan to migrate all the servers to Azure.\nYou need to recommend a solution to ensure that some of the servers are available if a single Azure data center goes offline for an extended period.\nWhat should you include in the recommendation?\n",
    options: [
      {
        value: "fault tolerance",
        answer: 1,
      },
      {
        value: "elasticity",
      },
      {
        value: "scalability",
      },
      {
        value: "low latency",
      },
    ],
    tags: [],
    comment:
      "Fault tolerance is the ability of a system to continue to function in the event of a failure of some of its components.",
  },
  {
    id: "39",
    note: "",
    question:
      "What are two characteristics of the public cloud? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.\n",
    options: [
      {
        value: "dedicated hardware",
      },
      {
        value: "unsecured connections",
      },
      {
        value: "limited storage",
      },
      {
        value: "metered pricing",
        answer: 1,
      },
      {
        value: "self-service management",
        answer: 1,
      },
    ],
    tags: [],
    comment: `With the public cloud, you get pay-as-you-go pricing ג€" you pay only for what you use, no CapEx costs.
With the public cloud, you have self-service management. You are responsible for the deployment and configuration of the cloud resources such as virtual machines or web sites. The underlying hardware that hosts the cloud resources is managed by the cloud provider.`,
  },
  {
    id: "41",
    note: "This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.",
    question:
      "After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYour company plans to migrate all its data and resources to Azure.\nThe company's migration plan states that only Platform as a Service (PaaS) solutions must be used in Azure.\nYou need to deploy an Azure environment that meets the company migration plan.\nSolution: You create an Azure App Service and Azure SQL databases.\nDoes this meet the goal?\n",
    options: [
      {
        value: "Yes",
        answer: 1,
      },
      {
        value: "No",
      },
    ],
    tags: [],
    comment: `Azure App Service = PaaS (for hosting web apps and APIs)

Azure SQL Database = PaaS (for relational database needs)`,
  },
  {
    id: "42",
    note: "This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.",
    question:
      "After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYour company plans to migrate all its data and resources to Azure.\nThe company's migration plan states that only Platform as a Service (PaaS) solutions must be used in Azure.\nYou need to deploy an Azure environment that meets the company migration plan.\nSolution: You create an Azure App Service and Azure virtual machines that have Microsoft SQL Server installed.\nDoes this meet the goal?\n",
    options: [
      {
        value: "Yes",
      },
      {
        value: "No",
        answer: 1,
      },
    ],
    tags: [],
    comment: `Azure App Service is a PaaS offering ✅

But Azure Virtual Machines are Infrastructure as a Service (IaaS) ❌

Installing Microsoft SQL Server on a VM means you're managing the operating system, updates, and SQL Server installation — which falls outside of PaaS`,
  },
  {
    id: "43",
    note: "This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.",
    question:
      "After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYour company plans to migrate all its data and resources to Azure.\nThe company's migration plan states that only Platform as a Service (PaaS) solutions must be used in Azure.\nYou need to deploy an Azure environment that meets the company migration plan.\nSolution: You create an Azure App Service and Azure Storage accounts.\nDoes this meet the goal?\n",
    options: [
      {
        value: "Yes",
        answer: 1,
      },
      {
        value: "No",
      },
    ],
    tags: [],
    comment:
      "A Storage Account in Azure is just the container or namespace that holds various PaaS storage services",
  },
  {
    id: "44",
    note: "",
    question:
      "Your company hosts an accounting application named App1 that is used by all the customers of the company.\nApp1 has low usage during the first three weeks of each month and very high usage during the last week of each month.\nWhich benefit of Azure Cloud Services supports cost management for this type of usage pattern?\n",
    options: [
      {
        value: "high availability",
      },
      {
        value: "high latency",
      },
      {
        value: "elasticity",
        answer: 1,
      },
      {
        value: "load balancing",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "45",
    note: "",
    question:
      "You plan to migrate a web application to Azure. The web application is accessed by external users.\nYou need to recommend a cloud deployment solution to minimize the amount of administrative effort used to manage the web application.\nWhat should you include in the recommendation?\n",
    options: [
      {
        value: "Software as a Service (SaaS)",
      },
      {
        value: "Platform as a Service (PaaS)",
        answer: 1,
      },
      {
        value: "Infrastructure as a Service (IaaS)",
      },
      {
        value: "Database as a Service (DaaS)",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "47",
    note: "",
    question:
      "You have an on-premises network that contains 100 servers.\nYou need to recommend a solution that provides additional resources to your users. The solution must minimize capital and operational expenditure costs.\nWhat should you include in the recommendation?\n",
    options: [
      {
        value: "a complete migration to the public cloud",
      },
      {
        value: "an additional data center",
      },
      {
        value: "a private cloud",
      },
      {
        value: "a hybrid cloud",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "49",
    note: "",
    question:
      "You plan to migrate several servers from an on-premises network to Azure.\nWhat is an advantage of using a public cloud service for the servers over an on-premises network?\n",
    options: [
      {
        value:
          "The public cloud is owned by the public, NOT a private corporation",
      },
      {
        value:
          "The public cloud is a crowd-sourcing solution that provides corporations with the ability to enhance the cloud",
      },
      {
        value:
          "All public cloud resources can be freely accessed by every member of the public",
      },
      {
        value:
          "The public cloud is a shared entity whereby multiple corporations each use a portion of the resources in the cloud",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "51",
    note: "",
    question:
      "In which type of cloud model are all the hardware resources owned by a third-party and shared between multiple tenants?\n",
    options: [
      {
        value: "private",
      },
      {
        value: "hybrid",
      },
      {
        value: "public",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "52",
    note: "",
    question:
      "You have 1,000 virtual machines hosted on the Hyper-V hosts in a data center.\nYou plan to migrate all the virtual machines to an Azure pay-as-you-go subscription.\nYou need to identify which expenditure model to use for the planned Azure solution.\nWhich expenditure model should you identify?\n",
    options: [
      {
        value: "operational",
        answer: 1,
      },
      {
        value: "elastic",
      },
      {
        value: "capital",
      },
      {
        value: "scalable",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "56",
    note: "",
    question:
      "Your company has an on-premises network that contains multiple servers.\nThe company plans to reduce the following administrative responsibilities:\n✑ Backing up application data\n✑ Replacing failed server hardware\n✑ Managing physical server security\n✑ Updating server operating systems\n✑ Managing permissions to shared documents\nThe company plans to migrate servers to Azure virtual machines.\nYou need to identify which administrative responsibilities will be eliminated after the planned migration.\nWhich two responsibilities should you identify? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.\n",
    options: [
      {
        value: "Replacing failed server hardware",
        answer: 1,
      },
      {
        value: "Backing up application data",
      },
      {
        value: "Managing physical server security",
        answer: 1,
      },
      {
        value: "Updating server operating systems",
      },
      {
        value: "Managing permissions to shared documents",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "58",
    note: "",
    question:
      "You plan to provision Infrastructure as a Service (IaaS) resources in Azure.\nWhich resource is an example of IaaS?\n",
    options: [
      {
        value: "an Azure web app",
      },
      {
        value: "an Azure virtual machine",
        answer: 1,
      },
      {
        value: "an Azure logic app",
      },
      {
        value: "an Azure SQL database",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "59",
    note: "",
    question: "To which cloud models can you deploy physical servers?\n",
    options: [
      {
        value: "private cloud and hybrid cloud only",
        answer: 1,
      },
      {
        value: "private cloud only",
      },
      {
        value: "private cloud, hybrid cloud and public cloud",
      },
      {
        value: "hybrid cloud only",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "62",
    note: "",
    question:
      "You have 50 virtual machines hosted on-premises and 50 virtual machines hosted in Azure. The on-premises virtual machines and the Azure virtual machines connect to each other.\nWhich type of cloud model is this?\n",
    options: [
      {
        value: "hybrid",
        answer: 1,
      },
      {
        value: "private",
      },
      {
        value: "public",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "64",
    note: "This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.",
    question:
      "After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYour company plans to migrate all its data and resources to Azure.\nThe company's migration plan states that only Platform as a Service (PaaS) solutions must be used in Azure.\nYou need to deploy an Azure environment that meets the company migration plan.\nSolution: You create Azure virtual machines, Azure SQL databases, and Azure Storage accounts.\nDoes this meet the goal?\n",
    options: [
      {
        value: "Yes",
      },
      {
        value: "No",
        answer: 1,
      },
    ],
    tags: [],
    comment: `Azure SQL Database ✅ — This is a PaaS offering.

Azure Storage accounts ✅ — Considered PaaS, depending on how they're used.

Azure Virtual Machines ❌ — These are Infrastructure as a Service (IaaS).`,
  },
  {
    id: "65",
    note: "",
    question:
      "Your company plans to deploy several custom applications to Azure. The applications will provide invoicing services to the customers of the company. Each application will have several prerequisite applications and services installed.\nYou need to recommend a cloud deployment solution for all the applications.\nWhat should you recommend?\n",
    options: [
      {
        value: "Software as a Service (SaaS)",
      },
      {
        value: "Platform as a Service (PaaS)",
      },
      {
        value: "Infrastructure as a Service (laaS)",
        answer: 1,
      },
    ],
    tags: [],
    comment: `SaaS (Software as a Service) ❌

    You use software hosted by a third party.

    No control over the underlying infrastructure or the application itself.

    Not suitable for custom app deployment.

PaaS (Platform as a Service) ❌

    You manage the app, but the platform (runtime, OS, middleware) is managed by Azure.

    Limited ability to install prerequisite services or make deep configuration changes.

    Ideal for apps developed from scratch on Azure, but not when you need deep customization.

IaaS (Infrastructure as a Service) ✅

    You get full control over virtual machines.

    Can install any required software, services, and dependencies.

    Best fit for complex, custom applications with specific infrastructure requirements.`,
  },
  {
    id: "71",
    note: "",
    question:
      "Your company plans to migrate all its data and resources to Azure.\nThe company's migration plan states that only Platform as a Service (PaaS) solutions must be used in Azure.\nYou need to deploy an Azure environment that meets the company's migration plan.\nWhat should you create?\n",
    options: [
      {
        value:
          "Azure virtual machines, Azure SQL databases, and Azure Storage accounts.",
      },
      {
        value:
          "an Azure App Service and Azure virtual machines that have Microsoft SQL Server installed.",
      },
      {
        value: "an Azure App Service and Azure SQL databases.",
        answer: 1,
      },
      {
        value:
          "Azure storage accounts and web server in Azure virtual machines.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "72",
    note: "",
    question:
      "What does a customer provide in a software as a service (SaaS) model?\n",
    options: [
      {
        value: "application data",
        answer: 1,
      },
      {
        value: "data storage",
      },
      {
        value: "compute resources",
      },
      {
        value: "application software",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "75",
    note: "",
    question:
      "What is the first stage in the Microsoft Cloud Adoption Framework for Azure?\n",
    options: [
      {
        value: "Adopt the cloud.",
      },
      {
        value: "Make a plan.",
      },
      {
        value: "Ready your organization.",
      },
      {
        value: "Define your strategy.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "81",
    note: "",
    question:
      "You have an accounting application named App1 that uses a legacy database.\nYou plan to move App1 to the cloud.\nWhich service model should you use?\n",
    options: [
      {
        value: "platform as a service (PaaS)",
      },
      {
        value: "infrastructure as a service (IaaS)",
        answer: 1,
      },
      {
        value: "software as a service (SaaS)",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "85",
    note: "",
    question:
      "Which cloud computing model includes on-premises and cloud-based resources?\n",
    options: [
      {
        value: "hybrid",
        answer: 1,
      },
      {
        value: "public",
      },
      {
        value: "private",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "87",
    note: "",
    question:
      "Which term represents the ability to increase the computing capacity of a virtual machine by adding memory or CPUs?\n",
    options: [
      {
        value: "agility",
      },
      {
        value: "vertical scaling",
        answer: 1,
      },
      {
        value: "horizontal scaling",
      },
      {
        value: "elasticity",
      },
    ],
    tags: [],
    comment: `Vertical scaling, also known as scale up and scale down, means increasing or decreasing virtual machine (VM) sizes in response to a workload. Compare this behavior with horizontal scaling, also referred to as scale out and scale in, where the number of VMs is altered depending on the workload.`,
  },
  {
    id: "88",
    note: "",
    question:
      "What are two benefits of cloud computing? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.\n",
    options: [
      {
        value: "enables the rapid provisioning of resources",
        answer: 1,
      },
      {
        value: "has increased administrative complexity",
      },
      {
        value: "has the same configuration options as on-premises",
      },
      {
        value:
          "shifts capital expenditures (CAPEX) to operating expenditures (OPEX)",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "89",
    note: "",
    question: "What is a feature of an Azure virtual network?\n",
    options: [
      {
        value: "resource cost analysis",
      },
      {
        value: "packet inspection",
      },
      {
        value: "geo-redundancy",
      },
      {
        value: "isolation and segmentation",
        answer: 1,
      },
    ],
    tags: [],
    comment: `Azure Virtual Network (VNet) is the fundamental building block for your private network in Azure. VNet enables many types of Azure resources, such as Azure Virtual Machines (VM), to securely communicate with each other, the internet, and on-premises networks. VNet is similar to a traditional network that you'd operate in your own data center, but brings with it additional benefits of Azure's infrastructure such as scale, availability, and isolation.
isolated networking components. Segmented into one or more subnets.`,
  },
  {
    id: "92",
    note: "",
    question:
      "Which cloud computing benefit provides continuous user access to a cloud-based application with minimal downtime?\n",
    options: [
      {
        value: "agility",
      },
      {
        value: "scalability",
      },
      {
        value: "elasticity",
      },
      {
        value: "high availability",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "93",
    note: "",
    question:
      "You need to identify the type of failure for which an Azure Availability Zone can be used to protect access to Azure services.\nWhat should you identify?\n",
    options: [
      {
        value: "a physical server failure",
      },
      {
        value: "an Azure region failure",
      },
      {
        value: "a storage failure",
      },
      {
        value: "an Azure data center failure",
        answer: 1,
      },
    ],
    tags: [],
    comment: `Availability zones expand the level of control you have to maintain the availability of the applications and data on your VMs. An Availability Zone is a physically separate zone, within an Azure region. There are three Availability Zones per supported Azure region.
Each Availability Zone has a distinct power source, network, and cooling. By architecting your solutions to use replicated VMs in zones, you can protect your apps and data from the loss of a datacenter. If one zone is compromised, then replicated apps and data are instantly available in another zone.`,
  },
  {
    id: "95",
    note: "This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.",
    question:
      "After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou plan to deploy several Azure virtual machines.\nYou need to ensure that the services running on the virtual machines are available if a single data center fails.\nSolution: You deploy the virtual machines to two or more resource groups.\nDoes this meet the goal?\n",
    options: [
      {
        value: "Yes",
      },
      {
        value: "No",
        answer: 1,
      },
    ],
    tags: [],
    comment: `A resource group is a logical container for Azure resources. When you create a resource group, you specify which location to create the resource group in.
However, when you create a virtual machine and place it in the resource group, the virtual machine can still be in a different location (different datacenter).
Therefore, creating multiple resource groups, even if they are in separate datacenters does not ensure that the services running on the virtual machines are available if a single data center fails.`,
  },
  {
    id: "96",
    note: "This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.",
    question:
      "After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou plan to deploy several Azure virtual machines.\nYou need to ensure that the services running on the virtual machines are available if a single data center fails.\nSolution: You deploy the virtual machines to a scale set.\nDoes this meet the goal?\n",
    options: [
      {
        value: "Yes",
      },
      {
        value: "No",
        answer: 1,
      },
    ],
    tags: [],
    comment: `This answer does not specify that the scale set will be configured across multiple data centers so this solution does not meet the goal.
Azure virtual machine scale sets let you create and manage a group of load balanced VMs. The number of VM instances can automatically increase or decrease in response to demand or a defined schedule. Scale sets provide high availability to your applications, and allow you to centrally manage, configure, and update many VMs.
Virtual machines in a scale set can be deployed across multiple update domains and fault domains to maximize availability and resilience to outages due to data center outages, and planned or unplanned maintenance events.`,
  },
  {
    id: "98",
    note: "",
    question:
      "This question requires that you evaluate the underlined text to determine if it is correct.\nResource groups provide organizations with the ability to manage the compliance of Azure resources across multiple subscriptions.\nInstructions: Review the underlined text. If it makes the statement correct, select `No change is needed`. If the statement is incorrect, select the answer choice that makes the statement correct.\n",
    options: [
      {
        value: "No change is needed",
      },
      {
        value: "Management groups",
      },
      {
        value: "Azure policies",
        answer: 1,
      },
      {
        value: "Azure App Service plans",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "99",
    note: "",
    question:
      "Your company plans to migrate to Azure.\nThe company has several departments. All the Azure resources used by each department will be managed by a department administrator.\nWhat are two possible techniques to segment Azure for the departments? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.\n",
    options: [
      {
        value: "multiple subscriptions",
        answer: 1,
      },
      {
        value: "multiple Azure Active Directory (Azure AD) directories",
      },
      {
        value: "multiple regions",
      },
      {
        value: "multiple resource groups",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "102",
    note: "",
    question:
      "You have an Azure environment that contains multiple Azure virtual machines.\nYou plan to implement a solution that enables the client computers on your on-premises network to communicate to the Azure virtual machines.\nYou need to recommend which Azure resources must be created for the planned solution.\nWhich two Azure resources should you include in the recommendation? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.\n",
    options: [
      {
        value: "a virtual network gateway",
        answer: 1,
      },
      {
        value: "a load balancer",
      },
      {
        value: "an application gateway",
      },
      {
        value: "a virtual network",
      },
      {
        value: "a gateway subnet",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "103",
    note: "",
    question:
      "You attempt to create several managed Microsoft SQL Server instances in an Azure environment and receive a message that you must increase your Azure subscription limits.\nWhat should you do to increase the limits?\n",
    options: [
      {
        value: "Create a service health alert",
      },
      {
        value: "Upgrade your support plan",
      },
      {
        value: "Modify an Azure policy",
      },
      {
        value: "Create a new support request",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "107",
    note: "",
    question:
      "Your company plans to move several servers to Azure.\nThe company's compliance policy states that a server named FinServer must be on a separate network segment.\nYou are evaluating which Azure services can be used to meet the compliance policy requirements.\nWhich Azure solution should you recommend?\n",
    options: [
      {
        value:
          "a resource group for FinServer and another resource group for all the other servers",
      },
      {
        value:
          "a virtual network for FinServer and another virtual network for all the other servers",
        answer: 1,
      },
      {
        value:
          "a VPN for FinServer and a virtual network gateway for each other server",
      },
      {
        value:
          "one resource group for all the servers and a resource lock for FinServer",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "108",
    note: "",
    question:
      "You plan to map a network drive from several computers that run Windows 10 to Azure Storage.\nYou need to create a storage solution in Azure for the planned mapped drive.\nWhat should you create?\n",
    options: [
      {
        value: "an Azure SQL database",
      },
      {
        value: "a virtual machine data disk",
      },
      {
        value: "a File service in a storage account",
        answer: 1,
      },
      {
        value: "a Blob service in a storage account",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "110",
    note: "",
    question:
      "Your company plans to start using Azure and will migrate all its network resources to Azure.\nYou need to start the planning process by exploring Azure.\nWhat should you create first?\n",
    options: [
      {
        value: "a subscription",
        answer: 1,
      },
      {
        value: "a resource group",
      },
      {
        value: "a virtual network",
      },
      {
        value: "a management group",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "151",
    note: "This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.",
    question:
      "After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou plan to deploy several Azure virtual machines.\nYou need to ensure that the services running on the virtual machines are available if a single data center fails.\nSolution: You deploy the virtual machines to two or more regions.\nDoes this meet the goal?\n",
    options: [
      {
        value: "Yes",
        answer: 1,
      },
      {
        value: "No",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "153",
    note: "",
    question: "At which OSI layer does ExpressRoute operate?\n",
    options: [
      {
        value: "Layer 2",
      },
      {
        value: "Layer 3",
        answer: 1,
      },
      {
        value: "Layer 5",
      },
      {
        value: "Layer 7",
      },
    ],
    tags: [],
    comment: `ExpressRoute operates in layer 3. Threats in the application layer can be prevented by using a network security appliance that restricts traffic to legitimate resources.`,
  },
  {
    id: "156",
    note: "",
    question:
      "You plan to store 20 TB of data in Azure. The data will be accessed infrequently and visualized by using Microsoft Power BI.\nYou need to recommend a storage solution for the data.\nWhich two solutions should you recommend? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.\n",
    options: [
      {
        value: "Azure Data Lake",
        answer: 1,
      },
      {
        value: "Azure Cosmos DB",
      },
      {
        value: "Azure SQL Data Warehouse",
        answer: 1,
      },
      {
        value: "Azure SQL Database",
      },
      {
        value: "Azure Database for PostgreSQL",
      },
    ],
    tags: [],
    comment: `You can use Power BI to analyze and visualize data stored in Azure Data Lake and Azure SQL Data Warehouse.`,
  },

  {
    id: "169",
    note: "",
    question:
      "You have an on-premises application that sends email notifications automatically based on a rule.\nYou plan to migrate the application to Azure.\nYou need to recommend a serverless computing solution for the application.\nWhat should you include in the recommendation?\n",
    options: [
      {
        value: "a web app",
      },
      {
        value: "a server image in Azure Marketplace",
      },
      {
        value: "a logic app",
        answer: 1,
      },
      {
        value: "an API app",
      },
    ],
    tags: [],
    comment: `Azure Logic Apps is a cloud service that helps you schedule, automate, and orchestrate tasks, business processes, and workflows when you need to integrate apps`,
  },
  {
    id: "170",
    note: "",
    question:
      "You plan to deploy a website to Azure. The website will be accessed by users worldwide and will host large video files.\nYou need to recommend which Azure feature must be used to provide the best video playback experience.\nWhat should you recommend?\n",
    options: [
      {
        value: "an application gateway",
      },
      {
        value: "an Azure ExpressRoute circuit",
      },
      {
        value: "a content delivery network (CDN)",
        answer: 1,
      },
      {
        value: "an Azure Traffic Manager profile",
      },
    ],
    tags: [],
    comment: `The question states that users are located worldwide and will be downloading large video files. The video playback experience would be improved if they can download the video from servers in the same region as the users. We can achieve this by using a content deliver network.
A content delivery network (CDN) is a distributed network of servers that can efficiently deliver web content to users. CDNs store cached content on edge servers in point-of-presence (POP) locations that are close to end users, to minimize latency.
Azure Content Delivery Network (CDN) offers developers a global solution for rapidly delivering high-bandwidth content to users by caching their content at strategically placed physical nodes across the world.`,
  },
  {
    id: "171",
    note: "",
    question:
      "Your company plans to deploy several million sensors that will upload data to Azure.\nYou need to identify which Azure resources must be created to support the planned solution.\nWhich two Azure resources should you identify? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.\n",
    options: [
      {
        value: "Azure Data Lake",
        answer: 1,
      },
      {
        value: "Azure Queue storage",
      },
      {
        value: "Azure File Storage",
      },
      {
        value: "Azure IoT Hub",
        answer: 1,
      },
      {
        value: "Azure Notification Hubs",
      },
    ],
    tags: [],
    comment: `IoT Hub (Internet of things Hub) provides data from millions of sensors.
There are two storage services IoT Hub can route messages to -- Azure Blob Storage and Azure Data Lake Storage`,
  },

  {
    id: "173",
    note: "",
    question:
      "Your company plans to deploy an Artificial Intelligence (AI) solution in Azure.\nWhat should the company use to build, test, and deploy predictive analytics solutions?\n",
    options: [
      {
        value: "Azure Logic Apps",
      },
      {
        value: "Azure Machine Learning Designer",
        answer: 1,
      },
      {
        value: "Azure Batch",
      },
      {
        value: "Azure Cosmos DB",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "175",
    note: "",
    question:
      "What can you use to automatically send an alert if an administrator stops an Azure virtual machine?\n",
    options: [
      {
        value: "Azure Advisor",
      },
      {
        value: "Azure Service Health",
      },
      {
        value: "Azure Monitor",
        answer: 1,
      },
      {
        value: "Azure Network Watcher",
      },
    ],
    tags: [],
    comment: ``,
  },

  {
    id: "178",
    note: "",
    question:
      "A team of developers at your company plans to deploy, and then remove, 50 virtual machines each week. All the virtual machines are configured by using Azure\nResource Manager templates.\nYou need to recommend which Azure service will minimize the administrative effort required to deploy and remove the virtual machines.\nWhat should you recommend?\n",
    options: [
      {
        value: "Azure Reserved Virtual Machine (VM) Instances",
      },
      {
        value: "Azure DevTest Labs",
        answer: 1,
      },
      {
        value: "Azure virtual machine scale sets",
      },
      {
        value: "Azure Virtual Desktop",
      },
    ],
    tags: [],
    comment: ``,
  },

  {
    id: "189",
    note: "",
    question: "Which service provides serverless computing in Azure?\n",
    options: [
      {
        value: "Azure Virtual Machines",
      },
      {
        value: "Azure Functions",
        answer: 1,
      },
      {
        value: "Azure storage account",
      },
      {
        value: "Azure dedicated hosts",
      },
    ],
    tags: [],
    comment: ``,
  },

  {
    id: "172",
    note: "",
    question:
      "You have an Azure web app.\nYou need to manage the settings of the web app from an iPhone.\nWhat are two Azure management tools that you can use? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.\n",
    options: [
      {
        value: "Azure CLI",
      },
      {
        value: "the Azure portal",
        answer: 1,
      },
      {
        value: "Azure Cloud Shell",
        answer: 1,
      },
      {
        value: "Windows PowerShell",
      },
      {
        value: "Azure Storage Explorer",
      },
    ],
    tags: [],
    comment: `The Azure portal is the web-based portal for managing Azure. Being web-based, you can use the Azure portal on an iPhone.
Azure Cloud Shell is a web-based command line for managing Azure. You access the Azure Cloud Shell from the Azure portal.`,
  },
  {
    id: "177",
    note: "",
    question:
      "You have an Azure environment.\nYou need to create a new Azure virtual machine from a tablet that runs the Android operating system.\nWhat are three possible solutions? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.\n",
    options: [
      {
        value: "Use Bash in Azure Cloud Shell.",
        answer: 1,
      },
      {
        value: "Use PowerShell in Azure Cloud Shell.",
        answer: 1,
      },
      {
        value: "Use the PowerApps portal.",
      },
      {
        value: "Use the Security & Compliance admin center.",
      },
      {
        value: "Use the Azure portal.",
        answer: 1,
      },
    ],
    tags: [],
    comment: `The Android tablet device will have a web browser (Chrome). That's enough to connect to the Azure portal.
The Azure portal offers three ways to create a VM:
✑ Using the graphical portal.
✑ Using the Azure Cloud Shell using Bash.
✑ Using the Azure Cloud Shell using PowerShell.`,
  },
  {
    id: "168",
    note: "This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.",
    question:
      "After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure environment. You need to create a new Azure virtual machine from a tablet that runs the Android operating system.\nSolution: You use Bash in Azure Cloud Shell.\nDoes this meet the goal?\n",
    options: [
      {
        value: "Yes",
        answer: 1,
      },
      {
        value: "No",
      },
    ],
    tags: [],
    comment: `With Azure Cloud Shell, you can create virtual machines using Bash or PowerShell.`,
  },
  {
    id: "160",
    note: "This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.",
    question:
      "After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nAn Azure administrator plans to run a PowerShell script that creates Azure resources.\nYou need to recommend which computer configuration to use to run the script.\nSolution: Run the script from a computer that runs Linux and has the Azure CLI tools installed.\nDoes this meet the goal?\n",
    options: [
      {
        value: "Yes",
      },
      {
        value: "No",
        answer: 1,
      },
    ],
    tags: [],
    comment: `A PowerShell script is a file that contains PowerShell cmdlets and code. A PowerShell script needs to be run in PowerShell.
PowerShell can now be installed on Linux. However, the question states that the computer has Azure CLI tools, not PowerShell installed. Therefore, this solution does not meet the goal.`,
  },
  {
    id: "161",
    note: "This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.",
    question:
      "After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nAn Azure administrator plans to run a PowerShell script that creates Azure resources.\nYou need to recommend which computer configuration to use to run the script.\nSolution: Run the script from a computer that runs Chrome OS and uses Azure Cloud Shell.\nDoes this meet the goal?\n",
    options: [
      {
        value: "Yes",
        answer: 1,
      },
      {
        value: "No",
      },
    ],
    tags: [],
    comment: `Azure Cloud Shell is an interactive, authenticated, browser-accessible shell for managing Azure resources.
With the Azure Cloud Shell, you can run PowerShell cmdlets and scripts in a Web browser.`,
  },
  {
    id: "163",
    note: "This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.",
    question:
      "After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nAn Azure administrator plans to run a PowerShell script that creates Azure resources.\nYou need to recommend which computer configuration to use to run the script.\nSolution: Run the script from a computer that runs macOS and has PowerShell Core 6.0 installed.\nDoes this meet the goal?\n",
    options: [
      {
        value: "Yes",
      },
      {
        value: "No",
        answer: 1,
      },
    ],
    tags: [],
    comment: `To run PowerShell scripts you only need PowerShell Core 6.0 installed, BUT the question also requests to create Azure resources. In order to accomplish that, you need the Azure PowerShell module which does not come with PowerShell Core 6.0. In fact, you must install it apart using the Install-Module cmdlet:
https://learn.microsoft.com/en-us/powershell/azure/install-az-ps?view=azps-9.2.0#installation

So, the correct answer is NO, as you cannot create Azure resources without the Azure PowerShell module.`,
  },
  {
    id: "180",
    note: "This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.",
    question:
      "After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure subscription named Subscription1. You sign in to the Azure portal and create a resource group named RG1.\nFrom Azure documentation, you have the following command that creates a virtual machine named VM1. az vm create --resource-group RG1 --name VM1 --image UbuntuLTS --generate-ssh-keys\nYou need to create VM1 in Subscription1 by using the command.\nSolution: From the Azure portal, launch Azure Cloud Shell and select PowerShell. Run the command in Cloud Shell.\nDoes this meet the goal?\n",
    options: [
      {
        value: "Yes",
        answer: 1,
      },
      {
        value: "No",
      },
    ],
    tags: [],
    comment: `The command can be run in the Azure Cloud Shell. Although this question says you select PowerShell rather than Bash, the Az commands will work in
PowerShell.`,
  },
  {
    id: "181",
    note: "This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.",
    question:
      "After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure subscription named Subscription1. You sign in to the Azure portal and create a resource group named RG1.\nFrom Azure documentation, you have the following command that creates a virtual machine named VM1. az vm create --resource-group RG1 --name VM1 --image UbuntuLTS\n--generate-ssh-keys\nYou need to create VM1 in Subscription1 by using the command.\nSolution: From a computer that runs Windows 10, install Azure CLI. From PowerShell, sign in to Azure and then run the command.\nDoes this meet the goal?\n",
    options: [
      {
        value: "Yes",
        answer: 1,
      },
      {
        value: "No",
      },
    ],
    tags: [],
    comment: `The command can be run from PowerShell or the command prompt if you have the Azure CLI installed.`,
  },
  {
    id: "182",
    note: "This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.",
    question:
      "After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure subscription named Subscription1. You sign in to the Azure portal and create a resource group named RG1.\nFrom Azure documentation, you have the following command that creates a virtual machine named VM1. az vm create --resource-group RG1 --name VM1 --image UbuntuLTS\n--generate-ssh-keys\nYou need to create VM1 in Subscription1 by using the command.\nSolution: From a computer that runs Windows 10, install Azure CLI. From a command prompt, sign in to Azure and then run the command.\nDoes this meet the goal?\n",
    options: [
      {
        value: "Yes",
        answer: 1,
      },
      {
        value: "No",
      },
    ],
    tags: [],
    comment: `The command can be run from PowerShell or the command prompt if you have the Azure CLI installed.
`,
  },
  {
    id: "187",
    note: "This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.",
    question:
      "After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nAn Azure administrator plans to run a PowerShell script that creates Azure resources.\nYou need to recommend which computer configuration to use to run the script.\nSolution: Run the script from a computer that runs Windows 10 and has the Azure PowerShell module installed.\nDoes this meet the goal?\n",
    options: [
      {
        value: "Yes",
        answer: 1,
      },
      {
        value: "No",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "190",
    note: "",
    question:
      "An Azure administrator plans to run a PowerShell script that creates Azure resources.\nYou need to recommend which computer configuration to use to run the script.\nWhich three computers can run the script? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.\n",
    options: [
      {
        value:
          "a computer that runs macOS and has PowerShell Core 6.0 installed.",
      },
      {
        value:
          "a computer that runs Windows 10 and has the Azure PowerShell module installed.",
        answer: 1,
      },
      {
        value:
          "a computer that runs Linux and has the Azure PowerShell module installed.",
        answer: 1,
      },
      {
        value:
          "a computer that runs Linux and has the Azure CLI tools installed.",
      },
      {
        value: "a computer that runs Chrome OS and uses Azure Cloud Shell.",
        answer: 1,
      },
    ],
    tags: [],
    comment: `Microsoft released the new AZ PowerShell module, and since then, that is the recommended way to connect to Microsoft Azure using PowerShell. When using MacOS and Linux, the PowerShell Core 6.x is the minimum requirement for that new module.

A- Just having Powershell Core 6.0 is not enough- Need Powershell Module to be installed-NO
B- Powershell Module Installed on Windows-YES
C- Powershell Module Installed-YES
D- NO
E- Browser Cloudshell has Powershell Module installed by default-YES`,
  },
  {
    id: "191",
    note: "This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.",
    question:
      "After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure subscription named Subscription1. You sign in to the Azure portal and create a resource group named RG1.\nFrom Azure documentation, you have the following command that creates a virtual machine named VM1. az vm create --resource-group RG1 --name VM1 --image UbuntuLTS --generate-ssh-keys\nYou need to create VM1 in Subscription1 by using the command.\nSolution: From the Azure portal, launch Azure Cloud Shell and select Bash. Run the command in Cloud Shell.\nDoes this meet the goal?\n",
    options: [
      {
        value: "Yes",
        answer: 1,
      },
      {
        value: "No",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "192",
    note: "",
    question:
      "Your company has several business units.\nEach business unit requires 20 different Azure resources for daily operation. All the business units require the same type of Azure resources.\nYou need to recommend a solution to automate the creation of the Azure resources.\nWhat should you include in the recommendations?\n",
    options: [
      {
        value: "Azure Resource Manager templates",
        answer: 1,
      },
      {
        value: "virtual machine scale sets",
      },
      {
        value: "the Azure API Management service",
      },
      {
        value: "management groups",
      },
    ],
    tags: [],
    comment: `You can use Azure Resource Manager templates to automate the creation of the Azure resources. Deploying resource through templates is known as
'Infrastructure as code'.`,
  },
  {
    id: "194",
    note: "",
    question:
      "What can you use to identify underutilized or unused Azure virtual machines?\n",
    options: [
      {
        value: "Azure Advisor",
        answer: 1,
      },
      {
        value: "Azure Cost Management + Billing",
      },
      {
        value: "Azure reservations",
      },
      {
        value: "Azure Policy",
      },
    ],
    tags: [],
    comment: `Azure Advisor helps you optimize and reduce your overall Azure spend by identifying idle and underutilized resources. `,
  },
  {
    id: "199",
    note: "",
    question:
      "A team of developers at your company plans to deploy, and then remove, 50 customized virtual machines each week. Thirty of the virtual machines run Windows\nServer 2016 and 20 of the virtual machines run Ubuntu Linux.\nYou need to recommend which Azure service will minimize the administrative effort required to deploy and remove the virtual machines.\nWhat should you recommend?\n",
    options: [
      {
        value: "Azure Reserved Virtual Machines (VM) Instances",
      },
      {
        value: "Azure virtual machine scale sets",
      },
      {
        value: "Azure DevTest Labs",
        answer: 1,
      },
      {
        value: "Microsoft Managed Desktop",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "201",
    note: "",
    question:
      "A support engineer plans to perform several Azure management tasks by using the Azure CLI.\nYou install the CLI on a computer.\nYou need to tell the support engineer which tools to use to run the CLI.\nWhich two tools should you instruct the support engineer to use? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.\n",
    options: [
      {
        value: "Command Prompt",
        answer: 1,
      },
      {
        value: "Azure Resource Explorer",
      },
      {
        value: "Windows PowerShell",
        answer: 1,
      },
      {
        value: "Windows Defender Firewall",
      },
      {
        value: "Network and Sharing Center",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "202",
    note: "This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.",
    question:
      "After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure environment. You need to create a new Azure virtual machine from a tablet that runs the Android operating system.\nSolution: You use PowerShell in Azure Cloud Shell.\nDoes this meet the goal?\n",
    options: [
      {
        value: "Yes",
        answer: 1,
      },
      {
        value: "No",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "203",
    note: "This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.",
    question:
      "After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure environment. You need to create a new Azure virtual machine from a tablet that runs the Android operating system.\nSolution: You use the PowerApps portal.\nDoes this meet the goal?\n",
    options: [
      {
        value: "Yes",
      },
      {
        value: "No",
        answer: 1,
      },
    ],
    tags: [],
    comment: `PowerApps lets you quickly build business applications with little or no code. It is not used to create Azure virtual machines.`,
  },
  {
    id: "204",
    note: "This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.",
    question:
      "After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure environment. You need to create a new Azure virtual machine from a tablet that runs the Android operating system.\nSolution: You use the Azure portal.\nDoes this meet the goal?\n",
    options: [
      {
        value: "Yes",
        answer: 1,
      },
      {
        value: "No",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "210",
    note: "",
    question:
      "Which Azure service provides a set of version control tools to manage code?\n",
    options: [
      {
        value: "Azure Repos",
        answer: 1,
      },
      {
        value: "Azure DevTest Labs",
      },
      {
        value: "Azure Storage",
      },
      {
        value: "Azure Cosmos DB",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "212",
    note: "",
    question:
      "You have a virtual machine named VM1 that runs Windows Server 2016. VM1 is in the East US Azure region.\nWhich Azure service should you use from the Azure portal to view service failure notifications that can affect the availability of VM1?\n",
    options: [
      {
        value: "Azure Service Fabric",
      },
      {
        value: "Azure Monitor",
      },
      {
        value: "Azure virtual machines",
        answer: 1,
      },
      {
        value: "Azure Advisor",
      },
    ],
    tags: [],
    comment: `In the Azure virtual machines page in the Azure portal, there is a named Maintenance Status.`,
  },
  {
    id: "213",
    note: "This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.",
    question:
      "After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYour Azure environment contains multiple Azure virtual machines.\nYou need to ensure that a virtual machine named VM1 is accessible from the Internet over HTTP.\nSolution: You modify an Azure Traffic Manager profile.\nDoes this meet the goal?\n",
    options: [
      {
        value: "Yes",
      },
      {
        value: "No",
        answer: 1,
      },
    ],
    tags: [],
    comment: `Azure Traffic Manager is a DNS-based load balancing solution. It is not used to ensure that a virtual machine named VM1 is accessible from the Internet over
HTTP.
To ensure that a virtual machine named VM1 is accessible from the Internet over HTTP, you need to modify a network security group or Azure Firewall.`,
  },
  {
    id: "214",
    note: "",
    question:
      "Your company plans to deploy several web servers and several database servers to Azure.\nYou need to recommend an Azure solution to limit the types of connections from the web servers to the database servers.\nWhat should you include in the recommendation?\n",
    options: [
      {
        value: "network security groups (NSGs)",
        answer: 1,
      },
      {
        value: "Azure Service Bus",
      },
      {
        value: "a local network gateway",
      },
      {
        value: "a route filter",
      },
    ],
    tags: [],
    comment: `You can filter network traffic to and from Azure resources in an Azure virtual network with a network security group. A network security group contains security rules that allow or deny inbound network traffic to, or outbound network traffic from, several types of Azure resources.`,
  },
  {
    id: "216",
    note: "",
    question:
      "Which service provides network traffic filtering across multiple Azure subscriptions and virtual networks?\n",
    options: [
      {
        value: "Azure Firewall",
        answer: 1,
      },
      {
        value: "an application security group",
      },
      {
        value: "Azure DDoS protection",
      },
      {
        value: "a network security group (NSG)",
      },
    ],
    tags: [],
    comment: `Keyword: filtering.
Azure Firewall is a managed, cloud-based network security service that protects your Azure Virtual Network resources.`,
  },
  {
    id: "217",
    note: "",
    question: "Which Azure service should you use to store certificates?\n",
    options: [
      {
        value: "Azure Security Center",
      },
      {
        value: "an Azure Storage account",
      },
      {
        value: "Azure Key Vault",
        answer: 1,
      },
      {
        value: "Azure Information Protection",
      },
    ],
    tags: [],
    comment: `Azure Key Vault is a secure store for storage various types of sensitive information including passwords and certificates.`,
  },
  {
    id: "218",
    note: "",
    question:
      "Which Azure service can you use as a security information and event management (SIEM) solution?\n",
    options: [
      {
        value: "Azure Analysis Services",
      },
      {
        value: "Azure Sentinel",
        answer: 1,
      },
      {
        value: "Azure Information Protection",
      },
      {
        value: "Azure Cognitive Services",
      },
    ],
    tags: [],
    comment: `Can be remembered as "SIEMtinel" ;)`,
  },
  {
    id: "224",
    note: "",
    question:
      "You have an Azure virtual machine named VM1.\nYou plan to encrypt VM1 by using Azure Disk Encryption.\nWhich Azure resource must you create first?\n",
    options: [
      {
        value: "an Azure Storage account",
      },
      {
        value: "an Azure Key Vault",
        answer: 1,
      },
      {
        value: "an Azure Information Protection policy",
      },
      {
        value: "an Encryption key",
      },
    ],
    tags: [],
    comment: `Azure Disk Encryption requires an Azure Key Vault to control and manage disk encryption keys and secrets.`,
  },
  {
    id: "225",
    note: "",
    question:
      "Which resources can be used as a source for a Network security group inbound security rule?\n",
    options: [
      {
        value: "Service Tags only",
      },
      {
        value: "IP Addresses, Service tags and Application security groups",
        answer: 1,
      },
      {
        value: "Application security groups only",
      },
      {
        value: "IP Addresses only",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "1",
    note: "",
    question:
      "If you plan to web application in the Azure platform as a service solution of Azure Web Apps, then the platform will have the ability to scale automatically?",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "2",
    note: "",
    question:
      "You decide to create 2 Virtual machines. Each virtual machine is of the size D2s v3. Would these machines always generate the same monthly cost?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "3",
    note: "",
    question:
      "Your team needs to have a tool that provides a digital online assistant that can provide speech support. Which of the following service can be used for this purpose?",
    options: [
      {
        value: "Azure Machine Learning.",
      },
      {
        value: "Azure loT Hub.",
      },
      {
        value: "Azure Al bot.",
        answer: 1,
      },
      {
        value: "Azure Functions.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "4",
    note: "",
    question:
      "Your team needs to have a tool that can use past trainings to provide predictions of very high probability. Which of the following service can be used for this purpose?",
    options: [
      {
        value: "Azure Machine Learning.",
        answer: 1,
      },
      {
        value: "Azure loT Hub.",
      },
      {
        value: "Azure Al bot.",
      },
      {
        value: "Azure Functions.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "5",
    note: "",
    question:
      "Your team needs to have a tool that can provide serverless computing capabilities. Which of the following service can be used for this purpose?",
    options: [
      {
        value: "Azure Machine Learning.",
      },
      {
        value: "Azure loT Hub.",
      },
      {
        value: "Azure Al bot.",
      },
      {
        value: "Azure Functions.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "6",
    note: "",
    question:
      "Your team needs to have a tool that can be used to process data from millions of sensors. Which of the following service can be used for this purpose?",
    options: [
      {
        value: "Azure Machine Learning.",
      },
      {
        value: "Azure loT Hub.",
        answer: 1,
      },
      {
        value: "Azure Al bot.",
      },
      {
        value: "Azure Functions.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "7",
    note: "",
    question:
      "A company needs to deploy a set of resources to Azure. Below are the key requirements for the deployment: The need to be deployed across several departments. The resources that need to be deployed are all of the same type. You need to recommend a solution to automate the deployment of the Azure resources. Which of the following would you use for this requirement?",
    options: [
      {
        value: "Virtual Machine scale sets.",
      },
      {
        value: "Management Groups.",
      },
      {
        value: "Azure AD.",
      },
      {
        value: "Azure Resource Manager Templates.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "8",
    note: "",
    question:
      "Your company needs to deploy an application to virtual machines hosted in Azure. The solution must ensure an SLA of 99.99%. What is the minimum number of virtual machines and availability zones that you need to recommend for the deployment?",
    options: [
      {
        value: "One virtual machine and One availability zone.",
      },
      {
        value: "Two virtual machines and availability zone.",
      },
      {
        value: "One virtual machine and Two availability zones.",
      },
      {
        value: "Two virtual machines and Two availability zones.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "9",
    note: "",
    question:
      "Your team needs a tool that can be used to correlate events from multiple resources into a central repository. Which of the following can be used for this purpose?",
    options: [
      {
        value: "Azure Event Hubs.",
      },
      {
        value: "Azure Security Center.",
      },
      {
        value: "Azure AD.",
      },
      {
        value: "Azure Log Analytics.",
        answer: 1,
      },
    ],
    tags: [],
    comment: `Azure Log Analytics is specifically built to collect and correlate data from multiple Azure resources, on-premises environments, and even other clouds.

It then centralizes that data for analysis, querying, alerting, and visualization.

It is a key part of Azure Monitor.`,
  },
  {
    id: "10",
    note: "",
    question:
      "A company is planning on hosting an application on an Azure Virtual Machine. It needs to be ensured that the application hosted on the virtual machine is accessible from the Internet over HTTPS. You decide to implement a DDOS protection plan. Would this satisfy the requirement?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "11",
    note: "",
    question:
      "A company is planning on hosting an application on an Azure Virtual Machine. It needs to be ensured that the application hosted on the virtual machine is accessible from the Internet over HTTPS. You decide to implement an Azure Traffic Manager profile. Would this satisfy the requirement?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "12",
    note: "",
    question:
      "Which of the following customers are eligible to use Azure Government to develop a cloud solution? Choose 2 answers from the options given below.",
    options: [
      {
        value: "United states government Entity.",
        answer: 1,
      },
      {
        value: "A United states government contractor.",
        answer: 1,
      },
      {
        value: "A European government Entity.",
      },
      {
        value: "A European government contractor.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "13",
    note: "",
    question:
      "A team is currently planning on using Azure for hosting resources. They are going to create users which would have access to the Azure resources. The want to implement Multi-Factor authentication for the users. Is it required to deploy a federated solution to implement Multi-Factor authentication?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "14",
    note: "",
    question:
      "A team is currently planning on using Azure for hosting resources. They are going to create users which would have access to the Azure resources. The want to implement Multi-Factor authentication for the users. Are two valid methods for Azure Multi-Factor authentication picture identification and entering a passport number.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "15",
    note: "",
    question:
      "Which of the following support plan gives you access to best practice information, health status and notifications, and 24/7 access to billing information at the lowest possible cost.",
    options: [
      {
        value: "Basic.",
        answer: 1,
      },
      {
        value: "Standard.",
      },
      {
        value: "Premier.",
      },
      {
        value: "Developer.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "16",
    note: "",
    question:
      "If you plan to host a web application in the Azure platform as a service solution of Azure Web Apps, then you will have complete control over the underlying operating system.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "17",
    note: "",
    question:
      "You decide to create a virtual machine which is of the size D2s_v3. If you plan to stop the virtual machine, will you incur any costs for the storage associated with the virtual machine.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "18",
    note: "",
    question:
      "Your company is planning on using Azure for hosting Infrastructure level resources such as Azure Virtual Machines. When planning for the costing aspect for these resources, is there a flexibility offered when it comes to Capital and Operational Expenditure.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "19",
    note: "",
    question:
      "You are looking at using a Software as a Solution service in Azure. Which of the following would you be responsible for?",
    options: [
      {
        value: "High availability of the solution.",
      },
      {
        value: "Configuration of the solution.",
        answer: 1,
      },
      {
        value: "Installing the solution.",
      },
      {
        value: "Scalability of the solution.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "20",
    note: "",
    question:
      "A company is planning on migrating all of their on-premise servers to Azure. Their business continuity department has advised that they need to ensure that servers hosted in Azure are available even if an Azure Data Center were to go down. Which of the following is a concept that would be involved in the design stage for this requirement.",
    options: [
      {
        value: "Scalability.",
      },
      {
        value: "Fault Tolerance.",
        answer: 1,
      },
      {
        value: "Low Latency.",
      },
      {
        value: "Elasticity.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "21",
    note: "",
    question:
      "Under which of the following circumstances could a company look at decommissioning its data center?",
    options: [
      {
        value: "If they have their infrastructure hosted in a private cloud.",
      },
      {
        value: "If they have their infrastructure hosted in the public cloud.",
        answer: 1,
      },
      {
        value: "If they have their infrastructure hosted in a hybrid cloud.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "22",
    note: "",
    question:
      "A company is planning on migrating a web site to Azure. This is a public web site that is used by users on the Internet. Which of the following must the company plan for if they are planning to migrate the web site to Azure?",
    options: [
      {
        value: "They would need to deploy a VPN.",
      },
      {
        value:
          "They would need to pay for the cost to transfer the web site to Azure.",
      },
      {
        value:
          "They would need to pay for the monthly costs incurred for hosting the web site.",
        answer: 1,
      },
      {
        value:
          "They would need to pay for the number of connections to the web site.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "23",
    note: "",
    question:
      "An administrator needs to run a script written in PowerShell. This script is going to create a virtual machine in Azure. Would the script run on a computer that runs Linux and has the Azure CLI tools installed?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "24",
    note: "",
    question:
      "An administrator needs to run a script written in PowerShell. This script is going to create a virtual machine in Azure. Would you be able to run the script on a machine that has Chrome OS installed and uses Azure Cloud Shell?",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "25",
    note: "",
    question:
      "An administrator needs to run a script written in PowerShell. This script is going to create a virtual machine in Azure. Would you be able to run the script on a machine that has macOS and PowerShell core installed?",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "26",
    note: "",
    question:
      "An Administrator needs to view the list of planned maintenance events that could potentially affect the availability of the resources hosted in an Azure subscription. Which of the following blade in the Azure portal should the administrator consider for this requirement?",
    options: [
      {
        value: "Resource Groups.",
      },
      {
        value: "Azure Active Directory.",
      },
      {
        value: "Azure Advisor.",
      },
      {
        value: "Help + Support.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "27",
    note: "",
    question:
      "Your team needs to have an integrated solution in place that can be used for the deployment of code. Which of the following service can be used for this purpose?",
    options: [
      {
        value: "Azure Advisor.",
      },
      {
        value: "Azure Cognitive Services.",
      },
      {
        value: "Azure Application Insights.",
      },
      {
        value: "Azure DevOps.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "28",
    note: "",
    question:
      "Your team needs a tool that can provide guidance and recommendations that can be used to improve an Azure environment. Which of the following service can be used for this purpose?",
    options: [
      {
        value: "Azure Advisor.",
        answer: 1,
      },
      {
        value: "Azure Cognitive Services.",
      },
      {
        value: "Azure Application Insights.",
      },
      {
        value: "Azure DevOps.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "29",
    note: "",
    question:
      "Your team needs to use a tool that can be used to build intelligent Artificial Intelligence based applications. Which of the following service can be used for this purpose?",
    options: [
      {
        value: "Azure Advisor.",
      },
      {
        value: "Azure Cognitive Services.",
        answer: 1,
      },
      {
        value: "Azure Application Insights.",
      },
      {
        value: "Azure DevOps.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "30",
    note: "",
    question:
      "Your team needs to have a tool that can be used to monitor web applications deployed to Azure. Which of the following service can be used for this purpose?",
    options: [
      {
        value: "Azure Advisor.",
      },
      {
        value: "Azure Cognitive Services.",
      },
      {
        value: "Azure Application Insights.",
        answer: 1,
      },
      {
        value: "Azure DevOps.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "31",
    note: "",
    question:
      "A team currently has several computers in their on-premise environment that runs on Windows 10. They need to share files by enabling mapped drives from the computers. Which of the following would be an ideal storage solution for this requirement?",
    options: [
      {
        value: "Using the Azure storage - BLOB service.",
      },
      {
        value: "Using the Azure storage - File service.",
        answer: 1,
      },
      {
        value: "Using the Azure storage - Queue service.",
      },
      {
        value: "Using the Azure storage - Table service.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "32",
    note: "",
    question:
      "A company wants to have a data store hosted in Azure. Below are the key requirements for the data store: The data store must be able to store JSON documents. The data store must be able to handle data writes from multiple regions. Which of the following would be the ideal data store for this requirement?",
    options: [
      {
        value: "Azure SQL Database.",
      },
      {
        value: "Azure Cosmos DB.",
        answer: 1,
      },
      {
        value: "Azure Redis Cache.",
      },
      {
        value: "Azure SQL data warehouse.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "33",
    note: "",
    question:
      "A team is planning on deploying Azure Virtual Machines to a resource group named demogroup. The group has been created in the US Central region. Do the virtual machines deployed to the resource group also need to be deployed to the US Central region only?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "34",
    note: "",
    question:
      "A team is planning on assigning tags to a resource group. Would the tag be inherited by resources in the resource group?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "35",
    note: "",
    question:
      "A set of IAM permissions have been assigned to a resource group. Would the resources in the resource group automatically inherit the IAM permissions assigned to the resource group?",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "36",
    note: "",
    question:
      "Which of the following service can be used to build, test and deploy a predictive analytics solution that could subsequently be used to deploy an Artificial Intelligence solution to Azure?",
    options: [
      {
        value: "Azure Functions.",
      },
      {
        value: "Azure Logic Apps.",
      },
      {
        value: "Azure Batch.",
      },
      {
        value: "Azure Machine Learning Studio.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "37",
    note: "",
    question:
      "Your team is planning on using the Azure Advisor tool. Would the Azure Advisor tool give recommendations on how to configure network settings for Azure virtual machines?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "38",
    note: "",
    question:
      "Your team is planning on using the Azure Advisor tool. Would the Azure Advisor tool give recommendations on how to save costs when it comes to hosting virtual machines in Azure?",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "39",
    note: "",
    question:
      "Your team is planning on using the Azure Advisor tool. Would the Azure Advisor tool give recommendations on how to improve the security for Azure Active Directory?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "40",
    note: "",
    question:
      "A support engineer currently has a computer that runs Ubuntu. Which of the following Azure Management tools could be run from this computer?",
    options: [
      {
        value: "Azure CLI.",
        answer: 1,
      },
      {
        value: "Azure PowerShell.",
        answer: 1,
      },
      {
        value: "The Azure Portal.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "41",
    note: "",
    question:
      "Your company has just setup an Azure account and Azure Active Directory. They need to ensure that when users connect to Azure AD from the Internet from an Anonymous IP address, they are prompted to change their password automatically. Which of the following Azure service can help them achieve this requirement?",
    options: [
      {
        value: "Azure AD Connect.",
      },
      {
        value: "Azure AD Identity Protection.",
        answer: 1,
      },
      {
        value: "Azure AD Privileged Identity Management.",
      },
      {
        value: "Azure Advanced Threat Protection.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "42",
    note: "",
    question:
      "A company is planning on creating several virtual machines that will be used to host web and database servers. You need to limit the type of connections from the web and database servers. Which of the following can be used to fulfil this requirement?",
    options: [
      {
        value: "Network Security Groups.",
        answer: 1,
      },
      {
        value: "Azure AD Identity Protection.",
      },
      {
        value: "Azure VPN.",
      },
      {
        value: "Azure Route tables.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "43",
    note: "",
    question:
      "Which of the following can be used to allow an organization to manage the compliance of resources across multiple subscriptions?",
    options: [
      {
        value: "Resource Groups.",
      },
      {
        value: "Management Groups.",
      },
      {
        value: "Azure Policies.",
        answer: 1,
      },
      {
        value: "Azure Resource Manager templates.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "44",
    note: "",
    question:
      "Your company is planning on setting an Azure environment by setting up a subscription and Azure AD. They need to purchase a low-cost option support plan. The support plan needs to ensure 24*7 access to support engineers by phone or email. You suggest opting for the Basic Support plan. Does this support the requirement?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "45",
    note: "",
    question:
      "Your company is planning on setting an Azure environment by setting up a subscription and Azure AD. They need to purchase a low-cost option support plan. The support plan needs to ensure 24*7 access to support engineers by phone or email. You suggest opting for the Standard Support plan. Does this support the requirement?",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "46",
    note: "",
    question:
      "Does Microsoft release most of the Azure services in private preview before being introduced in public preview?",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "47",
    note: "",
    question:
      "Is it true that Azure services released in public preview can only be managed via the Azure command line interface?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "48",
    note: "",
    question:
      "Is it true that an Azure service that is released in private preview is made available to all Azure customers?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "49",
    note: "",
    question:
      "Is it true that an Azure service that is released in public preview is made available to all Azure customers?",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "50",
    note: "",
    question:
      "Is it true that an Azure service that is released as generally available is made available to all Azure customers?",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "51",
    note: "",
    question:
      "Can a single Microsoft Account be used to manage multiple Azure subscriptions?",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "52",
    note: "",
    question:
      "Is it possible to merge subscriptions into a single subscription?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "53",
    note: "",
    question:
      "A company has just started using Azure. They have setup a subscription and started deploying resources to Azure. Would they be guaranteed a service level agreement of at least 99.9% for paid Azure services?",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "54",
    note: "",
    question:
      "A company has just started using Azure. They have setup a subscription and started deploying resources to Azure. Could the company increase the SLA for their resources by deploying resources across multiple regions?",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "55",
    note: "",
    question:
      "A company has just started using Azure. They have setup a subscription and started deploying resources to Azure. Could the company increase the SLA for their resources by purchasing multiple subscriptions?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "56",
    note: "",
    question:
      "A set of virtual machines have been created in a subscription. You have now paid for a new subscription. Is it possible to move the virtual machines to the new subscription?",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "57",
    note: "",
    question:
      "A company has defined the following resources in Azure: 10 Public IP addresses. 20 users in Azure AD. 5 user groups in Azure AD. They now want to reduce the costs associated with the Azure account. Would the removal of the users from the account help reduce the cost?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "58",
    note: "",
    question:
      "A company has defined the following resources in Azure: 10 Public IP addresses. 20 users in Azure AD. 5 user groups in Azure AD. They now want to reduce the costs associated with the Azure account. Would the removal of the user groups from the account help reduce the cost?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "59",
    note: "",
    question:
      "A company has defined the following resources in Azure: 10 Public IP addresses. 20 users in Azure AD. 5 user groups in Azure AD. They now want to reduce the costs associated with the Azure account. Would the removal of the public IP addresses from the account help reduce the cost?",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "60",
    note: "",
    question:
      "A team member currently has a laptop that is based on the Android OS. The team member wants to create a virtual machine in Azure. The team member decides to use the Azure portal to create the virtual machine. Would this suit the purpose?",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "61",
    note: "",
    question:
      "A team member currently has a laptop that is based on the Android OS. The team member wants to create a virtual machine in Azure. The team member decides to use the PowerApps portal to create the virtual machine. Would this suit the purpose?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "62",
    note: "",
    question:
      "Which of the following URL is used to manage the creation of Azure resources?",
    options: [
      {
        value: "https://admin.azure.com",
      },
      {
        value: "https://admin.azurewebsites.com",
      },
      {
        value: "https://portal.microsoft.com",
      },
      {
        value: "https://portal.azurewebsites.com",
      },
      {
        value: "https://portal.azure.com",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "63",
    note: "",
    question:
      "You need to create a virtual machine in Azure. Which of the following storage account service is used to store the data disks for the virtual machine?",
    options: [
      {
        value: "Blobs.",
        answer: 1,
      },
      {
        value: "Files.",
      },
      {
        value: "Tables.",
      },
      {
        value: "Queues.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "64",
    note: "",
    question:
      "Your company needs to have a data store in Azure. Below are the key requirements for the data store: The data store should be capable of storing 10TB of data. The data would be accessed infrequently. The data would need to be visualised using PowerBI. Which of the following services could you use for this requirement? Choose 2 answers from the options given below.",
    options: [
      {
        value: "Azure SQL database.",
      },
      {
        value: "Azure SQL data warehouse.",
        answer: 1,
      },
      {
        value: "Azure Data Lake.",
        answer: 1,
      },
      {
        value: "Azure Cosmos DB.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "65",
    note: "",
    question:
      "You need to deploy several virtual machines to Azure. You need to ensure that you can assign permissions to the virtual machines simultaneously. Which of the following can be implemented to fulfil this requirement?",
    options: [
      {
        value: "Deploy all the virtual machines to the same region.",
      },
      {
        value: "Deploy all the virtual machines to the same resource group.",
        answer: 1,
      },
      {
        value: "Deploy all the virtual machines to the same availability zone.",
      },
      {
        value: "Deploy all the virtual machines to the same scale.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "66",
    note: "",
    question:
      "Which of the following is a benefit of moving on-premise servers to the Azure cloud environment?",
    options: [
      {
        value:
          "The Azure platform is a public cloud platform wherein all the resources can be accessed by the public.",
      },
      {
        value:
          "The Azure platform is a private cloud platform wherein all the resources can be accessed only by a private handful of people.",
      },
      {
        value:
          "The Azure platform is a shared platform wherein multiple companies can use a portion of the resources on the platform.",
        answer: 1,
      },
      {
        value:
          "The Azure platform is an ecommerce platform wherein users can buy and sell resources as required.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "67",
    note: "",
    question:
      "What are two characteristics of the public cloud? Each correct answer presents a complete solution.",
    options: [
      {
        value: "Unsecured connections.",
      },
      {
        value: "Limited storage.",
      },
      {
        value: "Metered pricing.",
        answer: 1,
      },
      {
        value: "Self-service management.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "68",
    note: "",
    question:
      "Your company plans to migrate all its data and resources to Azure. The company migration plan states that only Platform as a Service (PaaS) solutions must be used in Azure. You need to deploy an Azure environment that meets the company migration plan. Solution: You create an Azure App Service and Azure SQL databases. Does this meet the goal?",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "69",
    note: "",
    question:
      "You plan to migrate a web application to Azure. The web application is accessed by external users. You need to recommend a cloud deployment solution to minimize the amount of administrative effort used to manage the web application. What should you include in the recommendation?",
    options: [
      {
        value: "Software as a Service (SaaS).",
      },
      {
        value: "Platform as a Service (PaaS).",
        answer: 1,
      },
      {
        value: "Infrastructure as a Service (laaS).",
      },
      {
        value: "Database as a Service (DaaS).",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "70",
    note: "",
    question:
      "You have an on-premises network that contains 100 servers. You need to recommend a solution that provides additional resources to your users. The solution must minimize capital and operational expenditure costs. What should you include in the recommendation?",
    options: [
      {
        value: "A complete migration to the public cloud.",
      },
      {
        value: "An additional data center.",
      },
      {
        value: "A private cloud.",
      },
      {
        value: "A hybrid cloud.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "71",
    note: "",
    question:
      "You plan to migrate several servers from an on-premises network to Azure. What is an advantage of using a public cloud service for the servers over an on-premises network?",
    options: [
      {
        value:
          "The public cloud is owned by the public, NOT a private corporation.",
      },
      {
        value:
          "The public cloud is a crowd-sourcing solution that provides corporations with the ability to enhance the cloud.",
      },
      {
        value:
          "All public cloud resources can be freely accessed by every member of the public.",
      },
      {
        value:
          "The public cloud is a shared entity whereby multiple corporations each use a portion of the resources in the cloud.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "72",
    note: "",
    question:
      "You have 1,000 virtual machines hosted on the Hyper-V hosts in a data center. You plan to migrate all the virtual machines to an Azure pay-as-you-go subscription. You need to identify which expenditure model to use for the planned Azure solution. Which expenditure model should you identify?",
    options: [
      {
        value: "Operational.",
        answer: 1,
      },
      {
        value: "Elastic.",
      },
      {
        value: "Capital.",
      },
      {
        value: "Scalable.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "73",
    note: "",
    question:
      "You plan to provision Infrastructure as a Service (laaS) resources in Azure. Which resource is an example of laaS?",
    options: [
      {
        value: "An Azure web app.",
      },
      {
        value: "An Azure virtual machine.",
        answer: 1,
      },
      {
        value: "An Azure logic app.",
      },
      {
        value: "An Azure SQL database.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "74",
    note: "",
    question:
      "A team of developers at your company plans to deploy, and then remove, 50 virtual machines each week. All the virtual machines are configured by using Azure Resource Manager templates. You need to recommend which Azure service will minimize the administrative effort required to deploy and remove the virtual machines. What should you recommend?",
    options: [
      {
        value: "Azure Reserved Virtual Machine (VM) Instances.",
      },
      {
        value: "Azure DevTest Labs.",
        answer: 1,
      },
      {
        value: "Azure virtual machine scale sets.",
      },
      {
        value: "Microsoft Managed Desktop.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "75",
    note: "",
    question:
      "Your company plans to migrate all its data and resources to Azure. The company migration plan states that only Platform as a Service (PaaS) solutions must be used in Azure. You need to deploy an Azure environment that meets the company migration plan. Solution: You create an Azure virtual machines, Azure SQL databases, and Azure Storage accounts. Does this meet the goal?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "76",
    note: "",
    question:
      "Your company plans to deploy several custom applications to Azure. The applications will provide invoicing services to the customers of the company. Each application will have several prerequisite applications and services installed. You need to recommend a cloud deployment solution for all the applications. What should you recommend?",
    options: [
      {
        value: "Software as a Service (SaaS).",
      },
      {
        value: "Platform as a Service (PaaS).",
      },
      {
        value: "Infrastructure as a Service (laas).",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "77",
    note: "",
    question:
      "[An Azure region] contains one or more data centers that are connected by using a low-latency network.",
    options: [
      {
        value: "No change is needed.",
        answer: 1,
      },
      {
        value:
          "Is found in each country where Microsoft has a subsidiary office.",
      },
      {
        value: "Can be found in every country in Europe and the Americas only.",
      },
      {
        value:
          "Contains one or more data centers that are connected by using a high-latency network.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "78",
    note: "",
    question:
      "A support engineer plans to perform several Azure management tasks by using the Azure CLI. You install the CLI on a computer. You need to tell the support engineer which tools to use to run the CLI. Which two tools should you instruct the support engineer to use? Each correct answer presents a complete solution.",
    options: [
      {
        value: "Command Prompt.",
        answer: 1,
      },
      {
        value: "Azure Resource Explorer.",
      },
      {
        value: "Windowe PowerShell.",
        answer: 1,
      },
      {
        value: "Windows Defender Firewall.",
      },
      {
        value: "Network and Sharing Center.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "79",
    note: "",
    question:
      "You plan to store 20 TB of data in Azure. The data will be accessed infrequently and visualized by using Microsoft Power BI. You need to recommend a storage solution for the data Which two solutions should you recommend? Each correct answer presents a complete solution.",
    options: [
      {
        value: "Azure Data Lake.",
        answer: 1,
      },
      {
        value: "Azure Cosmos DB.",
      },
      {
        value: "Azure SQL Data Warehouse.",
        answer: 1,
      },
      {
        value: "Azure SQL Database.",
      },
      {
        value: "Azure Database for PostgreSQL.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "80",
    note: "",
    question:
      "You need to identify the type of failure for which an Azure Availability Zone can be used to protect access to Azure services. What should you identify?",
    options: [
      {
        value: "A physical server failure.",
      },
      {
        value: "An Azure region failure.",
      },
      {
        value: "A storage failure.",
      },
      {
        value: "An Azure data center failure.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "81",
    note: "",
    question:
      "You have a virtual machine named VM1 that runs Windows Server 2016. VM1 is in the East US Azure region. Which Azure service should you use from the Azure portal to view service failure notifications that can affect the availability of VM1?",
    options: [
      {
        value: "Azure Service Fabric.",
      },
      {
        value: "Azure Monitor.",
      },
      {
        value: "Azure virtual machines.",
        answer: 1,
      },
      {
        value: "Azure Advisor.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "82",
    note: "",
    question:
      "An Azure administrator plans to run a PowerShell script that creates Azure resources. You need to recommend which computer configuration to use to run the script. Solution: Run the script from a computer that runs Linux and has the Azure CLI tools installed. Does this meet the goal?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "83",
    note: "",
    question:
      "An Azure administrator plans to run a PowerShell script that creates Azure resources. You need to recommend which computer configuration to use to run the script. Solution: Run the script from a computer that runs Chrome OS and uses Azure Cloud Shell Does this meet the goal?",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "84",
    note: "",
    question:
      "You have an Azure environment that contains 10 virtual networks and 100 virtual machines You need to limit the amount of inbound traffic to all the Azure virtual network. What should you create?",
    options: [
      {
        value: "One application security group (ASG).",
      },
      {
        value: "10 virtual network gateways.",
      },
      {
        value: "10 Azure ExpressRoute circuits.",
      },
      {
        value: "One Azure firewall.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "85",
    note: "",
    question:
      "You have an Azure environment that contains multiple Azure virtual machines. You plan to implement a solution that enables the client computers on your on-premises network to communicate to the Azure virtual machines. You need to recommend which Azure resources must be created for the planned solution. Which two Azure resources should you include in the recommendation?",
    options: [
      {
        value: "A virtual network gateway.",
        answer: 1,
      },
      {
        value: "A load balancer.",
      },
      {
        value: "An application gateway.",
      },
      {
        value: "A virtual network.",
      },
      {
        value: "A gateway subnet.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "86",
    note: "",
    question:
      "You have an Azure environment. You need to create a new Azure virtual machine from a tablet that runs the Android operating system. Solution: You use Bash in Azure Cloud Shell. Does this meet the goal?",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "87",
    note: "",
    question:
      "Your company plans to move several servers to Azure. The company compliance policy states that a server named FinServer must be on a separate network segment. You are evaluating which Azure services can be used to meet the compliance policy requirements. Which Azure solution should you recommend?",
    options: [
      {
        value:
          "A resource group for FinServer and another resource group for all the other servers.",
      },
      {
        value:
          "A virtual network for FinServer and another virtual network for all the other servers.",
        answer: 1,
      },
      {
        value:
          "A VPN for FinServer and a virtual network gateway for another server.",
      },
      {
        value:
          "One resource group for all the servers and a resource lock for FinServer.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "88",
    note: "",
    question:
      "You plan to map a network drive from several computers that run Windows 10 to Azure Storage. You need to create a storage solution in Azure for the planned mapped drive. What should you create?",
    options: [
      {
        value: "An Azure SQL database.",
      },
      {
        value: "A virtual machine data disk.",
      },
      {
        value: "A Files service in a storage account.",
        answer: 1,
      },
      {
        value: "A Blobs service in a storage account.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "89",
    note: "",
    question:
      "Your company plans to migrate all its network resources to Azure. You need to start the planning process by exploring Azure. What should you create first?",
    options: [
      {
        value: "A subscription.",
        answer: 1,
      },
      {
        value: "A resource group.",
      },
      {
        value: "A virtual network.",
      },
      {
        value: "A management group.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "90",
    note: "",
    question:
      "You have an on-premises application that sends email notifications automatically based on a rule, You plan to migrate the application to Azure. You need to recommend a serverless computing solution for the application. What should you include in the recommendation?",
    options: [
      {
        value: "A web app.",
      },
      {
        value: "A server image in Azure Marketplace.",
      },
      {
        value: "A logic app.",
        answer: 1,
      },
      {
        value: "An API app.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "91",
    note: "",
    question:
      "You plan to deploy a website to Azure. The website will be accessed by users worldwide and will host large video files. You need to recommend which Azure feature must be used to provide the best video playback experience. What should you recommend?",
    options: [
      {
        value: "An application gateway.",
      },
      {
        value: "An Azure ExpressRoute circuit.",
      },
      {
        value: "A content delivery network (CDN).",
        answer: 1,
      },
      {
        value: "An Azure Traffic Manager profile.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "92",
    note: "",
    question:
      "Your company plans to deploy several million sensors that will upload data to Azure. You need to identify which Azure resources must be created to support the planned solution. Which two Azure resources should you identify? Each correct answer presents part of the solution.",
    options: [
      {
        value: "Azure Data Lake.",
        answer: 1,
      },
      {
        value: "Azure Queue storage.",
      },
      {
        value: "Azure File Storage.",
      },
      {
        value: "Azure IoT Hub.",
        answer: 1,
      },
      {
        value: "Azure Notification Hubs.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "93",
    note: "",
    question:
      "You have an Azure web app. You need to manage the settings of the web app from an iPhone. What are two Azure management tools that you can use? Each correct answer presents a complete solution.",
    options: [
      {
        value: "Azure CLI.",
      },
      {
        value: "The Azure portal.",
        answer: 1,
      },
      {
        value: "Azure Cloud Shell.",
        answer: 1,
      },
      {
        value: "Windows PowerShell.",
      },
      {
        value: "Azure Storage Explorer.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "94",
    note: "",
    question:
      "Company plans to deploy an Artificial Intelligence (AI) solution in Azure. What should the company use to build, test, and deploy predictive analytics solutions?",
    options: [
      {
        value: "Azure Logic Apps.",
      },
      {
        value: "Azure Machine Learning Studio.",
        answer: 1,
      },
      {
        value: "Azure Batch.",
      },
      {
        value: "Azure Cosmos DB.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "95",
    note: "",
    question:
      "You have an Azure subscription named Subscription1. You sign in to the Azure portal and create a resource group named RG1. From Azure documentation, you have the following command that creates a virtual machine named VM1. az vm create --resource-group RG1 --name VM1 --image UbuntuLTS --generate-ssh-keys You need to create VM1 in Subscription1 by using the command. Solution: From the Azure portal, launch Azure Cloud Shell and select PowerShell. Run the command in Cloud Shell. Does this meet the goal?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "96",
    note: "",
    question:
      "An Azure administrator plans to run a PowerShell script that creates Azure resources. You need to recommend which computer configuration to use to run the script. Solution: Run the script from a computer that runs Windows 10 and has the Azure PowerShell module installed. Does this meet the goal?",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "97",
    note: "",
    question: "Which service provides serverless computing in Azure?",
    options: [
      {
        value: "Azure Virtual Machines.",
      },
      {
        value: "Azure Functions.",
        answer: 1,
      },
      {
        value: "Azure storage account.",
      },
      {
        value: "Azure Container Instances.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "98",
    note: "",
    question:
      "You have an Azure subscription named Subscription1. You sign in to the Azure portal and create a resource group named RG1. From Azure documentation, you have the following command that creates a virtual machine named VM1. az vm create --resource-group RG1 --name VM1 --image UbuntuLTS --generate-ssh-keys You need to create VM1 in Subscription1 by using the command. Solution: From the Azure portal, launch Azure Cloud Shell and select Bash. Run the command in Cloud Shell. Does this meet the goal?",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "99",
    note: "",
    question:
      "Your company has several business units. Each business unit requires 20 different Azure resources for daily operation. All the business units require the same type of Azure resources. You need to recommend a solution to automate the creation of the Azure resources. What should you include in the recommendations?",
    options: [
      {
        value: "Azure Resource Manager templates.",
        answer: 1,
      },
      {
        value: "Virtual machine scale sets.",
      },
      {
        value: "The Azure API Management service.",
      },
      {
        value: "Management groups.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "100",
    note: "",
    question:
      "Which Azure service should you use to collect events from multiple resources into a centralized repository?",
    options: [
      {
        value: "Azure Event Hubs.",
        answer: 1,
      },
      {
        value: "Azure Analysis Services.",
      },
      {
        value: "Azure Monitor.",
      },
      {
        value: "Azure Stream Analytics.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "101",
    note: "",
    question:
      "You have an Azure environment. You need to create a new Azure virtual machine from a tablet that runs the Android operating system. Solution: You use the PowerApps portal. Does this meet the goal?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "102",
    note: "",
    question:
      "You have an Azure environment. You need to create a new Azure virtual machine from a tablet that runs the Android operating system. Solution: You use the Azure portal. Does this meet the goal?",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "103",
    note: "",
    question:
      "Which Azure service provides a set of version control tools to manage code?",
    options: [
      {
        value: "Azure Repos.",
        answer: 1,
      },
      {
        value: "Azure DevTest Labs.",
      },
      {
        value: "Azure Storage.",
      },
      {
        value: "Azure Cosmos DB.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "104",
    note: "",
    question:
      "Your company plans to automate the deployment of servers to Azure. Your manager is concerned that you may expose administrative credentials during the deployment. You need to recommend an Azure solution that encrypts the administrative credentials during the deployment. What should you include in the recommendation?",
    options: [
      {
        value: "Azure Key Vault.",
        answer: 1,
      },
      {
        value: "Azure Information Protection.",
      },
      {
        value: "Azure Security Center.",
      },
      {
        value: "Azure Multi-Factor Authentication (MFA).",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "105",
    note: "",
    question:
      "You plan to deploy several Azure virtual machines. You need to control the ports that devices on the Internet can use to access the virtual machines. What should you use?",
    options: [
      {
        value: "a Network Security Group (NSG).",
        answer: 1,
      },
      {
        value: "an Azure Active Directory (Azure AD) role.",
      },
      {
        value: "an Azure Active Directory group.",
      },
      {
        value: "an Azure key vault.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "106",
    note: "",
    question: "Azure Germany can be used by legal residents of Germany only.",
    options: [
      {
        value: "No change is needed.",
      },
      {
        value: "Only enterprises that are registered in Germany.",
      },
      {
        value:
          "Only enterprises that purchase their azure licenses from a partner based in Germany.",
      },
      {
        value:
          "Any user or enterprise that requires its data to reside in Germany.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "107",
    note: "",
    question:
      "Your Azure environment contains multiple Azure virtual machines. You need to ensure that a virtual machine named VM1 is accessible from the Internet over HTTP. Solution. You modify a Network Security Group (NSG). Does this meet the goal?",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "108",
    note: "",
    question:
      "Your Azure environment contains multiple Azure virtual machines. You need to ensure that a virtual machine named VM1 is accessible from the Internet over HTTP. Solution: You modify an Azure firewall. Does this meet the goal?",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "109",
    note: "",
    question:
      "Your Azure environment contains multiple Azure virtual machines. You need to ensure that a virtual machine named VM1 is accessible from the Internet over HTTP. Solution: You modify an Azure Traffic Manager profile. Does this meet the goal?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "110",
    note: "",
    question:
      "Which two types of customers are eligible to use Azure Government to develop a cloud solution?",
    options: [
      {
        value: "A Canadian government contractor.",
      },
      {
        value: "A European government contractor.",
      },
      {
        value: "A United States government entity.",
        answer: 1,
      },
      {
        value: "A United States government contractor.",
        answer: 1,
      },
      {
        value: "A European government entity.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "111",
    note: "",
    question:
      "You need to ensure that when Azure Active Directory (Azure AD) users connect to Azure AD from the Internet by using an anonymous IP address, the users are prompted automatically to change their password. Which Azure service should you use?",
    options: [
      {
        value: "Azure AD Connect Health.",
      },
      {
        value: "Azure AD Privileged Identity Management.",
      },
      {
        value: "Azure Advanced Threat Protection (ATP).",
      },
      {
        value: "Azure AD Identity Protection.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "112",
    note: "",
    question:
      "Your company plans to deploy several web servers and several database servers to Azure. You need to recommend an Azure solution to limit the types of connections from the web servers to the database servers. What should you include in the recommendation?",
    options: [
      {
        value: "Network Security Groups (NSGs).",
        answer: 1,
      },
      {
        value: "Azure Service Bus.",
      },
      {
        value: "A local network gateway.",
      },
      {
        value: "A route filter.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "113",
    note: "",
    question:
      "To what should an application connect to retrieve security tokens?",
    options: [
      {
        value: "An Azure Storage account.",
      },
      {
        value: "Azure Active Directory (Azure AD).",
        answer: 1,
      },
      {
        value: "A certificate store.",
      },
      {
        value: "An Azure key vault.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "114",
    note: "",
    question:
      "Which service provides network traffic filtering across multiple Azure subscriptions and virtual networks?",
    options: [
      {
        value: "Azure Firewall.",
        answer: 1,
      },
      {
        value: "An application security group.",
      },
      {
        value: "Azure DDOS protection.",
      },
      {
        value: "A Network Security Group (NSG).",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "115",
    note: "",
    question: "Which Azure service should you use to store certificates?",
    options: [
      {
        value: "Azure Security Center.",
      },
      {
        value: "An Azure Storage account.",
      },
      {
        value: "Azure Key Vault.",
        answer: 1,
      },
      {
        value: "Azure Information Protection.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "116",
    note: "",
    question:
      "You have a resource group named RG1. You plan to create virtual networks and app services in RG1. You need to prevent the creation of virtual machines only in RG1. What should you use?",
    options: [
      {
        value: "A lock.",
      },
      {
        value: "An Azure role.",
      },
      {
        value: "A tag.",
      },
      {
        value: "An Azure policy.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "117",
    note: "",
    question: "What can Azure Information Protection encrypt?",
    options: [
      {
        value: "Network traffic.",
      },
      {
        value: "Documents and email messages.",
        answer: 1,
      },
      {
        value: "An Azure Storage account.",
      },
      {
        value: "An Azure SQL database.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "118",
    note: "",
    question:
      "From [Azure Monitor], you can view which user turned off a specific virtual machine during the last 14 days.",
    options: [
      {
        value: "No change is needed.",
      },
      {
        value: "Azure Event Hubs.",
      },
      {
        value: "Azure Activity Log.",
        answer: 1,
      },
      {
        value: "Azure Service Health.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "119",
    note: "",
    question:
      "Your company has an Azure subscription that contains resources In several regions. A company policy states that administrators must only be allowed to create additional Azure resources in a region in the country where their office is located. You need to create the Azure resource that must be used to meet the policy requirement. What should you create?",
    options: [
      {
        value: "A read-only lock.",
      },
      {
        value: "An Azure policy.",
        answer: 1,
      },
      {
        value: "A management group.",
      },
      {
        value: "A reservation.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "120",
    note: "",
    question:
      "From [Azure Cloud Shell], you can track your company regulatory standards and regulations, such as ISO 27001.",
    options: [
      {
        value: "No change is needed.",
      },
      {
        value: "The Microsoft Cloud Partner Portal.",
      },
      {
        value: "Compliance Manager.",
        answer: 1,
      },
      {
        value: "The Trust Center.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "121",
    note: "",
    question:
      "You need to configure an Azure solution that meets the following requirements: Secures websites from attacks. Generates reports that contain details of attempted attacks. What should you include in the solution?",
    options: [
      {
        value: "Azure Firewall.",
      },
      {
        value: "A Network Security Group (NSG).",
      },
      {
        value: "Azure Information Protection.",
      },
      {
        value: "DDoS protection.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "122",
    note: "",
    question:
      "You attempt to create several managed Microsoft SQL Server instances in an Azure environment and receive a message that you must increase your Azure subscription limits. What should you do to increase the limits?",
    options: [
      {
        value: "Create a service health alert.",
      },
      {
        value: "Upgrade your support plan.",
      },
      {
        value: "Modify an Azure policy.",
      },
      {
        value: "Create a new support request.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "123",
    note: "",
    question:
      "Your company has 10 offices. You plan to generate several billing reports from the Azure portal. Each report will contain the Azure resource utilization of each office. Which Azure Resource Manager feature should you use before you generate the reports?",
    options: [
      {
        value: "Tags.",
        answer: 1,
      },
      {
        value: "Templates.",
      },
      {
        value: "Locks.",
      },
      {
        value: "Policies.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "124",
    note: "",
    question:
      "Your company plans to migrate to Azure. The company has several departments. All the Azure resources used by each department will be managed by a department administrator. What are two possible techniques to segment Azure for the departments? Each correct answer presents a complete solution.",
    options: [
      {
        value: "Multiple subscriptions.",
        answer: 1,
      },
      {
        value: "Multiple Azure Active Directory (Azure AD) directories.",
      },
      {
        value: "Multiple regions.",
      },
      {
        value: "Multiple resource groups.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "125",
    note: "",
    question:
      "In which Azure support plans can you open a new support request?",
    options: [
      {
        value: "Professional Direct only.",
      },
      {
        value: "Professional Direct, and Standard only.",
      },
      {
        value: "Professional Direct, Standard, and Developer only.",
      },
      {
        value: "Professional Direct, Standard, Developer, and Basic.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "126",
    note: "",
    question:
      "What is guaranteed in an Azure Service Level Agreement (SLA) for virtual machines?",
    options: [
      {
        value: "Uptime.",
        answer: 1,
      },
      {
        value: "Feature availability.",
      },
      {
        value: "Bandwidth.",
      },
      {
        value: "Performance.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "127",
    note: "",
    question:
      "Your company plans to purchase an Azure subscription. The company support policy states that the Azure environment must provide an option to access support engineers by phone or email. You need to recommend which support plan meets the support policy requirement. Solution: Recommend a Basic support plan. Does this meet the goal?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "128",
    note: "",
    question:
      "Your company plans to request an architectural review of an Azure environment from Microsoft. The company currently has a Basic support plan. You need to recommend a new support plan for the company. The solution must minimize costs. Which support plan should you recommend?",
    options: [
      {
        value: "Developer.",
        answer: 1,
      },
      {
        value: "Professional Direct.",
      },
      {
        value: "Standard.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "129",
    note: "",
    question: "What is required to use Azure Cost Management?",
    options: [
      {
        value: "A Dev/Test subscription.",
      },
      {
        value: "Software Assurance.",
      },
      {
        value: "An Enterprise Agreement (EA).",
      },
      {
        value: "A pay-as-you-go subscription.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "130",
    note: "",
    question:
      "Your Azure trial account expired last week. You are now unable to [create additional Azure Active Directory (Azure AD) user accounts].",
    options: [
      {
        value: "No change is needed.",
      },
      {
        value: "Start an existing Azure virtual machine.",
        answer: 1,
      },
      {
        value: "Access your data stored in Azure.",
      },
      {
        value: "Access the Azure portal.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "131",
    note: "",
    question:
      "Your company plans to purchase an Azure subscription, The company support policy states that the Azure environment must provide an option to access support engineers by phone or email. You need to recommend which support plan meets the support policy requirement. Solution: Recommend a Premier support plan. Does this meet the goal?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "132",
    note: "",
    question:
      "Your company has 10 departments. The company plans to implement Azure environment. You need to ensure that each department can use a different payment option for the Azure services it consumes. What should you create for each department?",
    options: [
      {
        value: "A reservation.",
      },
      {
        value: "A subscription.",
        answer: 1,
      },
      {
        value: "A resource group.",
      },
      {
        value: "A container instance.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "133",
    note: "",
    question:
      "Which statement accurately describes the Modern Lifecycle Policy for Azure services?",
    options: [
      {
        value:
          "Microsoft provides mainstream support for a service for five years.",
      },
      {
        value:
          "Microsoft provides a minimum of 12 months notice before ending support for a service.",
        answer: 1,
      },
      {
        value:
          "After a service is made generally available, Microsoft provides support for the service for a minimum of four years.",
      },
      {
        value:
          "When a service is retired, you can purchase extended support for the service for up to five years.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "134",
    note: "",
    question:
      "You can use Advisor recommendations in Azure to send email alerts when the cost of the current billing Azure subscription exceeds a specified limit.",
    options: [
      {
        value: "No change is needed.",
      },
      {
        value: "Access control (LAM).",
      },
      {
        value: "Budget alerts.",
        answer: 1,
      },
      {
        value: "Compliance.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "135",
    note: "",
    question:
      "To implement a hybrid cloud model, a company must first have a private cloud.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "136",
    note: "",
    question:
      "A company can extend the computing resources of its internal network by using a hybrid cloud.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "137",
    note: "",
    question:
      "In a public cloud model, only guest users at your company can access the resources in the cloud.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "138",
    note: "",
    question:
      "You have an on-premises network that contains several servers. You plan to migrate all the servers to Azure. You need to recommend a solution to ensure that some of the servers are available if a single Azure data center goes offline for an extended period. What should you include in the recommendation?",
    options: [
      {
        value: "Fault tolerance.",
        answer: 1,
      },
      {
        value: "Elasticity.",
      },
      {
        value: "Scalability.",
      },
      {
        value: "Low latency.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "139",
    note: "",
    question:
      "An organization that hosts its infrastructure [in a private cloud] can close its data center.",
    options: [
      {
        value: "No change is needed.",
      },
      {
        value: "In a hybrid cloud.",
      },
      {
        value: "In the public cloud.",
        answer: 1,
      },
      {
        value: "On a Hyper-V host.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "140",
    note: "",
    question: "What are two characteristics of the public cloud?",
    options: [
      {
        value: "Dedicated hardware.",
      },
      {
        value: "Unsecured connections.",
      },
      {
        value: "Limited storage.",
      },
      {
        value: "Metered pricing.",
        answer: 1,
      },
      {
        value: "Self-service management.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "141",
    note: "",
    question:
      "Your company plans to migrate all its data and resources to Azure. The company migration plan states that only Platform as a Service (PaaS) solutions must be used in Azure. You need to deploy an Azure environment that meets the company migration plan. Solution: You create an Azure App Service and Azure virtual machines that have Microsoft SQL Server installed. Does this meet the goal?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "142",
    note: "",
    question:
      "Your company hosts an accounting application named App1 that is used by all the customers of the company. App1 has low usage during the first three weeks of each month and very high usage during the last week of each month. Which benefit of Azure Cloud Services supports cost management for this type of usage pattern?",
    options: [
      {
        value: "High availability.",
      },
      {
        value: "High latency.",
      },
      {
        value: "Elasticity.",
        answer: 1,
      },
      {
        value: "Load balancing.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "143",
    note: "",
    question:
      "You plan to deploy several Azure virtual machines. You need to ensure that the services running on the virtual machines are available if a single data center fails. Solution: You deploy the virtual machines to two or more scale sets. Does this meet the goal?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "144",
    note: "",
    question:
      "You plan to provision Infrastructure as a Service (IaaS) resources in Azure. Which resource is an example of IaaS?",
    options: [
      {
        value: "An Azure web app.",
      },
      {
        value: "An Azure virtual machine.",
        answer: 1,
      },
      {
        value: "An Azure logic app.",
      },
      {
        value: "An Azure SQL database.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "145",
    note: "",
    question:
      "A team of developers at your company plans to deploy, and then remove, 50 customized virtual machines each week. Thirty of the virtual machines run Windows Server 2016 and 20 of the virtual machines run Ubuntu Linux. You need to recommend which Azure service will minimize the administrative effort required to deploy and remove the virtual machines. What should you recommend?",
    options: [
      {
        value: "Azure Reserved Virtual Machines (VM) Instances.",
      },
      {
        value: "Azure virtual machine scale sets.",
      },
      {
        value: "Azure DevTest Labs.",
        answer: 1,
      },
      {
        value: "Microsoft Managed Desktop.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "146",
    note: "",
    question:
      "One of the benefits of Azure SQL Data Warehouse is that [high availability] is built into the platform.",
    options: [
      {
        value: "No change is needed.",
        answer: 1,
      },
      {
        value: "Automatic scaling.",
      },
      {
        value: "Data compression.",
      },
      {
        value: "Versioning.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "147",
    note: "",
    question: "Match the Azure services to the correct descriptions.",
    options: [],
    tags: [],
    comment: ``,
  },
  {
    id: "148",
    note: "",
    question:
      "An Azure administrator plans to run a PowerShell script that creates Azure resources. You need to recommend which computer configuration to use to run the script. Solution: Run the script from a computer that runs macOS and has PowerShell Core 6.0 installed. Does this meet the goal?",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "149",
    note: "",
    question:
      "You have an Azure environment that contains 10 virtual networks and 100 virtual machines. You need to limit the amount of inbound traffic to all the Azure virtual networks. What should you create?",
    options: [
      {
        value: "One application security group (ASG).",
      },
      {
        value: "10 virtual network gateways.",
      },
      {
        value: "10 Azure ExpressRoute circuits.",
      },
      {
        value: "One Azure firewall.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "150",
    note: "",
    question:
      "You have an on-premises application that sends email notifications automatically based on a rule. You plan to migrate the application to Azure. You need to recommend a serverless computing solution for the application. What should you include in the recommendation?",
    options: [
      {
        value: "A web app.",
      },
      {
        value: "A server image in Azure Marketplace.",
      },
      {
        value: "A logic app.",
        answer: 1,
      },
      {
        value: "An API app.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "151",
    note: "",
    question:
      "You have an application that is comprised of an Azure web app that has a Service Level Agreement (SLA) of 99.95 percent and an Azure SQL database that has an SLA of 99.99 percent. The composite SLA for the application is [the product of both SLAs, which equals 99.94 percent].",
    options: [
      {
        value: "No change is needed.",
        answer: 1,
      },
      {
        value:
          "The lowest SLA associated to the application, which is 99.95 percent.",
      },
      {
        value:
          "The highest SLA associated to the application, which is 99.99 percent.",
      },
      {
        value: "The difference between the two SLAs, which is 0.05 percent.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "152",
    note: "",
    question:
      "You have an Azure subscription named Subscription1. You sign in to the Azure portal and create a resource group named RG1. From Azure documentation, you have the following command that creates a virtual machine named VM1. az vm create --resource-group RG1 --name VM1 --image UbuntuLTS --generate-ssh-keys You need to create VM1 in Subscription1 by using the command. Solution: From a computer that runs Windows 10, install Azure CLI. From PowerShell, sign in to Azure and then run the command. Does this meet the goal?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "153",
    note: "",
    question:
      "You have an Azure subscription named Subscription1. You sign in to the Azure portal and create a resource group named RG1. From Azure documentation, you have the following command that creates a virtual machine named VM1. az vm create --resource-group RG1 --name VM1 --image UbuntuLTS --generate-ssh-keys You need to create VM1 in Subscription1 by using the command. Solution: From a computer that runs Windows 10, install Azure CLI. From a command prompt, sign in to Azure and then run the command. Does this meet the goal?",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "154",
    note: "",
    question:
      "You have an Azure environment. You need to create a new Azure virtual machine from a tablet that runs the Android operating system. Solution: You use PowerShell in Azure Cloud Shell. Does this meet the goal?",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "155",
    note: "",
    question: "[Azure Databricks] is an Apache Spark-based analytics service.",
    options: [
      {
        value: "No change is needed.",
        answer: 1,
      },
      {
        value: "Azure Data Factory.",
      },
      {
        value: "Azure DevOps.",
      },
      {
        value: "Azure HDInsight.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "156",
    note: "",
    question:
      "Azure Site Recovery provides [fault tolerance] for virtual machines.",
    options: [
      {
        value: "No change is needed.",
      },
      {
        value: "Disaster recovery.",
        answer: 1,
      },
      {
        value: "Elasticity.",
      },
      {
        value: "High availability.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "157",
    note: "",
    question:
      "An Availability Zone in Azure has physically separate locations [across two continents].",
    options: [
      {
        value: "No change is needed.",
      },
      {
        value: "Within a single Azure region.",
        answer: 1,
      },
      {
        value: "Within multiple Azure regions.",
      },
      {
        value: "Within a single Azure datacenter.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "158",
    note: "",
    question:
      "Your company plans to migrate all on-premises data to Azure. You need to identify whether Azure complies with the company regional requirements. What should you use?",
    options: [
      {
        value: "The Knowledge Center.",
      },
      {
        value: "Azure Marketplace.",
      },
      {
        value: "The MyApps portal.",
      },
      {
        value: "The Trust Center.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "159",
    note: "",
    question:
      "Azure Key Vault is used to store secrets for [Azure Active Directory (Azure AD) user accounts].",
    options: [
      {
        value: "No change is needed.",
      },
      {
        value: "Azure Active Directory (Azure AD) administrative accounts.",
      },
      {
        value: "Personally Identifiable Information (PII).",
      },
      {
        value: "Server applications.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "160",
    note: "",
    question:
      "After you create a virtual machine, you need to modify the [Network Security Group (NSG)] to allow connections to TCP port 8080 on the virtual machine.",
    options: [
      {
        value: "No change is needed.",
        answer: 1,
      },
      {
        value: "Virtual network gateway.",
      },
      {
        value: "Virtual network.",
      },
      {
        value: "Route table.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "161",
    note: "",
    question:
      "Your Azure environment contains multiple Azure virtual machines. You need to ensure that a virtual machine named VM1 is accessible from the Internet over HTTP. Solution: You modify a Network Security Group (NSG). Does this meet the goal?",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "162",
    note: "",
    question:
      "Your Azure environment contains multiple Azure virtual machines. You need to ensure that a virtual machine named VM1 is accessible from the Internet over HTTP. Solution: You modify a DDoS protection plan. Does this meet the goal?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "163",
    note: "",
    question:
      "[Resource groups] provide organizations with the ability to manage the compliance of Azure resources across multiple subscriptions.",
    options: [
      {
        value: "No change is needed.",
      },
      {
        value: "Management groups.",
      },
      {
        value: "Azure policies.",
        answer: 1,
      },
      {
        value: "Azure App Service plans.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "164",
    note: "",
    question:
      "Your network contains an Active Directory forest. The forest contains 5,000 user accounts. Your company plans to migrate all network resources to Azure and to decommission the on-premises data center. You need to recommend a solution to minimize the impact on users after the planned migration. What should you recommend?",
    options: [
      {
        value: "Implement Azure Multi-Factor Authentication (MFA).",
      },
      {
        value:
          "Sync all the Active Directory user accounts to Azure Active Directory (Azure AD).",
        answer: 1,
      },
      {
        value: "Instruct all users to change their password.",
      },
      {
        value:
          "Create a guest user account in Azure Active Directory (Azure AD) for each user.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "165",
    note: "",
    question:
      "What should you use to evaluate whether your company Azure environment meets regulatory requirements?",
    options: [
      {
        value: "The Knowledge Center website.",
      },
      {
        value: "The Advisor blade from the Azure portal.",
      },
      {
        value: "Compliance Manager from the Service Trust Portal.",
        answer: 1,
      },
      {
        value: "The Security Center blade from the Azure portal.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "166",
    note: "",
    question:
      "The [Microsoft Online Services Privacy Statement] explains what data Microsoft processes, how Microsoft processes the data, and the purpose of processing the data.",
    options: [
      {
        value: "No change is needed.",
        answer: 1,
      },
      {
        value: "Microsoft Online Services Terms.",
      },
      {
        value: "Microsoft Online Service Level Agreement.",
      },
      {
        value: "Online Subscription Agreement for Microsoft Azure.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "167",
    note: "",
    question:
      "If Microsoft plans to end support for an Azure service that does NOT have a successor service, Microsoft will provide notification at least [12 months] before.",
    options: [
      {
        value: "No change is needed.",
        answer: 1,
      },
      {
        value: "6 months.",
      },
      {
        value: "90 days.",
      },
      {
        value: "30 days.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "168",
    note: "",
    question:
      "Your company has an Azure subscription that contains the following unused resources: 20 user accounts in Azure Active Directory (Azure AD) Five groups in Azure AD 10 public IP addresses 10 network interfaces You need to reduce the Azure costs for the company. Solution: You remove the unused network interfaces. Does this meet the goal?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "169",
    note: "",
    question:
      "Your company has an Azure subscription that contains the following unused resources: 20 user accounts in Azure Active Directory (Azure AD) Five groups in Azure AD 10 public IP addresses 10 network interfaces You need to reduce the Azure costs for the company. Solution: You remove the unused public IP addresses. Does this meet the goal?",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "170",
    note: "",
    question:
      "Your company has an Azure subscription that contains the following unused resources: 20 user accounts in Azure Active Directory (Azure AD) Five groups in Azure AD 10 public IP addresses 10 network interfaces You need to reduce the Azure costs for the company. Solution: You remove the unused user accounts. Does this meet the goal?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "171",
    note: "",
    question:
      "A support plan solution that gives you best practice information, health status and notifications, and 24/7 access to billing information at the lowest possible cost is a [Standard] support plan.",
    options: [
      {
        value: "No change is needed.",
      },
      {
        value: "Developer.",
      },
      {
        value: "Basic.",
        answer: 1,
      },
      {
        value: "Professional Direct.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "172",
    note: "",
    question:
      "You can create an Azure support request from [support.microsoft.com].",
    options: [
      {
        value: "No change is needed.",
      },
      {
        value: "The Azure portal.",
        answer: 1,
      },
      {
        value: "The Knowledge Center.",
      },
      {
        value: "The Security & Compliance admin center.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "173",
    note: "",
    question:
      "Your company has an Azure subscription that contains the following unused resources: 20 user accounts in Azure Active Directory (Azure AD) Five groups in Azure AD 10 public IP addresses 10 network interfaces You need to reduce the Azure costs for the company. Solution: You remove the unused groups. Does this meet the goal?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "174",
    note: "",
    question:
      "The Azure [Standard] support plan is the lowest cost option to receive 24×7 access to support engineers by phone.",
    options: [
      {
        value: "No change is needed.",
        answer: 1,
      },
      {
        value: "Developer.",
      },
      {
        value: "Basic.",
      },
      {
        value: "Professional Direct.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "175",
    note: "",
    question:
      "All Azure services that are in public preview are [provided without any documentation].",
    options: [
      {
        value: "No change is needed.",
      },
      {
        value: "Only configurable from Azure CLI.",
      },
      {
        value: "Excluded from the Service Level Agreements.",
        answer: 1,
      },
      {
        value: "Only configurable from the Azure portal.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "176",
    note: "",
    question:
      "An Azure service is available to all Azure customers when it is in [public preview].",
    options: [
      {
        value: "No change is needed.",
        answer: 1,
      },
      {
        value: "Private preview.",
      },
      {
        value: "Development.",
      },
      {
        value: "An Enterprise Agreement (EA) subscription.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "177",
    note: "",
    question:
      "Your company has an on-premises network with numerous servers, which they intend to migrate to Azure. You have been tasked with devising a plan that allows for the availability of a few of the servers, in the event that one of the Azure data centers becomes unavailable for a lengthy interval. Solution: You should include elasticity in your plan. Does the solution meet the goal?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "178",
    note: "",
    question:
      "Your company has an on-premises network with numerous servers, which they intend to migrate to Azure. You have been tasked with devising a plan that allows for the availability of a few of the servers, in the event that one of the Azure data centers becomes unavailable for a lengthy interval. Solution: You should include scalability in your plan. Does the solution meet the goal?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "179",
    note: "",
    question:
      "Your company has an on-premises network with numerous servers, which they intend to migrate to Azure. You have been tasked with devising a plan that allows for the availability of a few of the servers, in the event that one of the Azure data centers becomes unavailable for a lengthy interval. Solution: You should include fault tolerance in your plan. Does the solution meet the goal?",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "180",
    note: "",
    question:
      "You are tasked with deploying Azure virtual machines for your company. You need to make use of the appropriate cloud deployment solution. Solution: You should make use of Software as a Service (SaaS). Does the solution meet the goal?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "181",
    note: "",
    question:
      "You are tasked with deploying Azure virtual machines for your company. You need to make use of the appropriate cloud deployment solution. Solution: You should make use of Platform as a Service (PaaS). Does the solution meet the goal?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "182",
    note: "",
    question:
      "You are tasked with deploying Azure virtual machines for your company. You need to make use of the appropriate cloud deployment solution. Solution: You should make use of Infrastructure as a Service (IaaS). Does the solution meet the goal?",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "183",
    note: "",
    question:
      "Your company has on-premises network includes a large number of servers. They would like to make extra resources available to their users, while keeping capital and operational overheads to a minimum. You are required to make recommendations that should be included in the overall solution. Solution: You should indorse the use of an added data center as part of the solution. Does the solution meet the goal?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "184",
    note: "",
    question:
      "Your company has on-premises network includes a large number of servers. They would like to make extra resources available to their users, while keeping capital and operational overheads to a minimum. You are required to make recommendations that should be included in the overall solution. Solution: You should indorse the use of a hybrid cloud as part of the solution. Does the solution meet the goal?",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "185",
    note: "",
    question:
      "Your company has on-premises network includes a large number of servers. They would like to make extra resources available to their users, while keeping capital and operational overheads to a minimum. You are required to make recommendations that should be included in the overall solution. Solution: You should indorse the use of a private cloud as part of the solution. Does the solution meet the goal?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "186",
    note: "",
    question:
      "Your company is planning to migrate all their virtual machines to an Azure pay-as-you-go subscription. The virtual machines are currently hosted on the Hyper-V hosts in a data center. You are required make sure that the intended Azure solution uses the correct expenditure model. Solution: You should recommend the use of the elastic expenditure model. Does the solution meet the goal?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "187",
    note: "",
    question:
      "Your company is planning to migrate all their virtual machines to an Azure pay-as-you-go subscription. The virtual machines are currently hosted on the Hyper-V hosts in a data center. You are required make sure that the intended Azure solution uses the correct expenditure model. Solution: You should recommend the use of the scalable expenditure model. Does the solution meet the goal?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "188",
    note: "",
    question:
      "Your company is planning to migrate all their virtual machines to an Azure pay-as-you-go subscription. The virtual machines are currently hosted on the Hyper-V hosts in a data center. You are required make sure that the intended Azure solution uses the correct expenditure model. Solution: You should recommend the use of the operational expenditure model. Does the solution meet the goal?",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "189",
    note: "",
    question:
      "You are required to deploy an Artificial Intelligence (AI) solution in Azure. You want to make sure that you are able to build, test, and deploy predictive analytics for the solution. Solution: You should make use of Azure Cosmos DB. Does the solution meet the goal?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "190",
    note: "",
    question:
      "You are required to deploy an Artificial Intelligence (AI) solution in Azure. You want to make sure that you are able to build, test, and deploy predictive analytics for the solution. Solution: You should make use of Azure Logic Apps. Does the solution meet the goal?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "191",
    note: "",
    question:
      "You are required to deploy an Artificial Intelligence (AI) solution in Azure. You want to make sure that you are able to build, test, and deploy predictive analytics for the solution. Solution: You should make use of Azure Machine Learning Studio. Does the solution meet the goal?",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "192",
    note: "",
    question:
      "Your company has infrastructure includes a number of business units that each need a large number of various Azure resources for everyday operation. The resources required by each business unit are identical. You are required to sanction a strategy to create Azure resources automatically. Solution: You recommend that the Azure API Management service be included in the strategy. Does the solution meet the goal?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "193",
    note: "",
    question:
      "Your company has infrastructure includes a number of business units that each need a large number of various Azure resources for everyday operation. The resources required by each business unit are identical. You are required to sanction a strategy to create Azure resources automatically. Solution: You recommend that management groups be included in the strategy. Does the solution meet the goal?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "194",
    note: "",
    question:
      "Your company has infrastructure includes a number of business units that each need a large number of various Azure resources for everyday operation. The resources required by each business unit are identical. You are required to sanction a strategy to create Azure resources automatically. Solution: You recommend that the Azure Resource Manager templates be included in the strategy. Does the solution meet the goal?",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "195",
    note: "",
    question:
      "You are tasked with deploying a critical LOB application, which will be installed on a virtual machine, to Azure. You are informed that the application deployment strategy should allow for a guaranteed availability of 99.99 percent. You need to make sure that the strategy requires as little virtual machines and availability zones as possible. Solution: You include two virtual machines and one availability zone in your strategy. Does the solution meet the goal?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "196",
    note: "",
    question:
      "You are tasked with deploying a critical LOB application, which will be installed on a virtual machine, to Azure. You are informed that the application deployment strategy should allow for a guaranteed availability of 99.99 percent. You need to make sure that the strategy requires as little virtual machines and availability zones as possible. Solution: You include one virtual machine and two availability zones in your strategy. Does the solution meet the goal?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "197",
    note: "",
    question:
      "You are tasked with deploying a critical LOB application, which will be installed on a virtual machine, to Azure. You are informed that the application deployment strategy should allow for a guaranteed availability of 99.99 percent. You need to make sure that the strategy requires as little virtual machines and availability zones as possible. Solution: You include two virtual machines and two availability zones in your strategy. Does the solution meet the goal?",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "198",
    note: "",
    question:
      "Your company has developers intend to deploy a large number of custom virtual machines on a weekly basis. They will also be removing these virtual machines during the same week it was deployed. Sixty percent of the virtual machines have Windows Server 2016 installed, while the other forty percent has Ubuntu Linux installed. You are required to make sure that the administrative effort, needed for this process, is reduced by employing a suitable Azure service. Solution: you recommend the use of Microsoft Managed Desktop. Does the solution meet the goal?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "199",
    note: "",
    question:
      "Your company has developers intend to deploy a large number of custom virtual machines on a weekly basis. They will also be removing these virtual machines during the same week it was deployed. Sixty percent of the virtual machines have Windows Server 2016 installed, while the other forty percent has Ubuntu Linux installed. You are required to make sure that the administrative effort, needed for this process, is reduced by employing a suitable Azure service. Solution: you recommend the use of Azure Reserved Virtual Machines (VM) Instances.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "200",
    note: "",
    question:
      "Your company has developers intend to deploy a large number of custom virtual machines on a weekly basis. They will also be removing these virtual machines during the same week it was deployed. Sixty percent of the virtual machines have Windows Server 2016 installed, while the other forty percent has Ubuntu Linux installed. You are required to make sure that the administrative effort, needed for this process, is reduced by employing a suitable Azure service. Solution: you recommend the use of Azure DevTest Labs. Does the solution meet the goal?",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "201",
    note: "",
    question:
      "Your company has virtual machines (VMs) hosted in Microsoft Azure. The VMs are located in a single Azure virtual network named VNet1. The company has users that work remotely. The remote workers require access to the VMs on VNet1. You need to provide access for the remote workers. What should you do?",
    options: [
      {
        value: "Configure a Site-to-Site (S2S) VPN.",
      },
      {
        value: "Configure a VNet-toVNet VPN.",
      },
      {
        value: "Configure a Point-to-Site (P2S) VPN.",
        answer: 1,
      },
      {
        value: "Configure DirectAccess on a Windows Server 2012 server VM.",
      },
      {
        value: "Configure a Multi-Site VPN.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "202",
    note: "",
    question:
      "You have been informed by your superiors of the company has intentions to automate server deployment to Azure. There is, however, some concern that administrative credentials could be uncovered during this process. You are required to make sure that during the deployment, the administrative credentials are encrypted using a suitable Azure solution. Solution: You recommend the use of Azure Information Protection. Does the solution meet the goal?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "203",
    note: "",
    question:
      "You have been informed by your superiors of the company has intentions to automate server deployment to Azure. There is, however, some concern that administrative credentials could be uncovered during this process. You are required to make sure that during the deployment, the administrative credentials are encrypted using a suitable Azure solution. Solution: You recommend the use of Azure Key Vault. Does the solution meet the goal?",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "204",
    note: "",
    question:
      "You have been informed by your superiors of the company has intentions to automate server deployment to Azure. There is, however, some concern that administrative credentials could be uncovered during this process. You are required to make sure that during the deployment, the administrative credentials are encrypted using a suitable Azure solution. Solution: You recommend the use of Azure Multi-Factor Authentication (MFA). Does the solution meet the goal?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "205",
    note: "",
    question:
      "Your company has an Azure Active Directory (Azure AD) environment. Users occasionally connect to Azure AD via the Internet. You have been tasked with making sure that users who connect to Azure AD via the internet from an unidentified IP address, are automatically encouraged to change passwords. Solution: You configure the use of Azure Key Vault. Does the solution meet the goal?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "206",
    note: "",
    question:
      "Your company has an Azure Active Directory (Azure AD) environment. Users occasionally connect to Azure AD via the Internet. You have been tasked with making sure that users who connect to Azure AD via the internet from an unidentified IP address, are automatically encouraged to change passwords. Solution: You configure the use of Azure AD Identity Protection. Does the solution meet the goal?",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "207",
    note: "",
    question:
      "Your company has an Azure Active Directory (Azure AD) environment. Users occasionally connect to Azure AD via the Internet. You have been tasked with making sure that users who connect to Azure AD via the internet from an unidentified IP address, are automatically encouraged to change passwords. Solution: You configure the use of Azure AD Privileged Identity Management. Does the solution meet the goal?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "208",
    note: "",
    question:
      "You are planning a strategy to deploy numerous web servers and database servers to Azure. This strategy should allow for connection types between the web servers and database servers to be controlled. Solution: You include the Azure Service Bus in your strategy. Does the solution meet the goal?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "209",
    note: "",
    question:
      "You are planning a strategy to deploy numerous web servers and database servers to Azure. This strategy should allow for connection types between the web servers and database servers to be controlled. Solution: You include network security groups (NSGs) in your strategy. Does the solution meet the goal?",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "210",
    note: "",
    question:
      "You are planning a strategy to deploy numerous web servers and database servers to Azure. This strategy should allow for connection types between the web servers and database servers to be controlled. Solution: You include a local network gateway in your strategy. Does the solution meet the goal?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "211",
    note: "",
    question:
      "Your company has Active Directory forest includes thousands of user accounts. You have been informed that all network resources will be migrated to Azure. Thereafter, the on-premises data center will be retired. You are required to employ a strategy that reduces the effect on users, once the planned migration has been completed. Solution: You plan to require Azure Multi-Factor Authentication (MFA). Does the solution meet the goal?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "212",
    note: "",
    question:
      "Your company has Active Directory forest includes thousands of user accounts. You have been informed that all network resources will be migrated to Azure. Thereafter, the on-premises data center will be retired. You are required to employ a strategy that reduces the effect on users, once the planned migration has been completed. Solution: You plan to sync all the Active Directory user accounts to Azure Active Directory (Azure AD). Does the solution meet the goal?",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "213",
    note: "",
    question:
      "Your company has Active Directory forest includes thousands of user accounts. You have been informed that all network resources will be migrated to Azure. Thereafter, the on-premises data center will be retired. You are required to employ a strategy that reduces the effect on users, once the planned migration has been completed. Solution: You plan to enforce password change. Does the solution meet the goal?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "214",
    note: "",
    question:
      "Your developers have created 10 web applications that must be host on Azure. You need to determine which Azure web tier plan to host the web apps. The web tier plan must meet the following requirements: The web apps will use custom domains. The web apps each require 10 GB of storage. The web apps must each run in dedicated compute instances. Load balancing between instances must be included. Costs must be minimized. Which web tier plan should you use?",
    options: [
      {
        value: "Standard.",
      },
      {
        value: "Basic.",
        answer: 1,
      },
      {
        value: "Free.",
      },
      {
        value: "Shared.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "215",
    note: "",
    question:
      "You are currently trying to generate a number of managed Microsoft SQL Server instances in an Azure environment. During the process, you are presented with a notification informing you that the Azure subscription limits must be increased. You want to make sure that you can complete your task. Solution: You generate a service health alert. Does the solution meet the goal?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "216",
    note: "",
    question:
      "You are currently trying to generate a number of managed Microsoft SQL Server instances in an Azure environment. During the process, you are presented with a notification informing you that the Azure subscription limits must be increased. You want to make sure that you can complete your task. Solution: You alter an Azure policy. Does the solution meet the goal?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "217",
    note: "",
    question:
      "You are currently trying to generate a number of managed Microsoft SQL Server instances in an Azure environment. During the process, you are presented with a notification informing you that the Azure subscription limits must be increased. You want to make sure that you can complete your task. Solution: You generate a new support request. Does the solution meet the goal?",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "218",
    note: "",
    question:
      "You are planning to migrate a company to Azure. Each of the company has numerous divisions will have an administrator in place to manage the Azure resources used by their respective division. You want to make sure that the Azure deployment you employ allows for Azure to be segmented for the divisions, while keeping administrative effort to a minimum. Solution: You plan to make use of several Azure Active Directory (Azure AD) directories. Does the solution meet the goal?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "219",
    note: "",
    question:
      "You are planning to migrate a company to Azure. Each of the company has numerous divisions will have an administrator in place to manage the Azure resources used by their respective division. You want to make sure that the Azure deployment you employ allows for Azure to be segmented for the divisions, while keeping administrative effort to a minimum. Solution: You plan to make use of several resource groups. Does the solution meet the goal?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "220",
    note: "",
    question:
      "You are planning to migrate a company to Azure. Each of the company has numerous divisions will have an administrator in place to manage the Azure resources used by their respective division. You want to make sure that the Azure deployment you employ allows for Azure to be segmented for the divisions, while keeping administrative effort to a minimum. Solution: You plan to make use of several subscriptions. Does the solution meet the goal?",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "221",
    note: "",
    question:
      "Your developers have created a portal web app for users in the Miami branch office. The web app will be publicly accessible and used by the Miami users to retrieve customer and product information. The web app is currently running in an on-premises test environment. You plan to host the web app on Azure. You need to determine which Azure web tier plan to host the web app. The web tier plan must meet the following requirements: The website will use the miami.weyland.com URL. The website will be deployed to two instances. SSL support must be included. The website requires 12 GB of storage. Costs must be minimized. Which web tier plan should you use?",
    options: [
      {
        value: "Standard.",
        answer: 1,
      },
      {
        value: "Basic.",
      },
      {
        value: "Free.",
      },
      {
        value: "Shared.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "222",
    note: "",
    question:
      "Your company has datacenters in Los Angeles and New York. The company has a Microsoft Azure subscription. You are configuring the two datacenters as geo-clustered sites for site resiliency. You need to recommend an Azure storage redundancy option. You have the following data storage requirements: Data must be stored on multiple nodes. Data must be stored on nodes in separate geographic locations. Data can be read from the secondary location as well as from the primary location Which of the following Azure stored redundancy options should you recommend?",
    options: [
      {
        value: "Geo-redundant storage.",
      },
      {
        value: "Read-only geo-redundant storage.",
        answer: 1,
      },
      {
        value: "Zone-redundant storage.",
      },
      {
        value: "Locally redundant storage.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "223",
    note: "",
    question:
      "Your company has Azure subscription includes a Basic support plan. They would like to request an assessment of an Azure environment has design from Microsoft. This is, however, not supported by the existing plan. You want to make sure that the company subscribes to a support plan that allows this functionality, while keeping expenses to a minimum. Solution: You recommend that the company subscribes to the Standard support plan. Does the solution meet the goal?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "224",
    note: "",
    question:
      "Your company has Azure subscription includes a Basic support plan. They would like to request an assessment of an Azure environment has design from Microsoft. This is, however, not supported by the existing plan. You want to make sure that the company subscribes to a support plan that allows this functionality, while keeping expenses to a minimum. Solution: You recommend that the company subscribes to the Professional Direct support plan. Does the solution meet the goal?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "225",
    note: "",
    question:
      "Your company has Azure subscription includes a Basic support plan. They would like to request an assessment of an Azure environment has design from Microsoft. This is, however, not supported by the existing plan. You want to make sure that the company subscribes to a support plan that allows this functionality, while keeping expenses to a minimum. Solution: You recommend that the company subscribes to the Premier support plan. Does the solution meet the goal?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "226",
    note: "",
    question:
      "A company that has numerous divisions is planning to deploy an Azure environment. The company would like each division has option to pay for the Azure services it utilizes, not be the same. You have been asked to recommend a solution to meet the requirements. Solution: You recommend that an Azure role be created for each division. Does the solution meet the goal?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "227",
    note: "",
    question:
      "A company that has numerous divisions is planning to deploy an Azure environment. The company would like each division has option to pay for the Azure services it utilizes, not be the same. You have been asked to recommend a solution to meet the requirements. Solution: You recommend that an Azure policy be created for each division. Does the solution meet the goal?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "228",
    note: "",
    question:
      "A company that has numerous divisions is planning to deploy an Azure environment. The company would like each division has option to pay for the Azure services it utilizes, not be the same. You have been asked to recommend a solution to meet the requirements. Solution: You recommend that a subscription be created for each division. Does the solution meet the goal?",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "229",
    note: "",
    question:
      "An Azure subscription can be associated to multiple Azure Active Directory (Azure AD) tenants.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "230",
    note: "",
    question:
      "You can change the Azure Active Directory (Azure AD) tenant to which an Azure subscription is associated.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "231",
    note: "",
    question:
      "When an Azure subscription expires, the associated Azure Active Directory (Azure AD) tenant is deleted automatically.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "232",
    note: "",
    question:
      "A single Microsoft account can be used to manage multiple Azure subscriptions.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "233",
    note: "",
    question:
      "Two Azure subscriptions can be merged into a single subscription.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "234",
    note: "",
    question: "A company can use resources from multiple subscriptions.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "235",
    note: "",
    question: "Availability zones can be implemented in all Azure regions.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "236",
    note: "",
    question:
      "Only virtual machines that run Windows Server can be created in availability zones.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "237",
    note: "",
    question:
      "Availability zones are used to replicate data and applications to multiple regions.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "238",
    note: "",
    question:
      "You plan to create an Azure virtual machine. You need to identify which storage service must be used to store the unmanaged data disks of the virtual machine. What should you identify?",
    options: [
      {
        value: "Containers.",
        answer: 1,
      },
      {
        value: "File shares.",
      },
      {
        value: "Tables.",
      },
      {
        value: "Queues.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "239",
    note: "",
    question:
      "You plan to implement an Azure database solution. You need to implement a database solution that meets the following requirements: Can add data concurrently from multiple regions. Can store JSON documents Which database service should you deploy?",
    options: [
      {
        value: "Azure Cosmos DB.",
        answer: 1,
      },
      {
        value: "SQL databases.",
      },
      {
        value: "Azure Database for MYSQL servers.",
      },
      {
        value: "Azure Database for PostgreSQL servers.",
      },
      {
        value: "Azure Database for NariaDB servers.",
      },
      {
        value: "SQL servers.",
      },
      {
        value: "SQL Data warehouses.",
      },
      {
        value: "Azure Database Migration Services.",
      },
      {
        value: "Azure Cache for Redis.",
      },
      {
        value: "SQL Server stretch databases.",
      },
      {
        value: "Data factories.",
      },
      {
        value: "SQL elastic pools.",
      },
      {
        value: "Virtual Clusters.",
      },
      {
        value: "Managed databases.",
      },
      {
        value: "Elastic Job agents.",
      },
      {
        value: "SQL managed instances.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "240",
    note: "",
    question:
      "All the Azure resources deployed to a resource group must use the same Azure region.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "241",
    note: "",
    question:
      "If you assign a tag to a resource group, all the Azure resources in that resource group are assigned to the same tag.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "242",
    note: "",
    question:
      "If you assign permissions for a user to manage a resource group, the user can manage all the Azure resources in that resource group.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "243",
    note: "",
    question:
      "You plan to deploy a critical line-of-business application to Azure. The application will run on an Azure virtual machine. You need to recommend a deployment solution for the application. The solution must provide a guaranteed availability of 99.99 percent. What is the minimum number of virtual machines and the minimum number of availability zones you should recommend for the deployment? Minimum number of virtual machines:",
    options: [
      {
        value: "1.",
      },
      {
        value: "2.",
        answer: 1,
      },
      {
        value: "3.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "244",
    note: "",
    question:
      "You plan to deploy a critical line-of-business application to Azure. The application will run on an Azure virtual machine. You need to recommend a deployment solution for the application. The solution must provide a guaranteed availability of 99.99 percent. What is the minimum number of virtual machines and the minimum number of availability zones you should recommend for the deployment? Minimum number of availability zones:",
    options: [
      {
        value: "1.",
      },
      {
        value: "2.",
        answer: 1,
      },
      {
        value: "3.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "245",
    note: "",
    question:
      "Data that is stored in an Azure Storage account automatically has at least three copies.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "246",
    note: "",
    question:
      "All data that is copied to an Azure Storage account is backed up automatically to another Azure data center.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "247",
    note: "",
    question:
      "An Azure Storage account can contain up to 2 TB of data and up to one million files.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "248",
    note: "",
    question:
      "If you have Azure resources deployed to every region, you can implement availability zones in all the regions.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "249",
    note: "",
    question: "North America is represented by a single Azure region.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "250",
    note: "",
    question: "Every Azure region has multiple datacenters.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "251",
    note: "",
    question:
      "Data transfers between Azure services located in different Azure regions are always free.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "252",
    note: "",
    question:
      "You need to be notified when Microsoft plans to perform maintenance that can affect the resources deployed to an Azure subscription. What should you use?",
    options: [
      {
        value: "Azure Monitor.",
      },
      {
        value: "Azure Service Health.",
        answer: 1,
      },
      {
        value: "Azure Advisor.",
      },
      {
        value: "Microsoft Trust Center.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "253",
    note: "",
    question: "A Windows Virtual Desktop session host can run Windows 10 only.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "254",
    note: "",
    question:
      "A Windows Virtual Desktop host pool that includes 20 session hosts supports a maximum of 20 simultaneous user connections.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "255",
    note: "",
    question:
      "Windows Virtual Desktop supports desktop and app virtualization.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "256",
    note: "",
    question:
      "[...] can calculate cost savings due to reduced electricity consumption as a result of migrating on-premises Microsoft SQL servers to Azure.",
    options: [
      {
        value: "The Azure Migrate: Server Assessment tool.",
      },
      {
        value: "The Azure Total Cost of Ownership (TCO) calculator.",
        answer: 1,
      },
      {
        value: "The Database Migration Assistant.",
      },
      {
        value: "The pricing calculator in Azure.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "257",
    note: "",
    question:
      "You can use Availability Zones in Azure to protect Azure virtual machines from a datacenter failure.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "258",
    note: "",
    question:
      "You can use Availability Zones in Azure to protect Azure virtual machines from a region failure.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "259",
    note: "",
    question:
      "You can use Availability Zones in Azure to protect Azure managed disks from a datacenter failure.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "260",
    note: "",
    question: "An Azure subscription can have multiple account administrators.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "261",
    note: "",
    question:
      "An Azure subscription can be managed by using a Microsoft account only.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "262",
    note: "",
    question:
      "An Azure resource group can contain multiple Azure subscriptions.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "263",
    note: "",
    question:
      "To use Azure Active Directory (Azure AD) credentials to sign in to a computer that runs Windows 10, the computer must be joined to Azure AD.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "264",
    note: "",
    question:
      "Users in Azure Active Directory (Azure AD) are organized by using resource groups.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "265",
    note: "",
    question:
      "Azure Active Directory (Azure AD) groups support dynamic membership rules.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "266",
    note: "",
    question:
      "You plan to deploy several Azure virtual machines. You need to ensure that the services running on the virtual machines remain available if a single data center fails. What are two possible solutions?",
    options: [
      {
        value: "Deploy the virtual machines to two or more availability zones.",
        answer: 1,
      },
      {
        value: "Deploy the virtual machines to two or more resource groups.",
      },
      {
        value: "Deploy the virtual machines to a scale set.",
      },
      {
        value: "Deploy the virtual machines to two or more regions.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "267",
    note: "",
    question:
      "Azure Monitor can monitor the performance of on-premises computers.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "268",
    note: "",
    question:
      "Azure Monitor can send alerts to Azure Active Directory security groups.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "269",
    note: "",
    question:
      "Azure Monitor can trigger alerts based on data in an Azure Log Analytics workspace.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "270",
    note: "",
    question:
      "From Azure Service Health, an administrator can view the health of all the services in an Azure environment.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "271",
    note: "",
    question:
      "From Azure Service Health, an administrator can create a rule to be alerted if an Azure service fails.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "272",
    note: "",
    question:
      "From Azure Service Health, an administrator can prevent a service failure.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "273",
    note: "",
    question:
      "You need to identify which blades in the Azure portal must be used to perform the following task: Monitor the health of Azure services.",
    options: [
      {
        value: "Monitor.",
        answer: 1,
      },
      {
        value: "Subscriptions.",
      },
      {
        value: "Marketplace.",
      },
      {
        value: "Advisor.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "274",
    note: "",
    question:
      "You need to identify which blades in the Azure portal must be used to perform the following task: Browse available virtual machine images.",
    options: [
      {
        value: "Monitor.",
      },
      {
        value: "Subscriptions.",
      },
      {
        value: "Marketplace.",
        answer: 1,
      },
      {
        value: "Advisor.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "275",
    note: "",
    question:
      "You need to identify which blades in the Azure portal must be used to perform the following task: View security recommendations.",
    options: [
      {
        value: "Monitor.",
      },
      {
        value: "Subscriptions.",
      },
      {
        value: "Marketplace.",
      },
      {
        value: "Advisor.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "276",
    note: "",
    question:
      "Azure Advisor can generate a list of Azure virtual machines that are protected by Azure Backup.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "277",
    note: "",
    question:
      "If you implement the security recommendations provided by Azure Advisor, your company secure score will decrease.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "278",
    note: "",
    question:
      "To maintain Microsoft support, you must implement the security recommendations provided by Azure Advisor within a period of 30 days.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "279",
    note: "",
    question:
      "What can you use to automatically send an alert if an administrator stops an Azure virtual machine?",
    options: [
      {
        value: "Azure Advisor.",
      },
      {
        value: "Azure Service Health.",
      },
      {
        value: "Azure Monitor.",
        answer: 1,
      },
      {
        value: "Azure Network Watcher.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "280",
    note: "",
    question:
      "You have an Azure environment. You need to create a new Azure virtual machine from a tablet that runs the Android operating system. What are three possible solutions?",
    options: [
      {
        value: "Use Bash in Azure Cloud Shell.",
        answer: 1,
      },
      {
        value: "Use PowerShell in Azure Cloud Shell.",
        answer: 1,
      },
      {
        value: "Use the PowerApps portal.",
      },
      {
        value: "Use the Security & Compliance admin center.",
      },
      {
        value: "Use the Azure portal.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "281",
    note: "",
    question:
      "Azure Advisor provides recommendations on how to improve the security of an Azure Active Directory (Azure AD) environment.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "282",
    note: "",
    question:
      "Azure Advisor provides recommendations on how to reduce the cost of running Azure virtual machines.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "283",
    note: "",
    question:
      "Azure Advisor provides recommendations on how to configure the network settings on Azure virtual machines.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "284",
    note: "",
    question:
      "Several support engineers plan to manage Azure by using the Computer1-Windows 10. You need to identify which Azure management tools can be used.",
    options: [
      {
        value: "The Azure CLI and the Azure portal.",
      },
      {
        value: "The Azure portal and Azure PowerShell.",
      },
      {
        value: "The Azure CLI and Azure PowerShell.",
      },
      {
        value: "The Azure CLI, the Azure portal, and Azure PowerShell.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "285",
    note: "",
    question:
      "Several support engineers plan to manage Azure by using the Computer2-Ubuntu. You need to identify which Azure management tools can be used.",
    options: [
      {
        value: "The Azure CLI and the Azure portal.",
      },
      {
        value: "The Azure portal and Azure PowerShell.",
      },
      {
        value: "The Azure CLI and Azure PowerShell.",
      },
      {
        value: "The Azure CLI, the Azure portal, and Azure PowerShell.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "286",
    note: "",
    question:
      "Several support engineers plan to manage Azure by using the Computer3-MacOS Mojave. You need to identify which Azure management tools can be used.",
    options: [
      {
        value: "The Azure CLI and the Azure portal.",
      },
      {
        value: "The Azure portal and Azure PowerShell.",
      },
      {
        value: "The Azure CLI and Azure PowerShell.",
      },
      {
        value: "The Azure CLI, the Azure portal, and Azure PowerShell.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "287",
    note: "",
    question: "You can access Compliance Manager from the [...].",
    options: [
      {
        value: "Azure Active Directory admin center.",
      },
      {
        value: "Azure portal.",
      },
      {
        value: "Microsoft 365 Admin Center.",
        answer: 1,
      },
      {
        value: "Microsoft Service Trust Portal.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "288",
    note: "",
    question:
      "An Azure administrator plans to run a PowerShell script that creates Azure resources. You need to recommend which computer configuration to use to run the script. Which three computers can run the script?",
    options: [
      {
        value:
          "A computer that runs macOS and has PowerShell Core 6.0 installed.",
        answer: 1,
      },
      {
        value:
          "A computer that runs Windows 10 and has the Azure PowerShell module installed.",
        answer: 1,
      },
      {
        value:
          "A computer that runs Linux and has the Azure PowerShell module installed.",
      },
      {
        value:
          "A computer that runs Linux and has the Azure CLI tools installed.",
      },
      {
        value: "A computer that runs Chrome OS and uses Azure Cloud Shell.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "289",
    note: "",
    question:
      "Azure Firewall will encrypt all the network traffic sent from Azure the Internet.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "290",
    note: "",
    question:
      "A Network Security Group (NSG) will encrypt all the network traffic sent from Azure to the Internet.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "291",
    note: "",
    question:
      "Azure virtual machines that run Windows Server 2016 can encrypt network traffic sent to the Internet.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "292",
    note: "",
    question:
      "Azure Security Center can monitor Azure resources and on-premises resources.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "293",
    note: "",
    question: "All Azure Security Center features are free.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "294",
    note: "",
    question:
      "From Azure Security Center, you can download a Regulatory Compliance report.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "295",
    note: "",
    question:
      "You plan to implement several security services for an Azure environment. You need to identify which Azure services must be used to meet the following security requirements: Monitor threats by using sensors.",
    options: [
      {
        value: "Azure Monitor.",
      },
      {
        value: "Azure Security Center.",
      },
      {
        value: "Azure Active Directory (Azure AD) Identity Protection.",
      },
      {
        value: "Azure Advanced Threat Protection (ATP).",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "296",
    note: "",
    question:
      "You plan to implement several security services for an Azure environment. You need to identify which Azure services must be used to meet the following security requirements: Enforce Azure Multi-Factor Authentication (MFA) based on a condition.",
    options: [
      {
        value: "Azure Monitor.",
      },
      {
        value: "Azure Security Center.",
      },
      {
        value: "Azure Active Directory (Azure AD) Identity Protection.",
        answer: 1,
      },
      {
        value: "Azure Advanced Threat Protection (ATP).",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "297",
    note: "",
    question:
      "Your Azure environment contains multiple Azure virtual machines. You need to ensure that a virtual machine named VM1 is accessible from the Internet over HTTP. What are two possible solutions?",
    options: [
      {
        value: "Modify an Azure Traffic Manager profile.",
      },
      {
        value: "Modify a Network Security Group (NSG).",
        answer: 1,
      },
      {
        value: "Modify a DDoS protection plan.",
      },
      {
        value: "Modify an Azure firewall.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "298",
    note: "",
    question: "You can enable Just In Time (JIT) VM access by using [...].",
    options: [
      {
        value: "Azure Bastion.",
      },
      {
        value: "Azure Firewall.",
      },
      {
        value: "Azure Front Door.",
      },
      {
        value: "Azure Security Center.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "299",
    note: "",
    question:
      "You can associate a Network Security Group (NSG) to a virtual network subnet.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "300",
    note: "",
    question:
      "You can associate a Network Security Group (NSG) to a virtual network.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "301",
    note: "",
    question:
      "You can associate a Network Security Group (NSG) to a network interface.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "302",
    note: "",
    question:
      "After you create a virtual machine, you need to modify to allow connections to TCP port 8080 on the virtual machine [...].",
    options: [
      {
        value: "Network Security Group (NSG).",
        answer: 1,
      },
      {
        value: "Virtual network gateway.",
      },
      {
        value: "Virtual network.",
      },
      {
        value: "Eoute table.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "303",
    note: "",
    question:
      "You can create custom Azure roles to control access to resources.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "304",
    note: "",
    question: "A user account can be assigned to multiple Azure roles.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "305",
    note: "",
    question:
      "A resource group can have the Owner role assigned to multiple users.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "306",
    note: "",
    question:
      "You need to collect and automatically analyze security events from Azure Active Directory (Azure AD). What should you use?",
    options: [
      {
        value: "Azure Sentinel.",
        answer: 1,
      },
      {
        value: "Azure Synapse Analytics.",
      },
      {
        value: "Azure AD Connect.",
      },
      {
        value: "Azure Key Vault.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "307",
    note: "",
    question:
      "From [...] you can view which user turned off a specific virtual machine during the last 14 days.",
    options: [
      {
        value: "Azure Access Control IAM.",
      },
      {
        value: "Azure Event Hubs.",
      },
      {
        value: "Azure Activity Log.",
        answer: 1,
      },
      {
        value: "Azure Service Health.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "308",
    note: "",
    question:
      "Which Azure service can you use as a security information and event management (SIEM) solution?",
    options: [
      {
        value: "Azure Analysis Services.",
      },
      {
        value: "Azure Sentinel.",
        answer: 1,
      },
      {
        value: "Azure Information Protection.",
      },
      {
        value: "Azure Cognitive Services.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "309",
    note: "",
    question:
      "Your company implements [Azure policies] to automatically add a watermark to Microsoft Word documents that contain credit card information.",
    options: [
      {
        value: "No change is needed.",
      },
      {
        value: "DDoS protection.",
      },
      {
        value: "Azure Information Protection.",
        answer: 1,
      },
      {
        value: "Azure Active Directory (Azure AD) Identity Protection.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "310",
    note: "",
    question:
      "You have an Azure virtual network named VNET1 in a resource group named RG1. You assign the Azure Policy definition of Not Allowed Resource Type and specify that virtual networks are not an allowed resource type in RG1. VNET1 [...].",
    options: [
      {
        value: "Is deleted automatically.",
      },
      {
        value: "Is moved automatically to another resource group.",
      },
      {
        value: "Continues to function normally.",
        answer: 1,
      },
      {
        value: "Is now a read-only object.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "311",
    note: "",
    question:
      "You can create Group Polices in Azure Active Directory (Azure AD).",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "312",
    note: "",
    question:
      "You can join Windows 10 devices to Azure Active Directory (Azure AD).",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "313",
    note: "",
    question:
      "You can join Android devices to Azure Active Directory (Azure AD).",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "314",
    note: "",
    question:
      "The [...] explains what data Microsoft processes, how Microsoft processes the data, and the purpose of processing the data.",
    options: [
      {
        value: "The Microsoft Online Services Privacy Statement.",
        answer: 1,
      },
      {
        value: "Microsoft Online Services Terms.",
      },
      {
        value: "Microsoft Online Service Level Agreement.",
      },
      {
        value: "Online Subscription Agreement for Microsoft Azure.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "315",
    note: "",
    question: "An Azure Policy initiative definition is a [...].",
    options: [
      {
        value: "Collection of policy definitions.",
        answer: 1,
      },
      {
        value: "Collection of Azure Policy definition assignments.",
      },
      {
        value: "Group of Azure Blueprints definitions.",
      },
      {
        value: "Group of role-based access control (RBAC) role assignments.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "316",
    note: "",
    question:
      "[...] provide organizations with the ability to manage the compliance of Azure resources across multiple subscriptions.",
    options: [
      {
        value: "Resource groups.",
      },
      {
        value: "Management groups.",
      },
      {
        value: "Azure policies.",
        answer: 1,
      },
      {
        value: "Azure App Service plans.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "317",
    note: "",
    question:
      "General Data Protection Regulation (GDPR) defines data protection and privacy rules.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "318",
    note: "",
    question:
      "General Data Protection Regulation (GDPR) applies to companies that offer goods or services to individuals in the EU.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "319",
    note: "",
    question:
      "Azure can be used to build a General Data Protection Regulation (GDPR)-compliant infrastructure.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "320",
    note: "",
    question:
      "You can add an Azure Resource Manager template to an Azure blueprint.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "321",
    note: "",
    question: "You can assign an Azure blueprint to a resource group.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "322",
    note: "",
    question:
      "You can use Azure Blueprints to grant permissions to a resource.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "323",
    note: "",
    question: "Azure China is operated by Microsoft.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "324",
    note: "",
    question: "Azure Government is operated by Microsoft.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "325",
    note: "",
    question:
      "Azure Government is available only to US government agencies and their partners.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "326",
    note: "",
    question: "An Azure resource can have multiple Delete locks.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "327",
    note: "",
    question: "An Azure resource inherits locks from its resource group.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "328",
    note: "",
    question:
      "If an Azure resource has a Read-only lock, you can add a Delete lock to the resource.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "329",
    note: "",
    question:
      "Authorization to access Azure resources can be provided only to Azure Active Directory (Azure AD) users.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "330",
    note: "",
    question:
      "Identities stored in Azure Active Directory (Azure AD), third-party cloud services, and on-premises Active Directory can be used to access Azure resources.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "331",
    note: "",
    question:
      "Azure has built-in authentication and authorization services that provide secure access to Azure resources.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "332",
    note: "",
    question:
      "Identities stored in an on-premises Active Directory can be synchronized to Azure Active Directory (Azure AD).",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "333",
    note: "",
    question:
      "You can view your company regulatory compliance report from [...].",
    options: [
      {
        value: "Azure Advisor.",
      },
      {
        value: "Azure Analysis Services.",
      },
      {
        value: "Azure Monitor.",
      },
      {
        value: "Azure Security Center.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "334",
    note: "",
    question:
      "Your company has an Azure subscription that contains resources in several regions. You need to ensure that administrators can only create resources in those regions. What should you use?",
    options: [
      {
        value: "A read-only lock.",
      },
      {
        value: "An Azure policy.",
        answer: 1,
      },
      {
        value: "A management group.",
      },
      {
        value: "A reservation.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "335",
    note: "",
    question:
      "Azure Active Directory (Azure AD) requires the implementation of domain controllers on Azure virtual machines.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "336",
    note: "",
    question:
      "Azure Active Directory (Azure AD) provides authentication services for resources hosted in Azure and Microsoft 365.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "337",
    note: "",
    question:
      "Each user account in Azure Active Directory (Azure AD) can be assigned only one license.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "338",
    note: "",
    question:
      "To implement an Azure Multi-Factor Authentication (MFA) solution, you must sync on-premises identities to the cloud.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "339",
    note: "",
    question:
      "Two valid methods for Azure Multi-Factor Authentication (MFA) are picture identification and a passport number.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "340",
    note: "",
    question:
      "You can configure the Azure Active Directory (Azure AD) activity logs to appear in Azure Monitor.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "341",
    note: "",
    question:
      "From Azure Monitor, you can monitor resources across multiple Azure subscriptions.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "342",
    note: "",
    question: "From Azure Monitor, you can create alerts.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "343",
    note: "",
    question:
      "You create a resource group named RG1 in Azure Resource Manager. You need to prevent the accidental deletion of the resources in RG1. Which setting should you use?",
    options: [
      {
        value: "Quickstart.",
      },
      {
        value: "Resource costs.",
      },
      {
        value: "Deployments.",
      },
      {
        value: "Policies.",
      },
      {
        value: "Properties.",
      },
      {
        value: "Locks.",
        answer: 1,
      },
      {
        value: "Automation script.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "344",
    note: "",
    question:
      "You have a resource group named RG1. You need to prevent the creation of virtual machines only in RG1. The solution must ensure that other objects can be created in RG1. What should you use?",
    options: [
      {
        value: "A lock.",
      },
      {
        value: "An Azure role.",
      },
      {
        value: "A tag.",
      },
      {
        value: "An Azure policy.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "345",
    note: "",
    question:
      "You have an Azure subscription and 100 Windows 10 devices. You need to ensure that only users whose devices have the latest security patches installed can access Azure Active Directory (Azure AD)-integrated applications. What should you implement?",
    options: [
      {
        value: "A conditional access policy.",
        answer: 1,
      },
      {
        value: "Azure Bastion.",
      },
      {
        value: "Azure Firewall.",
      },
      {
        value: "Azure Policy.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "346",
    note: "",
    question:
      "[...] enables users to authenticate to multiple applications by using single sign-on (SSO).",
    options: [
      {
        value: "Application security groups in Azure Azure.",
      },
      {
        value: "Active Directory (Azure AD).",
        answer: 1,
      },
      {
        value: "Azure Key Vault.",
      },
      {
        value: "Azure Security Center.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "347",
    note: "",
    question:
      "You deploy an Azure resource. The resource becomes unavailable for an extended period due to a service outage. Microsoft will [...].",
    options: [
      {
        value: "Refund your bank account.",
      },
      {
        value: "Migrate the resource to another subscription.",
      },
      {
        value: "Credit your Azure account.",
        answer: 1,
      },
      {
        value: "Send you a coupon code that you can redeem for Azure credits.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "348",
    note: "",
    question: "Which task can you perform by using Azure Advisor?",
    options: [
      {
        value:
          "Integrate Active Directory and Azure Active Directory (Azure AD).",
      },
      {
        value: "Estimate the costs of an Azure solution.",
        answer: 1,
      },
      {
        value:
          "Confirm that Azure subscription security follows best practices.",
      },
      {
        value: "Evaluate which on-premises resources can be migrated to Azure.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "349",
    note: "",
    question:
      "If your company uses an Azure free account, you will only be able to use a subset of Azure services.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "350",
    note: "",
    question: "All Azure free accounts expire after a specific period.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "351",
    note: "",
    question:
      "You can create up to 10 Azure free accounts by using the same Microsoft account.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "352",
    note: "",
    question:
      "All Azure services in private preview must be accessed by using a separate Azure portal.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "353",
    note: "",
    question:
      "Azure services in public preview can be used in production environments.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "354",
    note: "",
    question:
      "Azure services in public preview are subject to a Service Level Agreement (SLA).",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "355",
    note: "",
    question: "A Standard support plan is included in an Azure free account.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "356",
    note: "",
    question: "Match the Azure services to the appropriate descriptions.",
    options: [],
    tags: [],
    comment: ``,
  },
  {
    id: "357",
    note: "",
    question:
      "Support from MSDN forums is only provided to companies that have a pay-as-you-go subscription.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "358",
    note: "",
    question:
      "A user who is assigned the Owner role can transfer ownership of an Azure subscription.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "359",
    note: "",
    question:
      "You can convert the Azure subscription of your company from Free Trial to Pay-As-You-Go.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "360",
    note: "",
    question:
      "With Azure Reservations, you pay less fer virtual machines than with pay as-you-go pricing.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "361",
    note: "",
    question:
      "Two Azure virtual machines that use the B25 size have the same monthly costs.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "362",
    note: "",
    question:
      "When an Azure virtual machine is stopped, you continue to pay storage costs for the virtual machine.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "363",
    note: "",
    question:
      "How should you calculate the monthly uptime percentage? [...] ÷ Maximum Available Minutes × 100.",
    options: [
      {
        value: "Downtime in Minutes.",
      },
      {
        value: "Maximum Available Minutes.",
      },
      {
        value: "(Maximum Available Minutes-Downtime in Minutes).",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "364",
    note: "",
    question:
      "How should you calculate the monthly uptime percentage? (Maximum Available Minutes-Downtime in Minutes) ÷ [...] × 100.",
    options: [
      {
        value: "60.",
      },
      {
        value: "1,440.",
      },
      {
        value: "Maximum Available Minutes.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "365",
    note: "",
    question:
      "How should you calculate the monthly uptime percentage? (Maximum Available Minutes-Downtime in Minutes) ÷ Maximum Available Minutes × [...].",
    options: [],
    tags: [],
    comment: ``,
  },
  {
    id: "366",
    note: "",
    question:
      "By creating additional resource groups in an Azure subscription, additional costs are incurred.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "367",
    note: "",
    question:
      "By copying several gigabits of data to Azure from an on-premises network over a VPN, additional data transfer costs are incurred.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "368",
    note: "",
    question:
      "An Azure service is available to all Azure customers when it is in [...].",
    options: [
      {
        value: "Public preview.",
        answer: 1,
      },
      {
        value: "Private preview.",
      },
      {
        value: "Development.",
      },
      {
        value: "Development an Enterprise Agreement (EA) subscription.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "369",
    note: "",
    question:
      "Most Azure services are introduced in private preview before being introduced in public preview, and then in general availability.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "370",
    note: "",
    question:
      "Azure services in public preview can be managed only by using the Azure CLI.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "371",
    note: "",
    question:
      "The cost of an Azure service in private preview decreases when the service becomes generally available.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "372",
    note: "",
    question:
      "Your Azure trial account expired last week. You are now unable to [...].",
    options: [
      {
        value:
          "Create additional Azure Active Directory (Azure AD) user accounts.",
      },
      {
        value: "Start an existing Azure virtual machine.",
        answer: 1,
      },
      {
        value: "Access your data stored in Azure.",
      },
      {
        value: "Access the Azure portal.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "373",
    note: "",
    question:
      "Your company plans to purchase an Azure subscription. The company has support policy states that the Azure environment must provide an option to access support engineers by phone or email. You need to recommend which support plan meets the support policy requirement. Solution: Recommend a Professional Direct support plan. Does this meet the goal?",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "374",
    note: "",
    question:
      "Your company has 10 departments. The company plans to implement an Azure environment. You need to ensure that each department can use a different payment option for the Azure services it consumes. What should you create for each department?",
    options: [
      {
        value: "A reservation.",
      },
      {
        value: "A subscription.",
        answer: 1,
      },
      {
        value: "A resource group.",
      },
      {
        value: "A container instance.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "375",
    note: "",
    question: "An Azure free account has a spending limit.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "376",
    note: "",
    question:
      "An Azure free account has a limit of 2TB of data that can be uploaded to Azure.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "377",
    note: "",
    question:
      "An Azure free account can contain an unlimited number of web apps.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "378",
    note: "",
    question:
      "An Azure service in private preview is released to all Azure customers.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "379",
    note: "",
    question:
      "An Azure service in public preview is released to all Azure customers.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "380",
    note: "",
    question:
      "An Azure service in general availability is released to a subset of Azure customers.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "381",
    note: "",
    question:
      "With a consumption-based plan, you pay a fixed rate for all data sent to or from virtual machines hosted in the cloud.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "382",
    note: "",
    question:
      "With a consumption-based plan, you reduce overall costs by paying only for extra capacity when it is required.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "383",
    note: "",
    question: "Serverless computing is an example of a consumption-based plan.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "384",
    note: "",
    question: "The cost of Azure resources can vary between regions.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "385",
    note: "",
    question:
      "An Azure Reservation is used to reserve server capacity at a specific data center.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "386",
    note: "",
    question: "You can stop an Azure SQL Database instance to decrease costs.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "387",
    note: "",
    question:
      "You have an application that is comprised of an Azure web app that has a Service Level Agreement (SLA) of 99.95 percent and an Azure SQL database that has an SLA of 99.99 percent. The composite SLA for the application is [...].",
    options: [
      {
        value: "The product of both SLAS, which equals 99.94 percent.",
        answer: 1,
      },
      {
        value:
          "The lowest SLA associated to the application, which is 99.95 percent.",
      },
      {
        value:
          "The highest SLA associated to the application, which is 99.99 percent.",
      },
      {
        value: "The difference between the two SLAS, which is 0.05 percent.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "388",
    note: "",
    question:
      "The Service Level Agreement (SLA) guaranteed uptime for paid Azure services is at least 99.9 percent.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "389",
    note: "",
    question:
      "Companies can increase the Service Level Agreement (SLA) guaranteed uptime by adding Azure resources to multiple regions.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "390",
    note: "",
    question:
      "Companies can increase the Service Level Agreement (SLA) guaranteed uptime by purchasing multiple subscriptions.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "391",
    note: "",
    question: "Match the Azure Services service to the correct description.",
    options: [],
    tags: [],
    comment: ``,
  },
  {
    id: "392",
    note: "",
    question:
      "You need to request that Microsoft increase a subscription quota limit for your company. Which blade should you use from the Azure portal?",
    options: [
      {
        value: "Create a resource.",
      },
      {
        value: "All services.",
      },
      {
        value: "Favorites.",
      },
      {
        value: "Dashboard.",
      },
      {
        value: "All resources.",
      },
      {
        value: "Resource groups.",
      },
      {
        value: "App Services.",
      },
      {
        value: "Function Apps.",
      },
      {
        value: "SQL databases.",
      },
      {
        value: "Azure Cosmos DB.",
      },
      {
        value: "Virtual machines.",
      },
      {
        value: "Load balancers.",
      },
      {
        value: "Help + support.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "393",
    note: "",
    question:
      "You can use in Azure to send email alerts when the cost of the current billing period for an Azure subscription exceeds a specified limit.",
    options: [
      {
        value: "Advisor recommendations.",
      },
      {
        value: "Access control (IAM).",
      },
      {
        value: "Budget alerts.",
        answer: 1,
      },
      {
        value: "Compliance.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "394",
    note: "",
    question:
      "From the Azure portal, you can distinguish between services that are generally available and services that are in public preview.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "395",
    note: "",
    question:
      "After an Azure service becomes generally available, the service is no longer updated with new features.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "396",
    note: "",
    question:
      "When you create Azure resources for a service in public preview, you must recreate the resources once the service becomes generally available.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "397",
    note: "",
    question:
      "When using an Azure ExpressRoute connection, inbound data traffic from an on-premises network to Azure is always free.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "398",
    note: "",
    question:
      "Outbound data traffic from Azure to an on-premises network is always free.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "399",
    note: "",
    question:
      "Data traffic between Azure services within the same Azure region is always free.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "400",
    note: "",
    question:
      "Your company has an Azure subscription that contains the following unused resources: 20 user accounts in Azure Active Directory (Azure AD). Five groups in Azure AD. 10 public IP addresses. 10 network interfaces. You need to reduce the Azure costs for the company. Which unused resources should you remove?",
    options: [
      {
        value: "The network interfaces.",
      },
      {
        value: "The public IP addresses.",
        answer: 1,
      },
      {
        value: "The groups.",
      },
      {
        value: "The user accounts.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "401",
    note: "",
    question:
      "If an Azure virtual machine has a status of Stopped (deallocated), you will continue to pay for.",
    options: [
      {
        value: "Compute capacity.",
      },
      {
        value: "I/O operations.",
      },
      {
        value: "Networking.",
      },
      {
        value: "Storage.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "402",
    note: "",
    question:
      "Storing 1 TB of data in Azure Blob storage will always cost the same, regardless of the Azure region in which the data is located.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "403",
    note: "",
    question:
      "When you use a general-purpose v2 Azure Storage account, you are only charged for the amount of data that is stored. All read and write operations are free.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "404",
    note: "",
    question:
      "Transferring data between Azure Storage accounts in different Azure regions is free.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "405",
    note: "",
    question:
      "In Azure Active Directory Premium P2, at least 99.9 percent availability is guaranteed.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "406",
    note: "",
    question:
      "The Service Level Agreement (SLA) for Azure Active Directory Premium P2 is the same as the SLA for Azure Active Directory Free.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "407",
    note: "",
    question:
      "All paying Azure customers receive a credit if their monthly uptime percentage is below the guaranteed amount in the Service Level Agreement (SLA).",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "408",
    note: "",
    question:
      "Adding resource groups in an Azure subscription generates additional costs.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "409",
    note: "",
    question:
      "Copying 10 GB of data to Azure from an on-premises network over a VPN generates additional Azure data transfer costs.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "410",
    note: "",
    question:
      "Copying 10 GB of data from Azure to an on-premises network over a VPN generates additional Azure data transfer costs.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "411",
    note: "",
    question:
      "Each Azure subscription can contain multiple account administrators.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "412",
    note: "",
    question:
      "Each Azure subscription can be managed by using a Microsoft account only.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "413",
    note: "",
    question: "An Azure resource group contains multiple Azure subscriptions.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "414",
    note: "",
    question:
      "Data that is stored in the Archive access tier of an Azure Storage account [...].",
    options: [
      {
        value: "Can be accessed at any time by using azcopy.exe.",
      },
      {
        value: "Can only be read by using Azure Backup.",
      },
      {
        value: "Must be restored before the data can be accessed.",
      },
      {
        value: "Must be rehydrated before the data can be accessed.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "415",
    note: "",
    question:
      "You deploy an Azure resource. The resource becomes unavailable for an extended period due to a service outage. Microsoft will automatically [refund your bank account].",
    options: [
      {
        value: "No change is needed.",
      },
      {
        value: "Automatically migrate the resource to another subscription.",
      },
      {
        value: "Automatically credit your account.",
        answer: 1,
      },
      {
        value: "Send you a coupon code that you can redeem for Azure credits.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "416",
    note: "",
    question:
      "When you need to delegate permissions to several Azure virtual machines simultaneously, you must deploy the Azure virtual machines [to the same Azure region].",
    options: [
      {
        value: "No change is needed.",
      },
      {
        value: "By using the same Azure Resource Manager template.",
      },
      {
        value: "To the same resource group.",
        answer: 1,
      },
      {
        value: "To the same availability zone.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "417",
    note: "",
    question: "Azure Cosmos DB is an example of a [...] offering.",
    options: [
      {
        value: "Platform as a Service (PaaS).",
        answer: 1,
      },
      {
        value: "Infrastructure as a service (IaaS).",
      },
      {
        value: "Serverless.",
      },
      {
        value: "Software as a service (SaaS).",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "418",
    note: "",
    question:
      "The Microsoft Service Trust Portal can be accessed by using a Microsoft cloud services account.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "419",
    note: "",
    question:
      "Compliance Manager can be used to track your company regulatory compliance activities related to Microsoft cloud services.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "420",
    note: "",
    question:
      "The My Library feature can be used to save Microsoft Service Trust Portal documents and resources in a single location.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "421",
    note: "",
    question:
      "Your company plans to migrate all its data and resources to Azure. The company migration plan states that only Platform as a Service (PaaS) solutions must be used in Azure. You need to deploy an Azure environment that supports the planned migration. Solution: You create an Azure App Service and Azure Storage accounts. Does this meet the goal?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "422",
    note: "",
    question:
      "Data that is stored in the Archive access tier of an Azure Storage account [can be access at any time by using azcopy.exe].",
    options: [
      {
        value: "No change is needed.",
        answer: 1,
      },
      {
        value: "Can only be read by using Azure Backup.",
      },
      {
        value: "Must be restored before the data can be accessed.",
      },
      {
        value: "Must be restored before the data can be accessed.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "423",
    note: "",
    question:
      "To implement a hybrid cloud model, a company must always migrate from a private cloud model.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "424",
    note: "",
    question:
      "A company can extend the computing resources of its internal network by using the public cloud.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "425",
    note: "",
    question:
      "Azure DevOps Services allows developers to deploy or update applications to Azure using Continuous Integration/Continuous Delivery (CI/CD) pipelines.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "426",
    note: "",
    question:
      "Azure DevOps Services includes a Git repository for developers to store code.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "427",
    note: "",
    question: "Azure DevOps Services can be used to build and host web apps.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "428",
    note: "",
    question:
      "You plan to deploy 20 virtual machines to an Azure environment. To ensure that a virtual machine named VM1 cannot connect to the other virtual machines, VM1 must [be deployed to a separate virtual network].",
    options: [
      {
        value: "No change is needed.",
        answer: 1,
      },
      {
        value:
          "Run a different operating system than the other virtual machines.",
      },
      {
        value: "Be deployed to a separate resource group.",
      },
      {
        value: "Have two network interfaces.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "429",
    note: "",
    question:
      "You plan to extend your company network to Azure. The network contains a VPN appliance that uses an IP address of 131.107.200.1. You need to create an Azure resource that identifies the VPN appliance. Which Azure resource should you create?",
    options: [
      {
        value: "Virtual networks.",
      },
      {
        value: "Load balancers.",
      },
      {
        value: "Virtual networks gateways.",
      },
      {
        value: "DNS zones.",
      },
      {
        value: "Traffic Manager profiles.",
      },
      {
        value: "Network Watcher.",
      },
      {
        value: "Virtual networks (classic).",
      },
      {
        value: "Application gateways.",
      },
      {
        value: "Local network gateways.",
        answer: 1,
      },
      {
        value: "CDN profiles.",
      },
      {
        value: "ExpressRoute circuits.",
      },
      {
        value: "Network security groups.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "430",
    note: "",
    question:
      "You have several virtual machines in an Azure subscription. You create a new subscription. [The virtual machines cannot be moved to the new subscription].",
    options: [
      {
        value: "No change is needed.",
      },
      {
        value: "The virtual machines can be moved to the new subscription.",
        answer: 1,
      },
      {
        value:
          "The virtual machines can be moved to the new subscription only if they are all in the same resource group.",
      },
      {
        value:
          "The virtual machines can be moved to the new subscription only if they run Windows Server 2016.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "431",
    note: "",
    question: "[...] is the process of verifying a user credentials.",
    options: [
      {
        value: "Authorization.",
      },
      {
        value: "Authentication.",
        answer: 1,
      },
      {
        value: "Federation.",
      },
      {
        value: "Ticketing.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "432",
    note: "",
    question:
      "If a resource group named RG1 has a delete lock, [...] can delete RG1.",
    options: [
      {
        value: "Only a member of the global administrators group.",
      },
      {
        value: "The delete lock must be removed before an administrator.",
        answer: 1,
      },
      {
        value: "An Azure policy must be modified before an administrator.",
      },
      {
        value: "An Azure tag must be added before an administrator.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "433",
    note: "",
    question:
      "A Platform as a Service (PaaS) solution that hosts web apps in Azure provides full control of the operating systems that host applications.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "434",
    note: "",
    question:
      "A Platform as a Service (PaaS) solution that hosts web apps in Azure can be provided with additional memory by changing the pricing tier.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "435",
    note: "",
    question:
      "A Platform as a Service (PaaS) solution that hosts web apps in Azure can be configured to automatically scale the number of instances based on demand.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "436",
    note: "",
    question:
      "You have an Azure environment. You need to create a new Azure virtual machine from an Android laptop. Solution: You use PowerShell in Azure Cloud Shell. Does this meet the goal?",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "437",
    note: "",
    question:
      "You plan to deploy 20 virtual machines to an Azure environment. To ensure that a virtual machine named VM1 cannot connect to the other virtual machines, VM1 must [...].",
    options: [
      {
        value: "Be deployed to a separate virtual network.",
        answer: 1,
      },
      {
        value:
          "Run a different operating system than the other virtual machines.",
      },
      {
        value: "Be deployed to a separate resource group.",
      },
      {
        value: "Have two network interfaces.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "438",
    note: "",
    question:
      "From Azure Service Health, an administrator can view the health of all the services deployed to an Azure environment and all the other services available in Azure.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "439",
    note: "",
    question: "Match the Azure Services service to the correct descriptions.",
    options: [],
    tags: [],
    comment: ``,
  },
  {
    id: "440",
    note: "",
    question:
      "[Azure policies provide] a common platform for deploying objects to a cloud infrastructure and for implementing consistency across the Azure environment.",
    options: [
      {
        value: "No change is needed.",
      },
      {
        value: "Resource groups provide.",
      },
      {
        value: "Azure Resource Manager provides.",
        answer: 1,
      },
      {
        value: "Management groups provide.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "441",
    note: "",
    question:
      "All the Azure resources deployed to a single resource group must share the same Azure region.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "442",
    note: "",
    question:
      "If you set permissions to a resource group, all the Azure resources in that resource group inherit the permissions.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "443",
    note: "",
    question:
      "If you create two Azure virtual machines that use the B2S size, each virtual machine will always generate the same monthly costs.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "444",
    note: "",
    question:
      "When an Azure virtual machine is stopped, you continue to pay storage costs associated to the virtual machine.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "445",
    note: "",
    question: "An Azure Policy initiative is a [...].",
    options: [
      {
        value: "Collection of policy definitions.",
        answer: 1,
      },
      {
        value: "Collection of Azure Policy definition assignments.",
      },
      {
        value: "Group of Azure Blueprints definitions.",
      },
      {
        value: "Group of role-based access control (RBAC) role assignments.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "446",
    note: "",
    question:
      "Your company has a Software Assurance agreement that includes Microsoft SQL Server licenses. You plan to deploy SQL Server on Azure virtual machines. What should you do to minimize licensing costs for the deployment?",
    options: [
      {
        value: "Use Azure Reservations.",
      },
      {
        value: "Use Azure Hybrid Benefit.",
        answer: 1,
      },
      {
        value: "Deallocate the virtual machines during off hours.",
      },
      {
        value: "Configure Azure Cost Management budgets.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "447",
    note: "",
    question:
      "If your company uses an Azure free account you can only deploy Azure virtual machines and Azure storage accounts.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "448",
    note: "",
    question:
      "You have an Azure environment. You need to create a new Azure virtual machine from an Android laptop. Solution: You use the Azure portal. Does this meet the goal?",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "449",
    note: "",
    question:
      "You need to create a new Azure virtual machine from an Android laptop. Solution: You use Bash in Azure Cloud Shell. Does this meet the goal?",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "450",
    note: "",
    question:
      "Which Azure service should you use to correlate events from multiple resources into a centralized repository?",
    options: [
      {
        value: "Azure Event Hubs.",
        answer: 1,
      },
      {
        value: "Azure Analysis Services.",
      },
      {
        value: "Azure Monitor.",
      },
      {
        value: "Azure Log Analytics.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "451",
    note: "",
    question:
      "When planning to migrate a public website to Azure, you must plan to [pay monthly usage costs].",
    options: [
      {
        value: "No change is needed.",
        answer: 1,
      },
      {
        value: "Deploy a VPN.",
      },
      {
        value: "Pay to transfer all the website data to Azure.",
      },
      {
        value: "Reduce the number of connections to the website.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "452",
    note: "",
    question:
      "When you are implementing a Software as a Service (SaaS) solution, you are responsible for [configuring high availability].",
    options: [
      {
        value: "No change is needed.",
      },
      {
        value: "Defining scalability rules.",
      },
      {
        value: "Installing the SaaS solution.",
      },
      {
        value: "Configuring the SaaS solution.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "453",
    note: "",
    question:
      "Azure provides flexibility between capital expenditure (CapEx) and operational expenditure (OpEx).",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "454",
    note: "",
    question:
      "Your company plans to deploy an Artificial Intelligence (AI) solution in Azure. What should the company use to build, test, and deploy predictive analytics solutions?",
    options: [
      {
        value: "Azure Logic Apps.",
      },
      {
        value: "Azure Machine Learning Designer.",
        answer: 1,
      },
      {
        value: "Azure Batch.",
      },
      {
        value: "Azure Cosmos DB.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "455",
    note: "",
    question:
      "Your company plans to purchase Azure. The company support policy states that the Azure environment must provide an option to access support engineers by phone or email. You need to recommend which support plan meets the support policy requirement. Solution: Recommend a Standard support plan. Does this meet the goal?",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "456",
    note: "",
    question:
      "You have an Azure environment that contains 10 web apps. To which URL should you connect [1] to manage all the Azure resources? https://[1].[2].com.",
    options: [
      {
        value: "admin.",
      },
      {
        value: "portal.",
        answer: 1,
      },
      {
        value: "www.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "457",
    note: "",
    question:
      "You have an Azure environment that contains 10 web apps. To which URL should you connect [2] to manage all the Azure resources? https://[1].[2].com.",
    options: [
      {
        value: "azure.",
        answer: 1,
      },
      {
        value: "azurewebsites.",
      },
      {
        value: "microsoft.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "458",
    note: "",
    question:
      "You plan to create an Azure virtual machine. You need to identify which storage service must be used to store the data disks of the virtual machine. What should you identify?",
    options: [
      {
        value: "Blobs (REST-based object storage for unstructured data).",
        answer: 1,
      },
      {
        value: "Files (File shares that use the standard rd SMB 3.0 protocol).",
      },
      {
        value: "Tables (Tabular data storage).",
      },
      {
        value: "Queues (Effectively scale apps according to traffic).",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "459",
    note: "",
    question:
      "You have an Azure environment. You need to create a new Azure virtual machine from an Android laptop. Solution: You use the PowerApps portal. Does this meet the goal?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "460",
    note: "",
    question:
      "To implement an Azure Multi-Factor Authentication (MFA) solution, you must deploy a federation solution or sync on-premises identities to the cloud.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "461",
    note: "",
    question:
      "Azure Multi-Factor Authentication (MFA) can be required for administrative and non administrative user accounts.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "462",
    note: "",
    question:
      "You need to view a list of planned maintenance events that can affect the availability of an Azure subscription. Which blade should you use from the Azure portal?",
    options: [
      {
        value: "Dashboard.",
      },
      {
        value: "All resources.",
      },
      {
        value: "Resource groups.",
      },
      {
        value: "App Services.",
      },
      {
        value: "Function Apps.",
      },
      {
        value: "SQL databases.",
      },
      {
        value: "Azure Cosmos DB.",
      },
      {
        value: "Virtual machines.",
      },
      {
        value: "Load balancers.",
      },
      {
        value: "Storage accounts.",
      },
      {
        value: "Virtual networks.",
      },
      {
        value: "Azure Active Directory.",
      },
      {
        value: "Monitor.",
      },
      {
        value: "Advisor.",
      },
      {
        value: "Security Center.",
      },
      {
        value: "Help + support.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "463",
    note: "",
    question:
      "A company can extend the capacity of its internal network by using the public cloud.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "464",
    note: "",
    question:
      "You plan to deploy several Azure virtual machines. You need to ensure that the services running on the virtual machines are available if a single data center fails. Solution: You deploy the virtual machines to two or more resource groups. Does this meet the goal?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "465",
    note: "",
    question:
      "[...] a common platform for deploying objects to a cloud infrastructure and for implementing consistency across the Azure environment.",
    options: [
      {
        value: "Azure policies provide.",
      },
      {
        value: "Resource groups provide.",
      },
      {
        value: "Azure Resource Manager templates provide.",
        answer: 1,
      },
      {
        value: "Management groups provide.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "466",
    note: "",
    question:
      "Which cloud deployment solution is used for Azure virtual machines and Azure SQL databases?",
    options: [
      {
        value: "Infrastructure as a service (laaS).",
        answer: 1,
      },
      {
        value: "Platform as a service (PaaS).",
      },
      {
        value: "Software as a service (SaaS).",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "467",
    note: "",
    question:
      "When planning to migrate a public website to Azure, you must plan to [...].",
    options: [
      {
        value: "Deploy a VPN.",
      },
      {
        value: "Pay monthly usage costs.",
        answer: 1,
      },
      {
        value: "Pay to transfer all the website data to Azure.",
      },
      {
        value: "Reduce the number of connections to the website.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "468",
    note: "",
    question: "Azure Pay-As-You-Go pricing is an example of CapEx.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "469",
    note: "",
    question: "Azure Reserved VM Instances are an example of OpEx.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "470",
    note: "",
    question: "Deploying your own datacenter is an example of CapEx.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "471",
    note: "",
    question:
      "A company can extend a private cloud by adding its physical servers to the public cloud.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "472",
    note: "",
    question:
      "To build a hybrid cloud, you must deploy resources to the public cloud.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "473",
    note: "",
    question: "A private cloud must be disconnected from the internet.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "474",
    note: "",
    question:
      "You plan to deploy several Azure virtual machines. You need to ensure that the services running on the virtual machines are available if a single data center fails. Solution: You deploy the virtual machines to a scale set. Does this meet the goal?",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "475",
    note: "",
    question:
      "You plan to deploy several Azure virtual machines. You need to ensure that the services running on the virtual machines are available if a single data center fails. Solution: You deploy the virtual machines to two or more availability zones. Does this meet the goal?",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "476",
    note: "",
    question:
      "When you are implementing a Software as a Service (SaaS) solution, you are responsible for [...].",
    options: [
      {
        value: "Configuring high availability.",
      },
      {
        value: "Defining scalability rules.",
      },
      {
        value: "Installing the Saas solution.",
      },
      {
        value: "Configuring the SaaS solution.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "477",
    note: "",
    question:
      "You plan to deploy several Azure virtual machines. You need to ensure that the services running on the virtual machines are available if a single data center fails. Solution: You deploy the virtual machines to two or more regions. Does this meet the goal?",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "478",
    note: "",
    question:
      "Azure resources can only access other resources in the same resource group.",
    options: [
      {
        value: "Yes.",
      },
      {
        value: "No.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "479",
    note: "",
    question:
      "If you delete a resource group, all the resources in the resource group will be deleted.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "480",
    note: "",
    question:
      "A resource group can contain resources from multiple Azure regions.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "481",
    note: "",
    question:
      "Data that is copied to an Azure Storage account is maintained automatically in at least three copies.",
    options: [
      {
        value: "Yes.",
        answer: 1,
      },
      {
        value: "No.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "482",
    note: "",
    question:
      "Your company has an on-premises network that contains multiple servers. The company plans to reduce the following administrative responsibilities of network administrators: Backing up application data. Replacing failed server hardware. Managing physical server security. Updating server operating systems. Managing permissions to shared documents. The company plans to migrate several servers to Azure virtual machines. You need to identify which administrative responsibilities will be eliminated after the planned migration. Which two responsibilities should you identify? Each correct answer presents a complete solution.",
    options: [
      {
        value: "Replacing failed server hardware.",
        answer: 1,
      },
      {
        value: "Backing up application data.",
      },
      {
        value: "Managing physical server security.",
        answer: 1,
      },
      {
        value: "Updating server operating systems.",
      },
      {
        value: "Managing permissions to shared documents.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "483",
    note: "",
    question:
      "Azure Cosmos DB is an example of a [Platform as a Service (PaaS)] offering.",
    options: [
      {
        value: "No change is needed.",
        answer: 1,
      },
      {
        value: "Infrastructure as a service (IaaS).",
      },
      {
        value: "Serverless.",
      },
      {
        value: "Software as a service (SaaS).",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "484",
    note: "",
    question: "[Authorization] is the process of verifying a user credentials.",
    options: [
      {
        value: "No change is needed.",
      },
      {
        value: "Authentication.",
        answer: 1,
      },
      {
        value: "Federation.",
      },
      {
        value: "Ticketing.",
      },
    ],
    tags: [],
    comment: ``,
  },
  {
    id: "485",
    note: "",
    question:
      "You plan to migrate several servers from an on-premises network to Azure. You need to identify the primary benefit of using a public cloud service for the servers. What should you identify?",
    options: [
      {
        value:
          "The public cloud is owned by the public, NOT a private corporation.",
      },
      {
        value:
          "All public cloud resources can be freely accessed by every member of the public.",
      },
      {
        value:
          "The public cloud is a crowd-sourcing solution that provides corporations with the ability to enhance the cloud.",
      },
      {
        value:
          "The public cloud is a shared entity whereby multiple corporations each use a portion of the resources in the cloud.",
        answer: 1,
      },
    ],
    tags: [],
    comment: ``,
  },
];

export default questions;
