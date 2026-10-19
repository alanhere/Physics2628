/* Skills Centre: independent, offline-friendly practice. No student data is transmitted. */
(()=>{'use strict';
const modules=[
 {id:'maths',name:'Maths Toolkit',subtitle:'Equations, units, scientific notation and slopes',icon:'∑',items:[
 ['Rearranging equations','For F = ma, divide both sides by a to make m the subject.','F = ma. Make m the subject.',['m = F/a','m = Fa','m = a/F'],0,'Divide both sides of F = ma by a.'],
 ['Converting units','To convert kilometres per hour to metres per second, divide by 3.6.','Convert 72 km/h to m/s.',['20 m/s','259.2 m/s','25.9 m/s'],0,'72 ÷ 3.6 = 20 m/s.'],
 ['Scientific notation','Move the decimal point and count powers of ten.','Express 0.00045 in standard form.',['4.5 × 10⁻⁴','45 × 10⁻⁴','4.5 × 10⁴'],0,'The decimal moves four places to the right: 4.5 × 10⁻⁴.'],
 ['Significant figures','Zeros before the first non-zero digit do not count.','Round 0.004786 to 2 significant figures.',['0.0048','0.0047','0.005'],0,'The first two significant digits are 4 and 7; the next digit is 8, so round up.']
 ]},
 {id:'experimental',name:'Experimental Skills',subtitle:'Variables, slopes, measurement, uncertainty and PEER conclusions',icon:'⚗',items:[
 ['Identifying variables','Change one independent variable, measure the dependent variable, and keep other relevant factors constant.','You change the force on a trolley and measure its acceleration. What is the independent variable?',['Applied force','Acceleration','Mass of the trolley'],0,'Applied force is deliberately changed; acceleration is measured.'],
 ['Calculating a slope','Slope = change in y ÷ change in x. Use two widely separated points on a best-fit line.','A straight-line graph passes through (2, 4) and (6, 12). What is its slope?',['2','4','8'],0,'(12 − 4) ÷ (6 − 2) = 8 ÷ 4 = 2.'],
 ['Uncertainty','For repeated measurements, the spread gives useful information about precision.','Three time measurements are 2.1 s, 2.2 s and 2.3 s. What is the mean?',['2.2 s','2.3 s','6.6 s'],0,'(2.1 + 2.2 + 2.3) ÷ 3 = 2.2 s.'],
 ['Best-fit lines','A best-fit line represents the overall trend; it need not pass through every point.','One plotted point lies far from an otherwise linear trend. What should you do?',['Investigate and repeat the measurement','Delete it without comment','Force the line through it'],0,'Check for a measurement or recording error and repeat where possible.'],
 ['PEER — Point','P — Point: State what you found clearly, including the measured value.','A spring experiment gives a spring constant of 20 N/m. Which is the best Point?',['The measured spring constant was 20 N/m.','The results were good.','The spring stretched.'],0,'The Point states the measured finding with its value and unit.'],
 ['PEER — Evidence','E — Evidence: Cite specific measurements and calculate percentage differences where appropriate. Percentage difference from a reference value = |measured − reference| ÷ |reference| × 100%.','Your measured spring constant is 20 N/m and the reference value is 21 N/m. What is the percentage difference (to 1 decimal place)?',['4.8%','1.0%','21%'],0,'|20 − 21| ÷ 21 × 100% = 4.8%. Include both values and the percentage difference in your evidence.'],
 ['PEER — Explanation','E — Explanation: Use Detail + Why. Describe the observed relationship (detail), then explain why it occurs using the relevant physics principle.','Which explanation best connects the data to physics?',['Doubling the force doubled the extension because Hooke’s law predicts extension is proportional to force within the elastic limit.','The line looks straight so the experiment worked.','The extension changed because physics happened.'],0,'A good explanation gives the specific pattern (Detail) and connects it to a named physical principle (Why).'],
 ['PEER — Reflection','R — Reflection: Suggest a realistic improvement and explain how it affects the validity of your conclusion.','The spring readings fluctuated due to oscillation. Which is the best Reflection?',['Allow the spring to settle before reading and repeat measurements; this reduces random variation and strengthens confidence in the conclusion.','The experiment was perfect.','Use more equipment without explaining why.'],0,'Name a targeted improvement, explain its effect on the measurements, and evaluate how strongly the evidence supports your conclusion.'],
 ['PEER — Putting it together','A strong PEER conclusion includes Point (measured finding), Evidence (specific values and percentage difference), Explanation (Detail + Why physics), and Reflection (improvement and validity).','Which conclusion is most complete?',['The spring constant was 20 N/m (Point), compared with 21 N/m, a 4.8% difference (Evidence). Extension increased in proportion to force, consistent with Hooke’s law within the elastic limit (Explanation). Repeating readings after oscillations stop would improve reliability; the close agreement supports the conclusion, within the limits of the measurements (Reflection).','The spring constant was 20 N/m. It was a good experiment.','The spring stretched because a force was applied.'],0,'This answer follows all four PEER stages, with quantitative evidence, Detail + Why, and a validity-focused reflection.']
 ]},
 {id:'understanding',name:'Scientific Understanding',subtitle:'Explanations, evidence and misconceptions',icon:'◉',items:[
 ['Scalars and vectors','A vector has magnitude and direction. A scalar has magnitude only.','Which is a vector quantity?',['Velocity','Speed','Distance'],0,'Velocity includes direction; speed and distance are scalars.'],
 ['Interpreting graphs','The slope of a velocity–time graph is acceleration.','A horizontal line on a velocity–time graph indicates…',['Constant velocity','Increasing acceleration','Zero displacement'],0,'Velocity is unchanged, so acceleration is zero.'],
 ['Reasoning from evidence','A strong explanation states the observation, relevant physics principle and how the principle explains it.','A trolley accelerates more when the same mass experiences a larger net force. Which law explains this?',['Newton’s second law','Ohm’s law','Law of reflection'],0,'F = ma: with constant mass, acceleration is proportional to net force.']
 ]},
 {id:'research',name:'Research Skills',subtitle:'Source quality, claims and referencing',icon:'⌕',items:[
 ['Evaluating sources','Check authorship, publication date, supporting evidence and whether claims can be independently verified.','Which source is strongest for a scientific claim?',['A research paper with methods and references','An anonymous post without sources','An advert with no evidence'],0,'Transparent methods and references make the claim easier to check.'],
 ['Evidence versus opinion','Scientific claims should be supported by observations or measurements.','Which statement reports evidence?',['The temperature increased from 20 °C to 26 °C','The experiment was brilliant','This result must be correct'],0,'A measured change can be checked against data.'],
 ['Recording references','Keep enough information for a reader to find and evaluate a source.','What belongs in a source reference?',['Author, title, date and link or publisher','Only the website name','Only the date accessed'],0,'Record identifying details so the source can be found again.']
 ]}
];
const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const link=id=>'#skills/'+id;
const peerBuilder=()=>`<section class="peer-builder" id="peer-builder" aria-labelledby="peer-builder-heading">
 <div class="peer-builder-intro"><span class="skills-eyebrow">EXPERIMENTAL SKILLS · WRITING TOOL</span><h2 id="peer-builder-heading">PEER Conclusion Builder</h2><p>Build a conclusion from your own experimental results. Work through Point, Evidence, Explanation (Detail + Why) and Reflection. Nothing is submitted or stored online.</p></div>
 <details class="peer-model" open><summary>PEER model conclusion — Critical angle investigation</summary>
 <div class="peer-model-content"><p class="peer-model-note">Use your own measured values in the blank spaces. The model shows how to connect the result, numerical evidence, physics explanation and reflection.</p>
 <h3>P — Point</h3><p>Our results support the relationship <span class="peer-equation">n = 1 / sin C</span>, because the experimental refractive index was close to the given value.</p>
 <h3>E — Evidence</h3><p>Our mean critical angle was <span class="peer-equation">C = <span class="peer-blank" aria-label="mean critical angle blank">________</span>°</span>, giving an experimental refractive index of <span class="peer-equation">n = <span class="peer-blank" aria-label="experimental refractive index blank">________</span></span>. The given refractive index was <span class="peer-blank" aria-label="given refractive index blank">________</span>, producing a percentage difference of <span class="peer-blank" aria-label="percentage difference blank">________</span>%.</p>
 <h3>E — Explanation</h3><p>Snell’s law states that <span class="peer-equation">n = sin i / sin r</span> for light travelling from air into the material. Light paths are reversible, so at the critical angle the ray travels from the material into air, with <span class="peer-equation">i = C</span> and <span class="peer-equation">r = 90°</span>. Therefore, <span class="peer-equation">n = sin 90° / sin C = 1 / sin C</span>.</p>
 <h3>R — Reflection</h3><p>I would use a narrower ray, mark points farther apart and increase the angle slowly near the critical angle. This would make the ray direction and the point at which it travels along the boundary easier to identify, reducing the uncertainty in <span class="peer-equation">C</span>.</p>
 </div></details>
 <div class="peer-critical-calc"><h3>Critical angle calculations</h3><p>Enter your measured mean critical angle and the given refractive index. The calculator uses degrees and gives values you can include in the Evidence section.</p>
 <div class="peer-builder-grid"><div class="peer-field"><label for="peer-angle">Mean critical angle C (°)</label><input type="number" id="peer-angle" min="0" max="90" step="any" placeholder="e.g. 42"></div><div class="peer-field"><label for="peer-given-n">Given refractive index</label><input type="number" id="peer-given-n" min="1" step="any" placeholder="e.g. 1.50"></div></div><p id="peer-angle-result" role="status" aria-live="polite">Enter a critical angle between 0° and 90° to calculate n = 1 / sin C.</p><button type="button" id="peer-use-angle" disabled>Use these results in my PEER draft</button></div>
 <div class="peer-builder-grid">
 <div class="peer-field"><label for="peer-experiment">Experiment / investigation</label><input id="peer-experiment" placeholder="e.g. Investigating Hooke's law"></div>
 <div class="peer-field"><label for="peer-quantity">Measured quantity and unit</label><input id="peer-quantity" placeholder="e.g. spring constant (N/m)"></div>
 <div class="peer-field"><label for="peer-measured">Measured value (number)</label><input id="peer-measured" type="number" step="any" placeholder="e.g. 20"></div>
 <div class="peer-field"><label for="peer-reference">Reference / expected value (optional)</label><input id="peer-reference" type="number" step="any" placeholder="e.g. 21"></div>
 </div>
 <p class="peer-calc" id="peer-calc" role="status">Enter a measured and reference value to calculate a percentage difference.</p>
 <div class="peer-field"><label for="peer-point"><strong>P — Point</strong> · What did you find? State the result and measured value.</label><textarea id="peer-point" rows="3" placeholder="The measured ... was ..."></textarea></div>
 <div class="peer-field"><label for="peer-evidence"><strong>E — Evidence</strong> · What data supports your result? Include specific values and percentage differences.</label><textarea id="peer-evidence" rows="3" placeholder="The measurements showed ... Compared with ... the percentage difference was ..."></textarea></div>
 <div class="peer-field"><label for="peer-detail"><strong>E — Explanation: Detail</strong> · Describe the observed pattern.</label><textarea id="peer-detail" rows="2" placeholder="As ... increased, ..."></textarea></div>
 <div class="peer-field"><label for="peer-why"><strong>E — Explanation: Why</strong> · Link the pattern to the relevant physics principle.</label><textarea id="peer-why" rows="3" placeholder="This happens because ... (name and apply the physics principle)"></textarea></div>
 <div class="peer-field"><label for="peer-reflection"><strong>R — Reflection</strong> · What would you improve, and what does this mean for the validity of your conclusion?</label><textarea id="peer-reflection" rows="3" placeholder="I would improve ... because ... This affects the validity by ..."></textarea></div>
 <div class="peer-builder-actions"><button type="button" id="peer-generate">Build conclusion</button><button type="button" id="peer-copy" disabled>Copy conclusion</button><button type="button" id="peer-print" disabled>Print / save PDF</button><button type="button" id="peer-clear" class="peer-secondary">Clear</button></div>
 <p id="peer-message" role="status" aria-live="polite"></p><div class="peer-output" id="peer-output" hidden><h3>Your PEER conclusion</h3><div id="peer-output-text"></div><p class="peer-reminder">Check your values, significant figures, scientific reasoning and whether your evidence justifies the conclusion before submitting.</p></div>
 </section>`;


const limitationBuilder=()=>`<section class="peer-builder" id="limitation-builder" aria-labelledby="limitation-heading">
<div class="peer-builder-intro"><span class="skills-eyebrow">EXPERIMENTAL SKILLS · WRITING TOOL</span><h2 id="limitation-heading">Limitation Analysis Builder</h2><p>CAUSE: What specifically limited the measurement? → CONSEQUENCE: How could this affect the results? → IMPROVEMENT: What practical change would reduce the problem?</p></div>
<div class="peer-field"><label for="limitation-example">Critical angle investigation: choose an example or write your own</label><select id="limitation-example"><option value="ray">Finite width of the ray</option><option value="points">Tracing points too close together</option><option value="normal">Normal not perpendicular</option><option value="steps">Large angle adjustments near the critical angle</option><option value="custom">Write my own limitation</option></select></div>
<div class="peer-field"><label for="limitation-cause"><strong>CAUSE</strong> — What specifically limited the measurement?</label><textarea id="limitation-cause" rows="2"></textarea></div>
<div class="peer-field"><label for="limitation-consequence"><strong>CONSEQUENCE</strong> — How could this affect the results?</label><textarea id="limitation-consequence" rows="3"></textarea></div>
<div class="peer-field"><label for="limitation-improvement"><strong>IMPROVEMENT</strong> — What practical change would reduce this problem?</label><textarea id="limitation-improvement" rows="2"></textarea></div>
<div class="peer-field"><label for="limitation-validity"><strong>VALIDITY</strong> — What does this mean for confidence in your conclusion?</label><textarea id="limitation-validity" rows="2" placeholder="Explain how uncertainty in C affects the calculated n and the strength of the conclusion."></textarea></div>
<div class="peer-builder-actions"><button type="button" id="limitation-generate">Build analysis</button><button type="button" id="limitation-reflection" disabled>Use in PEER Reflection</button><button type="button" id="limitation-copy" disabled>Copy analysis</button><button type="button" id="limitation-clear" class="peer-secondary">Clear</button></div>
<p id="limitation-status" role="status" aria-live="polite"></p><div class="peer-output" id="limitation-output" hidden><h3>Your limitation analysis</h3><p id="limitation-result"></p></div>
</section>`;
const limitationExamples={
ray:['The light ray has a finite width.','It is difficult to identify the exact centre of the ray, creating uncertainty in the measured critical angle.','Use a narrower light ray and consistently mark its centre.'],
points:['The points used to trace the ray are too close together.','A small error in either point can cause a relatively large error in the drawn ray direction and hence the measured angle.','Mark two points as far apart as practical along the ray.'],
normal:['The normal may not be drawn exactly perpendicular to the glass surface.','The incident angle is measured relative to the normal, so an incorrectly drawn normal introduces an error in the critical angle.','Use a set square to construct the normal at 90° to the surface.'],
steps:['The incident angle is adjusted in steps that are too large near the critical angle.','The exact angle at which the refracted ray travels along the boundary may be missed.','Adjust the angle in smaller steps near the critical angle and repeat the measurement.']
};
function bindLimitationBuilder(){
 const by=id=>document.getElementById(id), keys=['cause','consequence','improvement','validity'];
 let text='';
 const reset=()=>{text='';by('limitation-output').hidden=true;by('limitation-reflection').disabled=true;by('limitation-copy').disabled=true;by('limitation-status').textContent='';};
 const choose=()=>{const e=limitationExamples[by('limitation-example').value];keys.forEach((k,i)=>by('limitation-'+k).value=e?(i<3?e[i]:''):'');reset();};
 by('limitation-example').addEventListener('change',choose);
 keys.forEach(k=>by('limitation-'+k).addEventListener('input',reset));
 by('limitation-generate').addEventListener('click',()=>{
  const missing=keys.filter(k=>!by('limitation-'+k).value.trim());
  if(missing.length){by('limitation-status').textContent='Complete Cause, Consequence, Improvement and Validity before generating your analysis.';by('limitation-'+missing[0]).focus();return;}
  const vals=keys.map(k=>by('limitation-'+k).value.trim());
  text=`Cause: ${vals[0]}\nConsequence: ${vals[1]}\nImprovement: ${vals[2]}\nValidity: ${vals[3]}`;
  by('limitation-result').textContent=text;by('limitation-output').hidden=false;
  by('limitation-reflection').disabled=false;by('limitation-copy').disabled=false;
  by('limitation-status').textContent='Analysis generated. Check that the consequence and improvement follow logically from the cause.';
 });
 by('limitation-reflection').addEventListener('click',()=>{if(!text)return;const reflection=by('peer-reflection');reflection.value=text;reflection.dispatchEvent(new Event('input',{bubbles:true}));by('limitation-status').textContent='Added to the PEER Reflection field above. Review and edit it before building your conclusion.';reflection.focus();});
 by('limitation-copy').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(text);by('limitation-status').textContent='Analysis copied.';}catch{by('limitation-status').textContent='Copy unavailable; select the generated text instead.';}});
 by('limitation-clear').addEventListener('click',()=>{by('limitation-example').value='custom';choose();by('limitation-cause').focus();});
 choose();
}

