import { PrismaClient } from "./generated/index.js";

const prisma = new PrismaClient();

async function main() {
    console.log("🌱 Starting database seeding...");

    // Clear existing data (in reverse order of dependencies)
    await prisma.proposalDraft.deleteMany();
    await prisma.letterOfIntent.deleteMany();
    await prisma.readinessScore.deleteMany();
    await prisma.grantOpportunity.deleteMany();
    await prisma.internalGrantSource.deleteMany();
    await prisma.organization.deleteMany();

    console.log("✅ Cleared existing data");

    // Create Organizations
    const organizations = await Promise.all([
        prisma.organization.create({
            data: {
                organizationName: "Green Earth Foundation",
                organizationWebsite: "https://greenearthfoundation.org",
                missionStatement:
                    "To protect and restore natural ecosystems while empowering local communities through sustainable environmental practices.",
                refinedMissionStatement:
                    "We work to preserve biodiversity and combat climate change through community-driven conservation initiatives.",
                corePurpose:
                    "Environmental conservation, climate action, and community empowerment",
                typeOfWork: "Environmental Conservation",
                goalsAspirations:
                    "Restore 10,000 acres of degraded land by 2030, engage 50 communities in sustainable practices",
                programs:
                    "Tree Planting Initiative, Clean Water Access Program, Renewable Energy Education",
                achievements:
                    "Planted 500,000 trees, provided clean water to 25 villages, trained 1,000 community members",
                budget: "$2,500,000 annual operating budget",
                evaluation:
                    "Track restoration metrics, conduct annual community surveys, measure carbon offset impact",
                noOfGrants: 12,
                isGrant: true,
            },
        }),
        prisma.organization.create({
            data: {
                organizationName: "Youth Education Alliance",
                organizationWebsite: "https://youtheducationalliance.org",
                missionStatement:
                    "Providing quality education and mentorship to underserved youth to unlock their full potential.",
                refinedMissionStatement:
                    "Empowering disadvantaged students through accessible education, tutoring, and career guidance.",
                corePurpose: "Education equity and youth development",
                typeOfWork: "Education & Youth Services",
                goalsAspirations:
                    "Serve 10,000 students annually, achieve 95% high school graduation rate, provide scholarships to 500 students",
                programs:
                    "After-School Tutoring, College Prep Program, STEM Education Initiative, Career Mentorship",
                achievements:
                    "Helped 2,000 students improve grades, 250 scholarship recipients, 90% college acceptance rate",
                budget: "$1,800,000 annual budget",
                evaluation:
                    "Quarterly academic assessments, college admission tracking, student satisfaction surveys",
                noOfGrants: 8,
                isGrant: true,
            },
        }),
        prisma.organization.create({
            data: {
                organizationName: "Community Health Partners",
                organizationWebsite: "https://communityhealthpartners.org",
                missionStatement:
                    "Improving health outcomes in underserved communities through accessible healthcare and preventive programs.",
                refinedMissionStatement:
                    "Bridging healthcare gaps by providing free clinics, health education, and preventive care to vulnerable populations.",
                corePurpose: "Healthcare access and health equity",
                typeOfWork: "Healthcare & Public Health",
                goalsAspirations:
                    "Open 5 new clinics, serve 15,000 patients annually, reduce preventable diseases by 30%",
                programs:
                    "Mobile Health Clinic, Diabetes Prevention Program, Mental Health Services, Nutrition Education",
                achievements:
                    "Served 8,000 patients, conducted 500 health screenings, provided mental health support to 1,200 individuals",
                budget: "$3,200,000 annual operating budget",
                evaluation:
                    "Patient outcome tracking, disease prevention metrics, community health surveys",
                noOfGrants: 15,
                isGrant: true,
            },
        }),
        prisma.organization.create({
            data: {
                organizationName: "Arts for All Initiative",
                organizationWebsite: "https://artsforall.org",
                missionStatement:
                    "Making arts education and cultural experiences accessible to all communities regardless of economic status.",
                refinedMissionStatement:
                    "Fostering creativity and cultural appreciation through free arts programs and community workshops.",
                corePurpose: "Arts education and cultural enrichment",
                typeOfWork: "Arts & Culture",
                goalsAspirations:
                    "Reach 5,000 participants annually, establish 10 community art centers, host 50 cultural events per year",
                programs:
                    "Youth Art Classes, Community Theater, Music Education, Public Art Installations",
                achievements:
                    "Taught 3,000 students, produced 12 community plays, created 25 public art pieces",
                budget: "$950,000 annual budget",
                evaluation:
                    "Participation tracking, artist development metrics, community engagement surveys",
                noOfGrants: 6,
                isGrant: false,
            },
        }),
    ]);

    console.log(`✅ Created ${organizations.length} organizations`);

    // Create Internal Grant Sources
    const internalSources = await Promise.all([
        prisma.internalGrantSource.create({
            data: {
                organizationId: organizations[0].id,
                opportunityText:
                    "The Environmental Protection Agency announces $5M in grants for community-based environmental restoration projects. Deadline: March 15, 2025.",
                opportunityUrl: "https://epa.gov/grants/environmental-restoration-2025",
                opportunityPdf: "https://epa.gov/files/restoration-rfp-2025.pdf",
            },
        }),
        prisma.internalGrantSource.create({
            data: {
                organizationId: organizations[1].id,
                opportunityText:
                    "Department of Education STEM Grant Program offering up to $500K for innovative STEM education initiatives in underserved communities.",
                opportunityUrl: "https://ed.gov/stem-grants-2025",
                opportunityPdf: null,
            },
        }),
        prisma.internalGrantSource.create({
            data: {
                organizationId: organizations[2].id,
                opportunityText:
                    "Health Resources and Services Administration community health center expansion funding, up to $1M per applicant.",
                opportunityUrl: "https://hrsa.gov/grants/community-health-2025",
                opportunityPdf: "https://hrsa.gov/files/chc-expansion-guidelines.pdf",
            },
        }),
    ]);

    console.log(`✅ Created ${internalSources.length} internal grant sources`);

    // Create Grant Opportunities
    const grants = await Promise.all([
        // Environmental grants
        prisma.grantOpportunity.create({
            data: {
                organizationId: organizations[0].id,
                funderName: "National Environmental Foundation",
                focusArea: "Climate Change & Conservation",
                deadline: new Date("2025-03-15"),
                amountUsd: 250000,
                eligibility: "501(c)(3) organizations with 3+ years of environmental work",
                attachmentsRequired:
                    "Budget, Timeline, Letters of Support, Environmental Impact Assessment",
                applicationFormat: "Online application via foundation portal",
                funderProfileUrl: "https://nef.org/about",
                recipGsProfileLink: "https://grantsource.com/nef",
                source: "foundation",
                internalSourceId: internalSources[0].id,
                grantType: "private",
            },
        }),
        prisma.grantOpportunity.create({
            data: {
                organizationId: organizations[0].id,
                funderName: "Green Planet Fund",
                focusArea: "Reforestation & Biodiversity",
                deadline: new Date("2025-04-30"),
                amountUsd: 500000,
                eligibility:
                    "Organizations working on reforestation projects in developing regions",
                attachmentsRequired: "Project Proposal, Financial Statements, Site Assessment",
                applicationFormat: "PDF submission via email",
                funderProfileUrl: "https://greenplanetfund.org",
                recipGsProfileLink: null,
                source: "foundation",
                internalSourceId: null,
                grantType: "private",
            },
        }),
        // Education grants
        prisma.grantOpportunity.create({
            data: {
                organizationId: organizations[1].id,
                funderName: "Department of Education",
                focusArea: "STEM Education & College Readiness",
                deadline: new Date("2025-05-01"),
                amountUsd: 500000,
                eligibility: "Educational nonprofits serving low-income students",
                attachmentsRequired:
                    "Program Plan, Budget Justification, Student Demographics, Evaluation Plan",
                applicationFormat: "Grants.gov application",
                funderProfileUrl: "https://ed.gov",
                recipGsProfileLink: "https://grants.gov/ed-stem-2025",
                source: "grants.gov",
                internalSourceId: internalSources[1].id,
                grantType: "govt",
            },
        }),
        prisma.grantOpportunity.create({
            data: {
                organizationId: organizations[1].id,
                funderName: "Tech Education Foundation",
                focusArea: "Digital Literacy & Computer Science",
                deadline: new Date("2025-06-15"),
                amountUsd: 150000,
                eligibility: "Youth-serving organizations with technology programs",
                attachmentsRequired: "Program Description, Budget, Impact Metrics",
                applicationFormat: "Online form submission",
                funderProfileUrl: "https://techedfoundation.org",
                recipGsProfileLink: null,
                source: "foundation",
                internalSourceId: null,
                grantType: "private",
            },
        }),
        // Healthcare grants
        prisma.grantOpportunity.create({
            data: {
                organizationId: organizations[2].id,
                funderName: "Health Resources and Services Administration",
                focusArea: "Community Health & Primary Care",
                deadline: new Date("2025-04-01"),
                amountUsd: 1000000,
                eligibility: "FQHCs and community health centers serving underserved populations",
                attachmentsRequired:
                    "Needs Assessment, Budget, Staffing Plan, Service Area Map, Board Composition",
                applicationFormat: "Electronic submission via HRSA portal",
                funderProfileUrl: "https://hrsa.gov",
                recipGsProfileLink: "https://grants.gov/hrsa-chc-2025",
                source: "grants.gov",
                internalSourceId: internalSources[2].id,
                grantType: "govt",
            },
        }),
        prisma.grantOpportunity.create({
            data: {
                organizationId: organizations[2].id,
                funderName: "Kaiser Permanente Community Fund",
                focusArea: "Mental Health & Preventive Care",
                deadline: new Date("2025-07-31"),
                amountUsd: 300000,
                eligibility: "Healthcare nonprofits in Kaiser service areas",
                attachmentsRequired: "Project Narrative, Budget, Organizational Information",
                applicationFormat: "Online application system",
                funderProfileUrl: "https://kp.org/community",
                recipGsProfileLink: null,
                source: "corporate",
                internalSourceId: null,
                grantType: "corporate",
            },
        }),
        // Arts grants
        prisma.grantOpportunity.create({
            data: {
                organizationId: organizations[3].id,
                funderName: "National Endowment for the Arts",
                focusArea: "Community Arts & Cultural Programs",
                deadline: new Date("2025-02-28"),
                amountUsd: 100000,
                eligibility: "Arts organizations with community engagement focus",
                attachmentsRequired: "Project Description, Work Samples, Budget, Support Letters",
                applicationFormat: "Grants.gov submission",
                funderProfileUrl: "https://arts.gov",
                recipGsProfileLink: "https://grants.gov/nea-community-arts",
                source: "grants.gov",
                internalSourceId: null,
                grantType: "govt",
            },
        }),
        prisma.grantOpportunity.create({
            data: {
                organizationId: organizations[3].id,
                funderName: "Community Arts Foundation",
                focusArea: "Youth Arts Education",
                deadline: new Date("2025-08-15"),
                amountUsd: 75000,
                eligibility: "Nonprofits providing arts education to underserved youth",
                attachmentsRequired: "Program Plan, Budget, Student Demographics",
                applicationFormat: "Email submission",
                funderProfileUrl: "https://communityartsfoundation.org",
                recipGsProfileLink: null,
                source: "foundation",
                internalSourceId: null,
                grantType: "private",
            },
        }),
    ]);

    console.log(`✅ Created ${grants.length} grant opportunities`);

    // Create Readiness Scores
    const readinessScores = await Promise.all([
        prisma.readinessScore.create({
            data: {
                organizationId: organizations[0].id,
                grantId: grants[0].id,
                readinessScore: 87,
                strengths:
                    "Strong track record in environmental conservation, clear measurable outcomes, excellent community partnerships, robust evaluation framework",
                improvementAreas:
                    "Budget narrative could be more detailed, need stronger letters of support from government agencies",
            },
        }),
        prisma.readinessScore.create({
            data: {
                organizationId: organizations[0].id,
                grantId: grants[1].id,
                readinessScore: 92,
                strengths:
                    "Perfect alignment with funder priorities, extensive experience in reforestation, strong financial management, demonstrated impact",
                improvementAreas:
                    "Consider adding more specific biodiversity metrics to evaluation plan",
            },
        }),
        prisma.readinessScore.create({
            data: {
                organizationId: organizations[1].id,
                grantId: grants[2].id,
                readinessScore: 78,
                strengths:
                    "Good student outcome data, experienced team, clear program design, strong community need",
                improvementAreas:
                    "Need more detailed STEM curriculum plan, budget justification needs work, require additional evaluation metrics",
            },
        }),
        prisma.readinessScore.create({
            data: {
                organizationId: organizations[1].id,
                grantId: grants[3].id,
                readinessScore: 85,
                strengths:
                    "Excellent technology infrastructure, proven track record with similar grants, strong partnerships with schools",
                improvementAreas:
                    "Could strengthen sustainability plan, need more diverse funding sources documented",
            },
        }),
        prisma.readinessScore.create({
            data: {
                organizationId: organizations[2].id,
                grantId: grants[4].id,
                readinessScore: 94,
                strengths:
                    "Exceptional patient outcome data, comprehensive service model, strong board governance, excellent needs assessment, clear service area definition",
                improvementAreas: "Minor improvements needed in staffing recruitment plan",
            },
        }),
        prisma.readinessScore.create({
            data: {
                organizationId: organizations[2].id,
                grantId: grants[5].id,
                readinessScore: 89,
                strengths:
                    "Strong mental health program model, good preventive care approach, experienced clinical staff",
                improvementAreas:
                    "Need to strengthen evaluation methodology, add more community engagement data",
            },
        }),
        prisma.readinessScore.create({
            data: {
                organizationId: organizations[3].id,
                grantId: grants[6].id,
                readinessScore: 72,
                strengths:
                    "Creative programming, good community relationships, passionate staff and volunteers",
                improvementAreas:
                    "Need stronger evaluation framework, limited organizational capacity, budget lacks detail, work samples need improvement",
            },
        }),
        prisma.readinessScore.create({
            data: {
                organizationId: organizations[3].id,
                grantId: grants[7].id,
                readinessScore: 81,
                strengths:
                    "Excellent youth engagement model, strong program design, good demographic data, clear outcomes",
                improvementAreas:
                    "Budget could be more comprehensive, need more documentation of past program success",
            },
        }),
    ]);

    console.log(`✅ Created ${readinessScores.length} readiness scores`);

    // Create Letters of Intent
    const lois = await Promise.all([
        prisma.letterOfIntent.create({
            data: {
                organizationId: organizations[0].id,
                grantId: grants[0].id,
                introduction:
                    "Dear National Environmental Foundation Review Committee,\n\nGreen Earth Foundation respectfully submits this Letter of Intent for the Climate Change & Conservation grant program. With over 15 years of proven success in environmental restoration, we seek $250,000 to expand our community-based reforestation initiative.",
                organizationalSummary:
                    "Green Earth Foundation is a leading environmental nonprofit that has successfully restored over 5,000 acres of degraded land and planted 500,000 trees. Our integrated approach combines scientific conservation methods with community empowerment, ensuring long-term sustainability of our restoration efforts.",
                projectOverview:
                    "Our proposed project will restore 1,000 acres of critical watershed habitat while engaging 10 rural communities in sustainable land management practices. The project includes native tree planting, soil restoration, water conservation infrastructure, and comprehensive community training programs.",
                fundingRequest: 250000,
                closingStatement:
                    "We believe this project aligns perfectly with your foundation's mission to combat climate change through community-driven solutions. We look forward to discussing how our partnership can create lasting environmental and social impact. Thank you for your consideration.",
            },
        }),
        prisma.letterOfIntent.create({
            data: {
                organizationId: organizations[1].id,
                grantId: grants[2].id,
                introduction:
                    "Dear Department of Education Grant Review Team,\n\nYouth Education Alliance is pleased to submit this Letter of Intent for the STEM Education & College Readiness program. Our request for $500,000 will enable us to expand our proven STEM initiative to serve 2,000 additional underserved students.",
                organizationalSummary:
                    "Youth Education Alliance has served over 5,000 students in the past five years, achieving a 90% college acceptance rate among our participants. Our comprehensive approach combines rigorous academic support, hands-on STEM activities, and individualized college guidance.",
                projectOverview:
                    "This project will establish STEM learning labs in 8 underserved schools, provide intensive after-school programming, offer summer STEM camps, and deliver college application support. Students will engage in robotics, coding, environmental science, and engineering design challenges while receiving mentorship from STEM professionals.",
                fundingRequest: 500000,
                closingStatement:
                    "This funding will enable us to bridge the STEM opportunity gap and prepare the next generation of diverse scientists, engineers, and innovators. We appreciate your consideration and commitment to educational equity.",
            },
        }),
        prisma.letterOfIntent.create({
            data: {
                organizationId: organizations[2].id,
                grantId: grants[4].id,
                introduction:
                    "Dear HRSA Review Committee,\n\nCommunity Health Partners submits this Letter of Intent requesting $1,000,000 to expand our community health center services to reach an additional 5,000 underserved patients annually.",
                organizationalSummary:
                    "As a federally qualified health center serving medically underserved areas for 12 years, Community Health Partners has provided comprehensive primary care, mental health services, and preventive care to over 30,000 patients. Our patient-centered medical home model has demonstrated significant improvements in health outcomes and reduced emergency department utilization.",
                projectOverview:
                    "The proposed expansion will add two new service delivery sites, hire 15 additional clinical staff, enhance our mental health services, and implement a robust diabetes prevention program. We will expand hours of operation to include evening and weekend availability, addressing a critical access barrier in our community.",
                fundingRequest: 1000000,
                closingStatement:
                    "This expansion is urgently needed to address growing demand for primary care services in our community. We are committed to improving health equity and look forward to partnering with HRSA to achieve these goals.",
            },
        }),
    ]);

    console.log(`✅ Created ${lois.length} letters of intent`);

    // Create Proposal Drafts
    const proposals = await Promise.all([
        prisma.proposalDraft.create({
            data: {
                organizationId: organizations[0].id,
                grantId: grants[1].id,
                executiveSummary:
                    "Green Earth Foundation seeks $500,000 from the Green Planet Fund to implement a comprehensive reforestation and biodiversity restoration project spanning 2,000 acres across three critical ecosystems. This two-year initiative will plant 100,000 native trees, restore degraded habitats, and engage 15 local communities in sustainable land management practices, directly contributing to climate change mitigation and biodiversity conservation.",
                introductionToOrganization:
                    "Founded in 2008, Green Earth Foundation has emerged as a leader in community-based environmental conservation. Our integrated approach combines scientific expertise with community empowerment, ensuring sustainable and lasting environmental impact. To date, we have restored over 5,000 acres, planted 500,000 trees, and trained 1,000 community members in sustainable practices. Our work has resulted in measurable improvements in water quality, soil health, and local biodiversity while providing economic opportunities for rural communities.",
                problemStatement:
                    "The target regions face severe environmental degradation due to deforestation, unsustainable agricultural practices, and climate change impacts. Over 10,000 acres of forest have been lost in the past decade, leading to soil erosion, water scarcity, loss of biodiversity, and reduced carbon sequestration capacity. Local communities, many living below the poverty line, lack resources and knowledge to implement sustainable land management practices. Without intervention, this degradation will accelerate, further threatening both environmental stability and community livelihoods.",
                goalsAndObjectives:
                    "Goal: Restore degraded ecosystems and build community capacity for sustainable environmental stewardship.\n\nObjectives:\n1. Plant 100,000 native trees across 2,000 acres of degraded land\n2. Restore soil health and water retention capacity in project areas\n3. Train 500 community members in sustainable forestry and land management\n4. Establish 15 community-managed tree nurseries\n5. Sequester 50,000 tons of CO2 over the project lifetime\n6. Increase local biodiversity by 40% in restored areas\n7. Create 50 green jobs for local community members",
                methodsAndActivities:
                    "Phase 1 (Months 1-3): Conduct detailed site assessments, engage community stakeholders, establish nurseries\nPhase 2 (Months 4-12): Begin large-scale planting, implement soil restoration techniques, conduct training workshops\nPhase 3 (Months 13-18): Continued planting and maintenance, establish water conservation infrastructure\nPhase 4 (Months 19-24): Monitor restoration progress, build long-term community management capacity, document lessons learned\n\nKey activities include native species propagation, participatory planting events, agroforestry training, water harvesting system installation, and community leadership development.",
                evaluationPlan:
                    "We will employ a comprehensive mixed-methods evaluation approach:\n\nQuantitative Metrics:\n- Number of trees planted and survival rates (target: 85% survival)\n- Acres restored and soil quality improvements\n- Carbon sequestration measured via established protocols\n- Biodiversity assessments using standardized species counts\n- Water retention and quality measurements\n- Number of community members trained and employed\n\nQualitative Assessment:\n- Community satisfaction surveys\n- Focus groups with participants\n- Case studies of community transformation\n- Documentation of traditional ecological knowledge integration\n\nEvaluation will be conducted quarterly by internal staff and validated through annual third-party assessments.",
                sustainabilityPlan:
                    "Long-term sustainability is built into our project design:\n\n1. Community Ownership: All restoration sites will be managed by trained community committees\n2. Economic Incentives: Agroforestry approaches provide ongoing income through sustainable harvesting\n3. Local Capacity: 500 trained community members will continue restoration beyond project period\n4. Infrastructure: 15 community nurseries will generate ongoing revenue through seedling sales\n5. Policy Integration: Working with local governments to integrate practices into land use policies\n6. Funding Diversification: Developing carbon credit and ecotourism revenue streams\n7. Partnership Network: Establishing partnerships with local universities for ongoing technical support",
                budgetSummary:
                    "Total Project Budget: $500,000\n\nPersonnel (35%): $175,000\n- Project Director, Restoration Specialists, Community Coordinators\n\nDirect Program Costs (50%): $250,000\n- Seedlings and planting materials: $80,000\n- Site preparation and maintenance: $60,000\n- Water conservation infrastructure: $40,000\n- Training materials and workshops: $35,000\n- Monitoring equipment: $25,000\n- Community incentives: $10,000\n\nAdministrative & Indirect (10%): $50,000\n\nEvaluation (5%): $25,000\n\nThe budget reflects careful planning to maximize direct program impact while ensuring proper project management and rigorous evaluation.",
                conclusion:
                    "This project represents a critical opportunity to reverse environmental degradation while empowering communities to become environmental stewards. Our proven track record, scientific approach, and deep community relationships position us uniquely to deliver the transformational impact envisioned by the Green Planet Fund. The restoration of 2,000 acres will create a ripple effect, demonstrating sustainable models that can be replicated across the region. We are committed to transparent partnership and look forward to working with the Green Planet Fund to create lasting environmental and social value.",
                downloadStatus: true,
            },
        }),
        prisma.proposalDraft.create({
            data: {
                organizationId: organizations[1].id,
                grantId: grants[2].id,
                executiveSummary:
                    "Youth Education Alliance requests $500,000 to launch the 'STEM Futures Initiative,' a comprehensive program that will provide rigorous STEM education, college preparation, and career mentorship to 2,000 underserved students over three years. By establishing STEM learning labs, intensive after-school programming, and industry partnerships, we will prepare diverse students for STEM careers and higher education success.",
                introductionToOrganization:
                    "Since 2015, Youth Education Alliance has been closing the opportunity gap for low-income students through innovative educational programming. We have served over 5,000 students, achieving a 90% college acceptance rate compared to a 45% district average. Our holistic approach addresses academic, social, and economic barriers to success. Our programs are delivered by experienced educators and supported by strong partnerships with schools, universities, and employers.",
                problemStatement:
                    "Students in our service area face significant barriers to STEM education and careers. Their schools lack adequate STEM resources, with student-to-computer ratios of 8:1 and minimal laboratory equipment. Only 15% of students meet state science standards, compared to 62% statewide. Additionally, students have limited exposure to STEM careers and lack the academic preparation for college-level STEM coursework. Without intervention, these students will remain underrepresented in high-growth STEM fields, perpetuating economic inequality.",
                goalsAndObjectives:
                    "Goal: Increase STEM literacy, college readiness, and career preparation among underserved students.\n\nObjectives:\n1. Serve 2,000 students with intensive STEM programming over three years\n2. Improve science proficiency by 40% among participants\n3. Achieve 85% college acceptance rate with focus on STEM majors\n4. Provide 500 students with STEM career mentorship experiences\n5. Establish 8 school-based STEM learning labs\n6. Partner with 20 STEM employers for internship opportunities\n7. Award 50 STEM scholarships to program graduates",
                goalsAndObjectives:
                    "Goal: Increase STEM literacy, college readiness, and career preparation among underserved students.\n\nObjectives:\n1. Serve 2,000 students with intensive STEM programming over three years\n2. Improve science proficiency by 40% among participants\n3. Achieve 85% college acceptance rate with focus on STEM majors\n4. Provide 500 students with STEM career mentorship experiences\n5. Establish 8 school-based STEM learning labs\n6. Partner with 20 STEM employers for internship opportunities\n7. Award 50 STEM scholarships to program graduates",
                methodsAndActivities:
                    "Year 1: Establish STEM labs in 4 schools, recruit 600 students, launch after-school programming\nYear 2: Expand to 4 additional schools, serve 800 students, implement summer STEM camps\nYear 3: Serve 600 students, focus on college preparation and career placement\n\nCore Activities:\n- After-school STEM clubs (3x per week): Robotics, coding, environmental science, engineering design\n- Saturday STEM workshops: Deep dives into specific topics with hands-on projects\n- Summer STEM camps: Intensive 4-week residential programs at partner universities\n- College prep support: SAT/ACT prep, college essays, financial aid guidance\n- Career mentorship: Job shadowing, internships, industry speaker series\n- Parent engagement: Workshops on supporting STEM education and college preparation",
                evaluationPlan:
                    "Comprehensive evaluation will track student outcomes across academic, social-emotional, and career domains:\n\nAcademic Outcomes:\n- State science assessment scores\n- Math and science course grades\n- Advanced coursework enrollment (AP/IB)\n- College acceptance and enrollment rates\n- STEM major selection\n\nProgram Engagement:\n- Attendance rates\n- Program completion rates\n- Student satisfaction surveys\n- Parent engagement metrics\n\nCareer Development:\n- STEM career interest assessments\n- Internship participation\n- Industry certification completion\n- Post-secondary persistence in STEM\n\nData will be collected quarterly using our student tracking system. An external evaluator will conduct annual comprehensive assessments and prepare reports for the funder.",
                sustainabilityPlan:
                    "Sustainability is ensured through multiple strategies:\n\n1. School Integration: STEM labs become permanent school resources maintained by districts\n2. Teacher Training: School teachers trained to continue programs independently\n3. Funding Diversification: Developing corporate partnerships and individual donors\n4. Earned Revenue: Fee-for-service summer camps for middle-income families subsidize programming\n5. Alumni Network: Graduates serve as mentors and fundraisers\n6. Policy Advocacy: Working to secure district funding for STEM programming\n7. Scalable Model: Documenting best practices for replication by other organizations\n\nBy year three, we project that 60% of program costs will be covered by non-grant revenue.",
                budgetSummary:
                    "Total Three-Year Budget: $500,000\n\nPersonnel (60%): $300,000\n- Program Director, STEM Instructors, College Counselors, Career Coordinator\n\nProgram Delivery (25%): $125,000\n- STEM lab equipment and supplies\n- Curriculum materials\n- Summer camp costs\n- Transportation\n- Student incentives and scholarships\n\nPartnerships & Engagement (8%): $40,000\n- Employer partnership development\n- Parent engagement activities\n- Field trips and industry visits\n\nEvaluation (5%): $25,000\n- External evaluator\n- Assessment tools\n- Data management\n\nAdministrative (2%): $10,000",
                conclusion:
                    "The STEM Futures Initiative will transform educational and career opportunities for 2,000 underserved students, preparing them to succeed in the innovation economy. Our proven model, experienced team, and strong partnerships position us to deliver exceptional outcomes. We are excited to partner with the Department of Education to advance STEM equity and build a diverse pipeline of future scientists, engineers, and technology leaders.",
                downloadStatus: false,
            },
        }),
        prisma.proposalDraft.create({
            data: {
                organizationId: organizations[2].id,
                grantId: grants[5].id,
                executiveSummary:
                    "Community Health Partners seeks $300,000 from the Kaiser Permanente Community Fund to expand mental health services and preventive care programming for underserved populations. This project will serve an additional 3,000 patients annually through enhanced counseling services, integrated behavioral health, and evidence-based chronic disease prevention programs.",
                introductionToOrganization:
                    "Community Health Partners is a federally qualified health center providing comprehensive healthcare to medically underserved populations for over 12 years. We serve 8,000 patients annually with primary care, dental care, mental health services, and health education. Our patient-centered medical home model has achieved recognition for quality outcomes, with 92% of diabetic patients achieving controlled blood sugar and 50% reduction in emergency department use among our regular patients.",
                problemStatement:
                    "Our service area faces a severe shortage of mental health providers and preventive care resources. Wait times for mental health appointments exceed 8 weeks, and 35% of our patients have untreated depression or anxiety. Additionally, chronic disease rates are alarming: 45% of adults are obese, 25% have uncontrolled diabetes, and 40% have hypertension. These conditions disproportionately affect low-income communities and contribute to significant health disparities. Without expanded services, these preventable conditions will continue to cause suffering and premature death.",
                goalsAndObjectives:
                    "Goal: Improve mental health and prevent chronic disease in underserved populations.\n\nObjectives:\n1. Provide mental health services to 1,000 additional patients annually\n2. Reduce mental health appointment wait times from 8 weeks to 2 weeks\n3. Screen 100% of patients for depression, anxiety, and substance use\n4. Enroll 500 high-risk patients in diabetes prevention program\n5. Achieve 60% weight reduction among diabetes prevention participants\n6. Reduce A1C levels by average of 1.5 points among diabetic patients\n7. Train 20 staff in trauma-informed care and motivational interviewing",
                methodsAndActivities:
                    "Mental Health Expansion:\n- Hire 2 licensed clinical social workers and 1 psychiatrist\n- Implement integrated behavioral health model with warm handoffs\n- Offer individual counseling, group therapy, and psychiatric medication management\n- Provide trauma-informed care training for all staff\n- Establish peer support groups for common mental health conditions\n\nDiabetes Prevention Program:\n- Deliver CDC-recognized Diabetes Prevention Program (DPP)\n- Offer year-long program with 22 group sessions\n- Provide nutrition education, physical activity support, and behavior change coaching\n- Conduct cooking demonstrations and grocery store tours\n- Monitor participant weight, A1C, and behavioral changes\n- Create supportive environment through peer accountability\n\nIntegrated Care Approach:\n- Screen all patients for behavioral health and chronic disease risk\n- Use electronic health record to coordinate care across providers\n- Conduct care team huddles to discuss complex patients\n- Provide community health worker support for care coordination",
                evaluationPlan:
                    "Evaluation will assess both process and outcome measures:\n\nMental Health Metrics:\n- Number of patients served and visits provided\n- Wait times for appointments\n- Depression (PHQ-9) and anxiety (GAD-7) scores\n- Patient satisfaction with mental health services\n- Medication adherence rates\n- Functional improvement measures\n\nDiabetes Prevention Metrics:\n- Program enrollment and completion rates\n- Average weight loss among participants\n- Percentage achieving 5% weight reduction goal\n- A1C reductions among pre-diabetic patients\n- Physical activity levels\n- Diet quality scores\n\nIntegrated Care Metrics:\n- Percentage of patients screened for behavioral health\n- Warm handoff completion rates\n- Primary care visit attendance\n- Emergency department and hospitalization rates\n\nQuarterly reports will be submitted to Kaiser Permanente, with comprehensive annual evaluation conducted by our quality improvement department.",
                sustainabilityPlan:
                    "This project builds sustainable capacity through:\n\n1. Billable Services: Mental health services generate Medicaid reimbursement covering 70% of costs\n2. Value-Based Payments: DPP program eligible for outcomes-based payments from insurers\n3. Workforce Development: Training staff creates permanent organizational capacity\n4. Infrastructure Integration: Services embedded in existing clinic operations\n5. Community Partnerships: Collaborating with community organizations for long-term support\n6. Demonstrated Impact: Strong outcomes will attract future funding from diverse sources\n7. Advocacy: Using data to advocate for increased mental health and prevention funding\n\nBy year three, we project 75% of program costs will be covered through patient revenue and value-based contracts.",
                budgetSummary:
                    "Total Project Budget: $300,000\n\nPersonnel (70%): $210,000\n- 2 Licensed Clinical Social Workers: $140,000\n- 1 Part-time Psychiatrist: $50,000\n- Diabetes Prevention Program Coordinator: $20,000\n\nProgram Costs (20%): $60,000\n- DPP curriculum and materials: $15,000\n- Mental health assessment tools: $5,000\n- Staff training: $10,000\n- Patient education materials: $8,000\n- Incentives for program completion: $12,000\n- Food for cooking demonstrations: $10,000\n\nEvaluation (5%): $15,000\n- Data analysis and reporting\n- Patient surveys\n- Quality improvement activities\n\nAdministrative (5%): $15,000",
                conclusion:
                    "This project addresses critical gaps in mental health and preventive care services for vulnerable populations. By integrating evidence-based programs into our comprehensive care model, we will improve health outcomes and reduce health disparities. Community Health Partners has demonstrated strong quality and financial stewardship, making us an excellent partner for Kaiser Permanente's community health mission. Together, we can create healthier, more resilient communities.",
                downloadStatus: false,
            },
        }),
    ]);

    console.log(`✅ Created ${proposals.length} proposal drafts`);

    // Summary
    console.log("\n🎉 Database seeding completed successfully!");
    console.log("\n📊 Summary:");
    console.log(`   Organizations: ${organizations.length}`);
    console.log(`   Internal Grant Sources: ${internalSources.length}`);
    console.log(`   Grant Opportunities: ${grants.length}`);
    console.log(`   Readiness Scores: ${readinessScores.length}`);
    console.log(`   Letters of Intent: ${lois.length}`);
    console.log(`   Proposal Drafts: ${proposals.length}`);
    console.log("\n✨ Your database is now populated with realistic test data!");
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error("❌ Error during seeding:", e);
        await prisma.$disconnect();
        process.exit(1);
    });
