// TEACHER EDITING FILE: Add new lessons at the TOP of the lessons array.
// Replace example entries before sharing with students. Dates use YYYY-MM-DD.
window.HUB_DATA = {
  schoolName: 'Physics Learning Hub',
  className: '5th Year Physics',
  teacherNote: 'Sample content for demonstration. Your teacher will publish real lesson updates here.',
  lessons: [
    {id:'lesson-2026-10-19', date:'2026-10-19', topic:'Mechanics', title:'Speed, velocity and acceleration', summary:'Distinguished scalar and vector quantities, interpreted motion graphs and calculated acceleration.', intentions:['Distinguish speed from velocity','Calculate acceleration using a = (v − u) / t','Interpret a velocity–time graph'], activities:['Discussed everyday examples of velocity','Worked through two acceleration calculations','Sketched velocity–time graphs'], homework:'Complete the sample acceleration worksheet questions 1–5.', due:'2026-10-22', catchup:['Read the motion notes in the topic library','Try the two worked acceleration examples','Complete the assigned questions and check any difficulties with your teacher'], resources:['motion-notes','acceleration-video'], example:true},
    {id:'lesson-2026-10-16', date:'2026-10-16', topic:'Mechanics', title:'Distance, displacement and speed', summary:'Introduced scalar and vector quantities and calculated average speed.', intentions:['Explain distance and displacement','Calculate average speed','Convert between m/s and km/h'], activities:['Measured distance travelled in a short activity','Solved speed calculations'], homework:'Review the definitions and complete three speed calculations.', due:'2026-10-19', catchup:['Review the definitions in the motion notes','Calculate speed = distance / time for three examples','Ask for the worksheet if you missed class'], resources:['motion-notes'], example:true},
    {id:'lesson-2026-10-14', date:'2026-10-14', topic:'Scientific Skills', title:'Graphing experimental data', summary:'Plotted points, chose sensible scales and determined a slope.', intentions:['Label graph axes with quantities and units','Draw a best-fit line','Calculate slope using a large triangle'], activities:['Plotted a sample dataset','Discussed anomalous results'], homework:'Complete one graph using the supplied dataset.', due:'2026-10-16', catchup:['Read the graphing guide','Plot the example data on graph paper','Calculate the slope from two points on your best-fit line'], resources:['graph-guide'], example:true}
  ],
  topics: [
    {name:'Mechanics', icon:'↗', color:'coral', description:'Motion, forces, energy and momentum.', keyIdeas:['Scalars and vectors','Speed and acceleration','Graphs of motion','Newton’s laws']},
    {name:'Waves and Light', icon:'〰', color:'sky', description:'Wave behaviour, sound and optics.', keyIdeas:['Wave properties','Reflection and refraction','Sound','Light']},
    {name:'Electricity', icon:'⚡', color:'yellow', description:'Charge, current, circuits and electrical energy.', keyIdeas:['Current and potential difference','Resistance','Circuit calculations','Electrical power']},
    {name:'Heat', icon:'☀', color:'pink', description:'Temperature, heat transfer and thermal physics.', keyIdeas:['Temperature','Specific heat capacity','Changes of state','Heat transfer']},
    {name:'Modern Physics', icon:'⚛', color:'mint', description:'Atomic, nuclear and particle physics.', keyIdeas:['Atomic structure','Radioactivity','Nuclear processes','Applications']},
    {name:'Scientific Skills', icon:'▦', color:'lavender', description:'Mathematics, graphing and experimental reasoning.', keyIdeas:['Units and conversions','Graphing','Uncertainty','Experimental design']}
  ],
  resources: [
    {id:'motion-notes', title:'Motion essentials — sample notes', topic:'Mechanics', type:'Notes', description:'Definitions, formulas and a worked example for speed and acceleration.', url:'resources/motion-essentials.html'},
    {id:'acceleration-video', title:'Acceleration explainer (external)', topic:'Mechanics', type:'Video', description:'Search for an explanation of acceleration. Replace with your preferred approved video.', url:'https://www.youtube.com/results?search_query=physics+acceleration+explained'},
    {id:'graph-guide', title:'Graphing practical data — sample guide', topic:'Scientific Skills', type:'Guide', description:'Scales, axes, best-fit lines and slope calculations.', url:'resources/graphing-guide.html'},
    {id:'practice-test', title:'Sample motion mini-test', topic:'Mechanics', type:'Test', description:'Original short practice questions; not a previous school test.', url:'resources/motion-mini-test.html'},
    {id:'investigation', title:'Investigation record template', topic:'Scientific Skills', type:'Investigation', description:'A printable structure for recording a practical investigation.', url:'resources/investigation-template.html'}
  ],
  skills: [
    {title:'Maths Toolkit', icon:'∑', color:'yellow', description:'Rearranging equations, units, scientific notation and significant figures.', tips:['Write the formula first','Substitute values with units','Check that the final answer is sensible']},
    {title:'Experimental Skills', icon:'⚗', color:'mint', description:'Variables, measurements, uncertainty, graphs and conclusions.', tips:['Identify independent and dependent variables','Repeat measurements where possible','Use evidence to support your conclusion']},
    {title:'Scientific Understanding', icon:'◉', color:'sky', description:'Build explanations using concepts, evidence and clear vocabulary.', tips:['Define the physical quantity','Connect the principle to the observation','Check units and assumptions']},
    {title:'Research Skills', icon:'⌕', color:'pink', description:'Evaluate scientific claims and record reliable sources.', tips:['Check the author and date','Distinguish evidence from opinion','Keep a record of sources']}
  ]
};