const card=m=>`<a class="skill-module" href="${link(m.id)}"><span class="skill-glyph" aria-hidden="true">${m.icon}</span><span><strong>${m.name}</strong><small>${m.subtitle}</small><em>${m.items.length} practice activities →</em></span></a>`;
window.renderSkillsCentre=(id)=>{
 const m=modules.find(x=>x.id===id);
 if(!m)return `<div class="container skills-page"><div class="skills-header"><span class="skills-eyebrow">5TH YEAR PHYSICS · SKILLS CENTRE</span><h1>Build your physics skills</h1><p>Choose a skill, study a worked explanation and check your understanding. Feedback is immediate and your answers stay on this device.</p></div><div class="skills-modules">${modules.map(card).join('')}</div><section class="skills-resources"><h2>Related resources</h2><p>Use these alongside the practice activities.</p><div class="skills-resource-list">${(window.HUB_DATA.resources||[]).filter(r=>['Guide','Investigation','Test'].includes(r.type)).map(r=>`<a href="${escape(r.url)}">${escape(r.title)} ↗</a>`).join('')}</div></section></div>`;
 return `<div class="container skills-page"><a class="skills-back" href="#skills">← All skills</a><div class="skills-header"><span class="skills-eyebrow">SKILLS CENTRE · GUIDED PRACTICE</span><h1>${m.name}</h1><p>${m.subtitle}. Read the explanation, answer the question and get immediate feedback.</p></div><div class="skills-progress" aria-live="polite"><span id="skills-progress-text">0 of ${m.items.length} activities completed correctly</span><div class="skills-progress-track"><div id="skills-progress-fill"></div></div></div><div class="skills-activities">${m.id==='experimental'?peerBuilder()+limitationBuilder():''}${m.items.map((q,i)=>`<section class="skills-activity" data-activity="${i}"><div class="skills-activity-heading"><span>ACTIVITY ${i+1}</span><h2>${q[0]}</h2></div><div class="skills-explain"><strong>Learn</strong><p>${q[1]}</p></div><fieldset><legend>${q[2]}</legend>${q[3].map((option,j)=>`<label class="skills-choice"><input type="radio" name="skill-q-${i}" value="${j}"><span>${option}</span></label>`).join('')}</fieldset><button type="button" class="skills-check" data-check="${i}">Check answer</button><div class="skills-feedback" id="skills-feedback-${i}" role="status" aria-live="polite"></div></section>`).join('')}</div><div class="skills-bottom"><a href="#skills">← Choose another skill</a><button type="button" id="skills-reset">Reset this module</button></div></div>`;
};
function bindPeerBuilder(){
 const by=id=>document.getElementById(id);
 const fields=['experiment','quantity','measured','reference','point','evidence','detail','why','reflection'];
 let conclusion='';
 const get=id=>by('peer-'+id).value.trim();
 const numeric=id=>{const v=get(id);return v===''?null:Number(v);};
 const calc=()=>{
  const m=numeric('measured'),r=numeric('reference'),valid=m!==null&&r!==null&&Number.isFinite(m)&&Number.isFinite(r)&&r!==0;
  const pct=valid?Math.abs(m-r)/Math.abs(r)*100:null;
  by('peer-calc').textContent=pct===null?'Enter a measured and non-zero reference value to calculate a percentage difference.':`Percentage difference = |${m} − ${r}| ÷ |${r}| × 100 = ${pct.toFixed(1)}% (1 decimal place).`;
  return pct;
 };
 const angle=by('peer-angle'),given=by('peer-given-n'),use=by('peer-use-angle');
 const angleValues=()=>{
  const a=angle.value.trim()===''?null:Number(angle.value),n=given.value.trim()===''?null:Number(given.value);
  if(a===null||!Number.isFinite(a)||a<=0||a>=90){by('peer-angle-result').textContent='Enter a critical angle greater than 0° and less than 90°.';use.disabled=true;return null;}
  const calculated=1/Math.sin(a*Math.PI/180);
  const validGiven=n!==null&&Number.isFinite(n)&&n>1;
  const difference=validGiven?Math.abs(calculated-n)/n*100:null;
  by('peer-angle-result').textContent=`Experimental n = 1 / sin(${a}°) = ${calculated.toFixed(3)}.`+(difference===null?' Enter a given refractive index greater than 1 to calculate percentage difference.':` Percentage difference = ${difference.toFixed(1)}% (relative to given n = ${n}).`);
  use.disabled=false;return {a,n,calculated,difference};
 };
 angle.addEventListener('input',angleValues);given.addEventListener('input',angleValues);
 use.addEventListener('click',()=>{
  const result=angleValues();if(!result)return;
  const {a,n,calculated,difference}=result;
  const fill=(key,value)=>{by('peer-'+key).value=value;by('peer-'+key).dispatchEvent(new Event('input',{bubbles:true}));};
  fill('experiment','Critical angle investigation');fill('quantity','refractive index');fill('measured',String(Number(calculated.toFixed(3))));
  if(difference!==null)fill('reference',String(n));
  fill('point','Our results support the relationship n = 1 / sin C, because the experimental refractive index was close to the given value.');
  fill('evidence',`Our mean critical angle was C = ${a}°, giving an experimental refractive index of n = ${calculated.toFixed(3)}.`+(difference===null?' Add the given refractive index and percentage difference.':` The given refractive index was ${n}, producing a percentage difference of ${difference.toFixed(1)}%.`));
  fill('detail','At the critical angle, the refracted ray travels along the boundary (r = 90°).');
  fill('why','Snell’s law states that n = sin i / sin r for light travelling from air into the material. Light paths are reversible, so at the critical angle the ray travels from the material into air, with i = C and r = 90°. Therefore, n = sin 90° / sin C = 1 / sin C.');
  fill('reflection','I would use a narrower ray, mark points farther apart and increase the angle slowly near the critical angle. This would make the ray direction and the point at which it travels along the boundary easier to identify, reducing the uncertainty in C.');
  by('peer-message').textContent='Model text inserted. Review and personalise it using your actual investigation.';
 });
 const resetOutput=()=>{conclusion='';by('peer-output').hidden=true;by('peer-copy').disabled=true;by('peer-print').disabled=true;by('peer-message').textContent='';};
 fields.forEach(f=>by('peer-'+f).addEventListener('input',()=>{calc();resetOutput();}));
 by('peer-generate').addEventListener('click',()=>{
  const required=['point','evidence','detail','why','reflection'];
  const missing=required.filter(f=>!get(f));
  if(missing.length){by('peer-message').textContent='Complete all four PEER stages, including both Detail and Why in the Explanation.';by('peer-'+missing[0]).focus();return;}
  const m=numeric('measured'),q=get('quantity');
  if(get('measured')&&(!Number.isFinite(m))){by('peer-message').textContent='Check the measured value.';return;}
  const pct=calc();
  const evidenceNote=pct===null?'':`Calculated percentage difference (reference denominator): ${pct.toFixed(1)}%.`;
  const blocks=[
   ['P — Point',get('point')],
   ['E — Evidence',get('evidence')+(evidenceNote?'\n'+evidenceNote:'')],
   ['E — Explanation',`Detail: ${get('detail')}\nWhy: ${get('why')}`],
   ['R — Reflection',get('reflection')]
  ];
  conclusion=[get('experiment')||'Experimental conclusion',q&&m!==null?`Measured ${q}: ${m}`:'',...blocks.map(([h,v])=>h+'\n'+v)].filter(Boolean).join('\n\n');
  const output=by('peer-output-text');output.replaceChildren();
  for(const [heading,content] of blocks){const h=document.createElement('h4');h.textContent=heading;const para=document.createElement('p');para.textContent=content;output.append(h,para);}
  by('peer-output').hidden=false;by('peer-copy').disabled=false;by('peer-print').disabled=false;
  by('peer-message').textContent='Draft generated. Review the physics and data before using it.';
 });
 by('peer-copy').addEventListener('click',async()=>{
  try{await navigator.clipboard.writeText(conclusion);by('peer-message').textContent='Conclusion copied.';}
  catch{by('peer-message').textContent='Copy is unavailable in this browser. Select the conclusion text instead.';}
 });
 by('peer-print').addEventListener('click',()=>window.print());
 by('peer-clear').addEventListener('click',()=>{
  if(!window.confirm('Clear all PEER entries?'))return;
  fields.forEach(f=>by('peer-'+f).value='');calc();resetOutput();by('peer-experiment').focus();
 });
 calc();
}
window.bindSkillsCentre=(id)=>{
 const m=modules.find(x=>x.id===id);if(!m)return;
 if(id==='experimental'){bindPeerBuilder();bindLimitationBuilder();}
 const completed=new Set();
 const progress=()=>{document.getElementById('skills-progress-text').textContent=`${completed.size} of ${m.items.length} activities completed correctly`;document.getElementById('skills-progress-fill').style.width=(100*completed.size/m.items.length)+'%';};
 document.querySelectorAll('[data-check]').forEach(btn=>btn.addEventListener('click',()=>{
  const i=Number(btn.dataset.check),section=btn.closest('.skills-activity'),choice=section.querySelector('input:checked'),feedback=document.getElementById('skills-feedback-'+i);
  if(!choice){feedback.className='skills-feedback visible';feedback.textContent='Choose an answer first.';return;}
  const correct=Number(choice.value)===m.items[i][4];
  if(correct)completed.add(i);
  feedback.className='skills-feedback visible '+(correct?'correct':'incorrect');
  feedback.textContent=(correct?'✓ Correct. ':'Not yet. ')+m.items[i][5];
  progress();
 }));
 document.getElementById('skills-reset').addEventListener('click',()=>{
  completed.clear();document.querySelectorAll('.skills-activity input').forEach(x=>x.checked=false);
  document.querySelectorAll('.skills-feedback').forEach(x=>{x.textContent='';x.className='skills-feedback';});progress();window.scrollTo({top:0,behavior:'smooth'});
 });
};
})();
