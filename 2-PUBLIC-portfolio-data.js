// Portfolio Data Management System
// Uses localStorage for data persistence

const DEFAULT_DATA = {
    name: "RAYSHAUN MASON",
    title: "Elite Defense Systems Engineer",
    about: "Dynamic Systems Engineer with extensive experience at Lockheed Martin, excelling in Model-Based Systems Engineering and advanced diagnostics on the F-35 Joint Strike Fighter program. Proven expertise in weapon systems integration, Python automation, and requirements management with active Secret Security Clearance.",
    summary: "Elite Defense Systems Engineer with proven track record on F-35 Joint Strike Fighter program. Expert in Model-Based Systems Engineering (MBSE), weapon systems integration, and Python automation. Active Secret Security Clearance with immediate availability for classified defense programs. Demonstrated success in reducing verification time by 40% through automation and achieving 100% requirements traceability on critical weapon integration projects.",
    heroBackgrounds: [],
    contact: {
        email: "masonray0@gmail.com",
        phone: "(804) 653-2912",
        linkedin: "https://linkedin.com/in/rayshaun-mason"
    },
    education: {
        school: "Virginia State University",
        degree: "Bachelor of Applied Science in Mechanical Engineering Technology",
        graduationDate: "May 2022",
        location: "Petersburg, VA"
    },
    experiences: [
        {
            company: "Lockheed Martin Aeronautics",
            role: "Systems Engineer",
            dates: "May 2022 – Present",
            location: "Fort Worth, TX",
            clearance: true,
            responsibilities: [
                "Develop and maintain Model-Based Systems Engineering (MBSE) architectures for F-35 weapon systems using IBM Rational Rhapsody and DOORs",
                "Achieve 100% requirements traceability across weapon integration projects through rigorous verification and validation processes",
                "Reduce verification time by 40% through Python automation scripts for test result analysis and data processing",
                "Coordinate multi-site integration testing across 4 international locations ensuring seamless weapon system deployment",
                "Lead technical reviews with government customers and international partners on classified weapon integration efforts"
            ]
        },
        {
            company: "Virginia State University - Formula SAE Team",
            role: "Lead Mechanical Engineer",
            dates: "August 2019 – May 2022",
            location: "Petersburg, VA",
            clearance: false,
            responsibilities: [
                "Led team of 8 engineers in designing high-performance race car chassis achieving 15% improvement in torsional rigidity",
                "Reduced chassis weight by 8% through advanced FEA optimization and material selection",
                "Managed $25,000 project budget funded by Lockheed Martin sponsorship",
                "Passed all Formula SAE technical inspection requirements on first attempt",
                "Advanced team to competition finals through innovative design solutions"
            ]
        }
    ],
    projects: [
        {
            title: "AR-15 & AK-47 Weapons Platform Development",
            technologies: "Mechanical Design • Ballistics • Manufacturing • Testing • GD&T",
            shortDescription: "Developed complete AR-15 and AK-47 weapon platforms from scratch, demonstrating expertise in firearms technology and precision manufacturing.",
            detailedDescription: `<p style="margin-bottom: 2rem; font-size: 1.15rem;">Comprehensive weapon system development project involving complete design, fabrication, and testing of reliable firearm platforms.</p>
                <h4 style="color: var(--primary); margin: 2.5rem 0 1.5rem; font-size: 2rem; font-weight: 900;">Key Accomplishments:</h4>
                <ul style="margin-left: 2.5rem; color: var(--text-secondary); line-height: 2; font-size: 1.1rem;">
                    <li>Designed and manufactured complete barrel assemblies with button rifling</li>
                    <li>Developed custom trigger mechanisms with crisp break and minimal creep</li>
                    <li>Optimized gas system for reliable cycling across ammunition types</li>
                    <li>Conducted extensive ballistics testing and accuracy validation</li>
                    <li>Full compliance with federal firearms regulations</li>
                </ul>`,
            images: [],
            files: []
        },
        {
            title: "Monte-Carlo Rocket Trajectory Simulations",
            technologies: "Python • NumPy • Pandas • Statistical Analysis",
            shortDescription: "Developed probabilistic rocket trajectory simulations using Monte-Carlo methods to predict performance variability and mission success rates.",
            detailedDescription: `<p style="margin-bottom: 2rem; font-size: 1.15rem;">Created sophisticated simulation framework for analyzing rocket flight characteristics under various conditions and uncertainties.</p>
                <h4 style="color: var(--primary); margin: 2.5rem 0 1.5rem; font-size: 2rem; font-weight: 900;">Simulation Capabilities:</h4>
                <ul style="margin-left: 2.5rem; color: var(--text-secondary); line-height: 2; font-size: 1.1rem;">
                    <li>10,000+ trajectory simulations per analysis run for statistical confidence</li>
                    <li>Atmospheric variation modeling including wind shear, temperature gradients, and pressure variations</li>
                    <li>Propellant performance variability analysis accounting for manufacturing tolerances</li>
                    <li>Statistical confidence interval generation for mission planning</li>
                    <li>2% accuracy vs actual flight data</li>
                </ul>`,
            images: [],
            files: []
        },
        {
            title: "F-35 Weapon System Integration - MBSE",
            technologies: "Rhapsody • DOORs • Cameo • Python • MIL-STD-1760",
            shortDescription: "Led Model-Based Systems Engineering efforts for advanced weapon system integration on F-35 tactical fighter platform.",
            detailedDescription: `<p style="margin-bottom: 2rem; font-size: 1.15rem;">Managed complex system requirements and validation for cutting-edge weapon systems on the F-35 Joint Strike Fighter.</p>
                <h4 style="color: var(--primary); margin: 2.5rem 0 1.5rem; font-size: 2rem; font-weight: 900;">Technical Achievements:</h4>
                <ul style="margin-left: 2.5rem; color: var(--text-secondary); line-height: 2; font-size: 1.1rem;">
                    <li>Achieved 100% requirements traceability through DOORs</li>
                    <li>Reduced verification time by 40% through Python automation</li>
                    <li>Successfully coordinated integration testing across 4 international sites</li>
                    <li>All deliverables met or exceeded customer acceptance criteria</li>
                </ul>`,
            images: [],
            files: []
        },
        {
            title: "Formula SAE Chassis Design & Optimization",
            technologies: "SolidWorks • FEA • CAD/CAM • Welding",
            shortDescription: "Led design team in developing lightweight, high-strength race car chassis achieving 15% performance improvement for Formula SAE competition.",
            detailedDescription: `<p style="margin-bottom: 2rem; font-size: 1.15rem;">Comprehensive race car chassis development project demonstrating structural analysis, optimization, and fabrication skills.</p>
                <h4 style="color: var(--primary); margin: 2.5rem 0 1.5rem; font-size: 2rem; font-weight: 900;">Results:</h4>
                <ul style="margin-left: 2.5rem; color: var(--text-secondary); line-height: 2; font-size: 1.1rem;">
                    <li>Achieved 15% improvement in torsional rigidity while reducing weight by 8%</li>
                    <li>Passed all Formula SAE technical inspection requirements</li>
                    <li>Team advanced to competition finals</li>
                    <li>Project fully funded by Lockheed Martin</li>
                </ul>`,
            images: [],
            files: []
        }
    ],
    skills: [
        {
            category: "Technical Skills",
            icon: "⚙️",
            skills: [
                {
                    name: "Weapons Technology / Ballistics",
                    description: "Extensive hands-on experience in firearms design, ballistics analysis, and weapon systems integration. Developed complete AR-15 and AK-47 platforms from scratch, including barrel manufacturing, trigger mechanism design, and gas system optimization. Deep understanding of internal, external, and terminal ballistics. Experience with MIL-STD-1760 compliance for weapon integration on tactical fighter aircraft."
                },
                {
                    name: "Model-Based Systems Engineering (MBSE)",
                    description: "Expert in developing system architectures using MBSE methodologies. Create functional decompositions, interface definitions, and allocation of requirements to subsystems. Utilize SysML and Rhapsody for architecture modeling. Applied to F-35 weapon integration projects with 100% requirements traceability achievement."
                },
                {
                    name: "Monte-Carlo Simulations",
                    description: "Developed sophisticated probabilistic simulation models for rocket trajectory analysis using Python. Incorporate atmospheric variations, propellant inconsistencies, and manufacturing tolerances to predict performance distributions. Achieved 2% accuracy compared to actual flight data."
                },
                {
                    name: "Diagnostics and Troubleshooting",
                    description: "Achieved 95% first-time fix rate through systematic diagnostic approach. Expert in using oscilloscopes, multimeters, and OEM diagnostic tools. Experience troubleshooting F-35 avionics systems, automotive electrical systems, and complex mechanical assemblies."
                }
            ]
        },
        {
            category: "Software & Programming",
            icon: "💻",
            skills: [
                {
                    name: "Python (Pandas, NumPy)",
                    description: "Expert-level Python programming with focus on data analysis using Pandas. Developed automated verification scripts reducing test time by 40%, data processing pipelines, and simulation tools. Created Monte-Carlo simulation frameworks and automated test result analysis tools."
                },
                {
                    name: "Rhapsody",
                    description: "Advanced proficiency in IBM Rational Rhapsody for Model-Based Systems Engineering. Create state machines, sequence diagrams, and activity diagrams. Apply Rhapsody in F-35 software configuration management and system architecture development."
                },
                {
                    name: "DOORs",
                    description: "Expert in IBM Rational DOORS for requirements management on defense programs. Create requirement hierarchies, traceability matrices, and impact analysis. Achieved 100% traceability on F-35 weapon integration projects."
                },
                {
                    name: "CATIA V5",
                    description: "Professional certification in Dassault Systèmes CATIA V5, the primary CAD system for aerospace design. Used extensively in Lockheed Martin environment for F-35 component design and modification."
                }
            ]
        },
        {
            category: "Certifications & Licenses",
            icon: "🏆",
            skills: [
                {
                    name: "Secret Security Clearance",
                    description: "Active Secret Security Clearance enabling immediate contributions to classified defense programs. Extensive experience working on F-35 Joint Strike Fighter program with access to ITAR-controlled information. Ready for immediate deployment on sensitive projects."
                },
                {
                    name: "CATIA V5 Certified (August 2014)",
                    description: "Professional certification in Dassault Systèmes CATIA V5, demonstrating proficiency in advanced surface modeling, assembly design, and engineering documentation."
                },
                {
                    name: "AI Fundamentals Certified (September 2025)",
                    description: "Foundational certification covering machine learning concepts, neural networks, and AI applications in engineering. Exploring applications in predictive maintenance and autonomous systems for defense applications."
                }
            ]
        }
    ]
};

// Get portfolio data from localStorage or return default
function getPortfolioData() {
    const stored = localStorage.getItem('portfolioData');
    if (stored) {
        try {
            return JSON.parse(stored);
        } catch (e) {
            console.error('Error parsing stored data:', e);
            return DEFAULT_DATA;
        }
    }
    return DEFAULT_DATA;
}

// Save portfolio data to localStorage
function savePortfolioData(data) {
    try {
        localStorage.setItem('portfolioData', JSON.stringify(data));
        return true;
    } catch (e) {
        console.error('Error saving data:', e);
        return false;
    }
}

// Reset to default data
function resetPortfolioData() {
    localStorage.setItem('portfolioData', JSON.stringify(DEFAULT_DATA));
    return DEFAULT_DATA;
}

// Export data as JSON file
function exportPortfolioData() {
    const data = getPortfolioData();
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'portfolio-data-export.json';
    link.click();
    URL.revokeObjectURL(url);
}

// Import data from JSON file
function importPortfolioData(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                savePortfolioData(data);
                resolve(data);
            } catch (error) {
                reject(error);
            }
        };
        reader.onerror = reject;
        reader.readAsText(file);
    });
}
