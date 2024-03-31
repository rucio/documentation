"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1572],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>m});var a=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(t),g=o,m=c["".concat(p,".").concat(g)]||c[g]||u[g]||r;return t?a.createElement(m,i(i({ref:n},d),{},{components:t})):a.createElement(m,i({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=g;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},34316:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=t(58168),o=t(98587),r=(t(96540),t(15680)),i=["components"],l={id:"database",title:"Database Operations",sidebar_label:"Database Operations"},p=void 0,s={unversionedId:"operator/database",id:"operator/database",title:"Database Operations",description:"Supported databases",source:"@site/../docs/operator/database.md",sourceDirName:"operator",slug:"/operator/database",permalink:"/documentation/operator/database",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/operator/database.md",tags:[],version:"current",lastUpdatedBy:"Xenakis D.",lastUpdatedAt:1711918521,formattedLastUpdatedAt:"Mar 31, 2024",frontMatter:{id:"database",title:"Database Operations",sidebar_label:"Database Operations"},sidebar:"docs",previous:{title:"Monitoring",permalink:"/documentation/operator/monitoring"},next:{title:"Administration Tricks",permalink:"/documentation/operator/administration"}},d={},c=[{value:"Supported databases",id:"supported-databases",level:2},{value:"Additional options",id:"additional-options",level:2},{value:"Connection pooling",id:"connection-pooling",level:3},{value:"Upgrading and downgrading the database schema",id:"upgrading-and-downgrading-the-database-schema",level:2},{value:"Creating a new version as a developer",id:"creating-a-new-version-as-a-developer",level:2}],u={toc:c},g="wrapper";function m(e){var n=e.components,t=(0,o.A)(e,i);return(0,r.yg)(g,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"supported-databases"},"Supported databases"),(0,r.yg)("p",null,"Rucio uses ",(0,r.yg)("a",{parentName:"p",href:"https://www.sqlalchemy.org/"},"SQLAlchemy")," as the object-relational\nmapper between Python and SQL. Rucio is extensively tested against SQLite,\nMySQL/MariaDB, PostgreSQL, and Oracle and should work with them out of the\nbox. The appropriate connection string has to be set in the ",(0,r.yg)("inlineCode",{parentName:"p"},"etc/rucio.cfg"),", for\nexample:"),(0,r.yg)("p",null,"Oracle:\n",(0,r.yg)("inlineCode",{parentName:"p"},"oracle://rucio:rucio@(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=10121))(ENABLE=BROKEN)(CONNECT_DATA=(SERVICE_NAME=localhost)))")),(0,r.yg)("p",null,"MySQL/MariaDB: ",(0,r.yg)("inlineCode",{parentName:"p"},"mysql+pymysql://rucio:rucio@localhost/rucio")),(0,r.yg)("p",null,"PostgreSQL: ",(0,r.yg)("inlineCode",{parentName:"p"},"postgresql://rucio:rucio@localhost:6601/rucio")),(0,r.yg)("p",null,"SQLite: ",(0,r.yg)("inlineCode",{parentName:"p"},"sqlite:////tmp/rucio.db")),(0,r.yg)("p",null,"Please ensure correct UNIX permissions on the SQLite file, such that the web\nserver process can read and write to it."),(0,r.yg)("h2",{id:"additional-options"},"Additional options"),(0,r.yg)("h3",{id:"connection-pooling"},"Connection pooling"),(0,r.yg)("p",null,"Connection pooling is enabled by default, but can be disabled by setting the option"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-dosini"},"poolclass = nullpool\n")),(0,r.yg)("p",null,"in the ",(0,r.yg)("inlineCode",{parentName:"p"},"[database]")," section in ",(0,r.yg)("inlineCode",{parentName:"p"},"etc/rucio.cfg"),"."),(0,r.yg)("p",null,"Other valid values are ",(0,r.yg)("inlineCode",{parentName:"p"},"singletonthreadpool"),",\nwhich is the default pooling mechanism when using the SQLite engine,\nand ",(0,r.yg)("inlineCode",{parentName:"p"},"queuepool"),",\nwhich is the default otherwise."),(0,r.yg)("p",null,"Note that the chosen ",(0,r.yg)("inlineCode",{parentName:"p"},"poolclass")," may conflict with other pooling options.\nFor instance, one cannot combine ",(0,r.yg)("inlineCode",{parentName:"p"},"poolclass = nullpool")," with the ",(0,r.yg)("inlineCode",{parentName:"p"},"pool_size")," option."),(0,r.yg)("h2",{id:"upgrading-and-downgrading-the-database-schema"},"Upgrading and downgrading the database schema"),(0,r.yg)("p",null,"Rucio uses ",(0,r.yg)("a",{parentName:"p",href:"http://alembic.zzzcomputing.com/en/latest/"},"Alembic")," as a database\nmigration tool, which works hand-in-hand with\n",(0,r.yg)("a",{parentName:"p",href:"https://www.sqlalchemy.org/"},"SQLAlchemy"),". Ensure that in ",(0,r.yg)("inlineCode",{parentName:"p"},"etc/alembic.ini")," the\ndatabase connection string is is set to the same database connection string as\nthe ",(0,r.yg)("inlineCode",{parentName:"p"},"etc/rucio.cfg")," and issue the following command to verify the changes to the\nupgrade of the schema:"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"alembic upgrade --sql $(alembic current | cut -d' '-f1):head")),(0,r.yg)("p",null,"You can edit and then apply the SQL directly on your database."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"alembic upgrade head")),(0,r.yg)("p",null,"We do not advise running automatic upgrades/downgrades with alembic."),(0,r.yg)("p",null,"Notabene, schema upgrades are reserved for feature releases and will not happen\nwith patch releases."),(0,r.yg)("h2",{id:"creating-a-new-version-as-a-developer"},"Creating a new version as a developer"),(0,r.yg)("p",null,"If you want to create an upgrade path for the schema, you need to generate a\nschema upgrade+downgrade file:"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"alembic revision -m 'schema change message'")),(0,r.yg)("p",null,"This will output the name of the file that has been generated with two functions\n",(0,r.yg)("inlineCode",{parentName:"p"},"def upgrade()")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"def downgrade()")," that need to be implemented. These should\nreflect the changes to the ",(0,r.yg)("inlineCode",{parentName:"p"},"lib/rucio/db/sqla/models.py")," SQLAlchemy mapping.\n3"))}m.isMDXComponent=!0}}]);