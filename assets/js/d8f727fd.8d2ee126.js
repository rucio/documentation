"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[67593],{28453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>a});var t=n(96540);const s={},r=t.createContext(s);function o(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:i},e.children)}},57922:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"developer/sprint_planning","title":"Sprint planning process in Rucio","description":"Work planning in Rucio is organised in two main ways:","source":"@site/../docs/developer/sprint_planning.md","sourceDirName":"developer","slug":"/developer/sprint_planning","permalink":"/documentation/developer/sprint_planning","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/developer/sprint_planning.md","tags":[],"version":"current","lastUpdatedBy":"rdimaio","lastUpdatedAt":1744638991000,"frontMatter":{"id":"sprint_planning","title":"Sprint planning process in Rucio"},"sidebar":"docs","previous":{"title":"Setting up a Rucio Developer environment using Visual Studio Code","permalink":"/documentation/developer/setting_up_vscode_dev_env"},"next":{"title":"Style Guide","permalink":"/documentation/developer/dev_style_guide"}}');var s=n(74848),r=n(28453);const o={id:"sprint_planning",title:"Sprint planning process in Rucio"},a=void 0,l={},h=[{value:"Duration",id:"duration",level:2},{value:"Availability",id:"availability",level:2},{value:"Issues",id:"issues",level:2},{value:"Priority",id:"priority",level:3},{value:"Size estimation",id:"size-estimation",level:3},{value:"Moderating a sprint",id:"moderating-a-sprint",level:2},{value:"Participating in a sprint",id:"participating-in-a-sprint",level:2},{value:"FAQ",id:"faq",level:2},{value:"If I am done with my tasks for this sprint and the sprint is not over, should I add more issues to the sprint?",id:"if-i-am-done-with-my-tasks-for-this-sprint-and-the-sprint-is-not-over-should-i-add-more-issues-to-the-sprint",level:3},{value:"An issue is less/more work than I thought, should I change the estimate?",id:"an-issue-is-lessmore-work-than-i-thought-should-i-change-the-estimate",level:3},{value:"I won&#39;t be able to finish all the issues in the sprint. Should I remove them?",id:"i-wont-be-able-to-finish-all-the-issues-in-the-sprint-should-i-remove-them",level:3},{value:"The current sprint is over and I have an unfinished item that I would like to continue in the next sprint. What should I do?",id:"the-current-sprint-is-over-and-i-have-an-unfinished-item-that-i-would-like-to-continue-in-the-next-sprint-what-should-i-do",level:3}];function d(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.p,{children:"Work planning in Rucio is organised in two main ways:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Release roadmaps"}),": each roadmap corresponds to a major release, as outlined in the ",(0,s.jsx)(i.a,{href:"/documentation/started/releasepolicy",children:"Release Policy"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Sprint cycles"}),": each sprint cycle lasts 2 weeks."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"The main objectives of sprint cycles are to:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Break down each roadmap into 2-week sprint iterations","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"This should result in smaller, more actionable items"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.li,{children:"Have more visibility of unplanned tasks that occur during a major release cycle, and that might not be part of the initial roadmap"}),"\n",(0,s.jsx)(i.li,{children:"More granular understanding of what the members of the team are currently focusing on in the shorter term."}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["As the Rucio development team is distributed,\nthe sprint planning process in Rucio is ",(0,s.jsx)(i.strong,{children:"completely asynchronous, with no meetings"}),",\nresulting in minimal overhead."]}),"\n",(0,s.jsx)(i.h2,{id:"duration",children:"Duration"}),"\n",(0,s.jsx)(i.p,{children:"Given a two-week period, the sprint:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Begins on the Monday of the first week"}),"\n",(0,s.jsx)(i.li,{children:"Ends on the Friday of the second week"}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"availability",children:"Availability"}),"\n",(0,s.jsx)(i.p,{children:"Sprint participants might have other responsibilities to handle, besides the development of Rucio. Because of this, they should determine their availability (i.e. total number of days) before they can plan which issues to work on for a sprint."}),"\n",(0,s.jsx)(i.p,{children:"Code review is an important, continuous, task to be done by all developers. Availability should be reduced accordingly to cover for that."}),"\n",(0,s.jsx)(i.p,{children:"For example, for a full-time developer devoting 100% of 10 working days to Rucio development, perhaps only 8 days should be reported, to cover time for reviews, meetings, etc."}),"\n",(0,s.jsx)(i.h2,{id:"issues",children:"Issues"}),"\n",(0,s.jsx)(i.h3,{id:"priority",children:"Priority"}),"\n",(0,s.jsx)(i.p,{children:"In a sprint, issues are categorised by their priority:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"priority: issue is part of the release roadmap objectives"}),"\n",(0,s.jsx)(i.li,{children:"non-priority: issue is not related to the release roadmap objectives"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"size-estimation",children:"Size estimation"}),"\n",(0,s.jsx)(i.p,{children:"Each issue is assigned a size based on how many days of work the responsible developer estimates the issue to take.\nAfter/during the roadmap planning, the size estimates should be set for all priority issues.\nFor non-priority issues, the estimates are set when the issue is added to the project, thus ideally all issues in the project should have a size estimate."}),"\n",(0,s.jsxs)(i.p,{children:["Given a sprint period, a developer should plan issues totaling their available days for that week (see the ",(0,s.jsx)(i.a,{href:"#availability",children:"Availability"})," section.)"]}),"\n",(0,s.jsx)(i.p,{children:"The following labels are available for size estimation:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"XS"}),": less than a day of work"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"S"}),": about a day of work"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"M"}),": less than 3 days of work"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"L"}),": about one week (5 days) of work. This issue ",(0,s.jsx)(i.strong,{children:"should"})," be broken down into individual sub-issues"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"XL"}),": more than one week (5 days) of work. This issue ",(0,s.jsx)(i.strong,{children:"must"})," be broken down into individual sub-issues"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"moderating-a-sprint",children:"Moderating a sprint"}),"\n",(0,s.jsx)(i.p,{children:"Each sprint is moderated by one of the developers. This role rotates on a voluntary basis."}),"\n",(0,s.jsx)(i.p,{children:"The moderator is in charge of:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Beginning the sprint:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Announcing the beginning of the sprint in the ",(0,s.jsx)(i.a,{href:"/documentation/join_rucio_mattermost",children:"Mattermost"}),' Developers channel. An example message could be: "Sprint planning thread starts! Please announce your availability (in days), and the issues with their estimates - you choose!"']}),"\n",(0,s.jsx)(i.li,{children:"Validating that the GitHub project board has been correctly populated"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Ending the sprint:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:'Announcing the end of the sprint in the same Mattermost channel. An example message could be: "Sprint review thread starts! Please share your review of this sprint, and any comments/improvements!"'}),"\n",(0,s.jsx)(i.li,{children:"Validating that the GitHub project board has been correctly updated"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"participating-in-a-sprint",children:"Participating in a sprint"}),"\n",(0,s.jsx)(i.p,{children:"As a sprint participant, at the beginning of the sprint you should:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Respond to the initial sprint start thread with your availability (in days), and the issues with their estimates"}),"\n",(0,s.jsx)(i.li,{children:"Update the GitHub project board accordingly"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"And at the end you should:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Respond to the sprint end thread with your review and comments"}),"\n",(0,s.jsx)(i.li,{children:"Update the GitHub project board accordingly"}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"faq",children:"FAQ"}),"\n",(0,s.jsx)(i.h3,{id:"if-i-am-done-with-my-tasks-for-this-sprint-and-the-sprint-is-not-over-should-i-add-more-issues-to-the-sprint",children:"If I am done with my tasks for this sprint and the sprint is not over, should I add more issues to the sprint?"}),"\n",(0,s.jsxs)(i.p,{children:["You can add new issues and mark them with an ",(0,s.jsx)(i.code,{children:"unplanned"})," tag on the sprint board.\nIn general, we should plan sprints in a way that ensures that the work is neither delayed nor completed too much in advance. If this happens regularly, it might be an indication that we are not estimating sizes properly."]}),"\n",(0,s.jsx)(i.h3,{id:"an-issue-is-lessmore-work-than-i-thought-should-i-change-the-estimate",children:"An issue is less/more work than I thought, should I change the estimate?"}),"\n",(0,s.jsx)(i.p,{children:"The size estimate should not be changed once the issue has been added to the sprint with that estimate.\nIn the sprint review phase, you can share a reflection on why you found the real effort to not match the estimated effort."}),"\n",(0,s.jsx)(i.h3,{id:"i-wont-be-able-to-finish-all-the-issues-in-the-sprint-should-i-remove-them",children:"I won't be able to finish all the issues in the sprint. Should I remove them?"}),"\n",(0,s.jsx)(i.p,{children:"It's important to leave all the issues in the sprint, in order to reflect on whether we planned correctly or not.\nWe can estimate the remaining effort for the unfinished issues in case we want to move them to a subsequent sprint,\nbut they should not be removed from their sprint."}),"\n",(0,s.jsx)(i.h3,{id:"the-current-sprint-is-over-and-i-have-an-unfinished-item-that-i-would-like-to-continue-in-the-next-sprint-what-should-i-do",children:"The current sprint is over and I have an unfinished item that I would like to continue in the next sprint. What should I do?"}),"\n",(0,s.jsx)(i.p,{children:"You can move the unfinished item to the next sprint, updating its size according to how much work is estimated to be left."}),"\n",(0,s.jsx)(i.p,{children:"For example, if you would like to carry over an unfinished item of size M, and you estimate that it will need 1 more day of work,\nyou can move it to the next sprint and change its size to S."})]})}function c(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);