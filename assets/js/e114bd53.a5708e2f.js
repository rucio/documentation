"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1572],{98283:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"operator/database","title":"Database Operations","description":"Supported databases","source":"@site/../docs/operator/database.md","sourceDirName":"operator","slug":"/operator/database","permalink":"/documentation/operator/database","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/operator/database.md","tags":[],"version":"current","lastUpdatedBy":"voetberg","lastUpdatedAt":1734614641000,"frontMatter":{"id":"database","title":"Database Operations","sidebar_label":"Database Operations"},"sidebar":"docs","previous":{"title":"Monitoring","permalink":"/documentation/operator/monitoring"},"next":{"title":"Administration Tricks","permalink":"/documentation/operator/administration"}}');var o=a(74848),i=a(28453);const s={id:"database",title:"Database Operations",sidebar_label:"Database Operations"},r=void 0,d={},c=[{value:"Supported databases",id:"supported-databases",level:2},{value:"Additional options",id:"additional-options",level:2},{value:"Connection pooling",id:"connection-pooling",level:3},{value:"Upgrading and downgrading the database schema",id:"upgrading-and-downgrading-the-database-schema",level:2},{value:"Creating a new version as a developer",id:"creating-a-new-version-as-a-developer",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"supported-databases",children:"Supported databases"}),"\n",(0,o.jsxs)(n.p,{children:["Rucio uses ",(0,o.jsx)(n.a,{href:"https://www.sqlalchemy.org/",children:"SQLAlchemy"})," as the object-relational\nmapper between Python and SQL. Rucio is extensively tested against SQLite,\nMySQL/MariaDB, PostgreSQL, and Oracle and should work with them out of the\nbox. The appropriate connection string has to be set in the ",(0,o.jsx)(n.code,{children:"etc/rucio.cfg"}),", for\nexample:"]}),"\n",(0,o.jsxs)(n.p,{children:["Oracle:\n",(0,o.jsx)(n.code,{children:"oracle://rucio:rucio@(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=10121))(ENABLE=BROKEN)(CONNECT_DATA=(SERVICE_NAME=localhost)))"})]}),"\n",(0,o.jsxs)(n.p,{children:["MySQL/MariaDB: ",(0,o.jsx)(n.code,{children:"mysql+pymysql://rucio:rucio@localhost/rucio"})]}),"\n",(0,o.jsxs)(n.p,{children:["PostgreSQL: ",(0,o.jsx)(n.code,{children:"postgresql://rucio:rucio@localhost:6601/rucio"})]}),"\n",(0,o.jsxs)(n.p,{children:["SQLite: ",(0,o.jsx)(n.code,{children:"sqlite:////tmp/rucio.db"})]}),"\n",(0,o.jsx)(n.p,{children:"Please ensure correct UNIX permissions on the SQLite file, such that the web\nserver process can read and write to it."}),"\n",(0,o.jsx)(n.h2,{id:"additional-options",children:"Additional options"}),"\n",(0,o.jsx)(n.h3,{id:"connection-pooling",children:"Connection pooling"}),"\n",(0,o.jsx)(n.p,{children:"Connection pooling is enabled by default, but can be disabled by setting the option"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-dosini",children:"poolclass = nullpool\n"})}),"\n",(0,o.jsxs)(n.p,{children:["in the ",(0,o.jsx)(n.code,{children:"[database]"})," section in ",(0,o.jsx)(n.code,{children:"etc/rucio.cfg"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Other valid values are ",(0,o.jsx)(n.code,{children:"singletonthreadpool"}),",\nwhich is the default pooling mechanism when using the SQLite engine,\nand ",(0,o.jsx)(n.code,{children:"queuepool"}),",\nwhich is the default otherwise."]}),"\n",(0,o.jsxs)(n.p,{children:["Note that the chosen ",(0,o.jsx)(n.code,{children:"poolclass"})," may conflict with other pooling options.\nFor instance, one cannot combine ",(0,o.jsx)(n.code,{children:"poolclass = nullpool"})," with the ",(0,o.jsx)(n.code,{children:"pool_size"})," option."]}),"\n",(0,o.jsx)(n.h2,{id:"upgrading-and-downgrading-the-database-schema",children:"Upgrading and downgrading the database schema"}),"\n",(0,o.jsxs)(n.p,{children:["Rucio uses ",(0,o.jsx)(n.a,{href:"http://alembic.zzzcomputing.com/en/latest/",children:"Alembic"})," as a database\nmigration tool, which works hand-in-hand with\n",(0,o.jsx)(n.a,{href:"https://www.sqlalchemy.org/",children:"SQLAlchemy"}),". Ensure that in ",(0,o.jsx)(n.code,{children:"etc/alembic.ini"})," the\ndatabase connection string is is set to the same database connection string as\nthe ",(0,o.jsx)(n.code,{children:"etc/rucio.cfg"})," and issue the following command to verify the changes to the\nupgrade of the schema:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"alembic upgrade --sql $(alembic current | cut -d' '-f1):head"})}),"\n",(0,o.jsx)(n.p,{children:"You can edit and then apply the SQL directly on your database."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"alembic upgrade head"})}),"\n",(0,o.jsx)(n.p,{children:"We do not advise running automatic upgrades/downgrades with alembic."}),"\n",(0,o.jsx)(n.p,{children:"Notabene, schema upgrades are reserved for feature releases and will not happen\nwith patch releases."}),"\n",(0,o.jsx)(n.h2,{id:"creating-a-new-version-as-a-developer",children:"Creating a new version as a developer"}),"\n",(0,o.jsx)(n.p,{children:"If you want to create an upgrade path for the schema, you need to generate a\nschema upgrade+downgrade file:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"alembic revision -m 'schema change message'"})}),"\n",(0,o.jsxs)(n.p,{children:["This will output the name of the file that has been generated with two functions\n",(0,o.jsx)(n.code,{children:"def upgrade()"})," and ",(0,o.jsx)(n.code,{children:"def downgrade()"})," that need to be implemented. These should\nreflect the changes to the ",(0,o.jsx)(n.code,{children:"lib/rucio/db/sqla/models.py"})," SQLAlchemy mapping.\n3"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>r});var t=a(96540);const o={},i=t.createContext(o);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);