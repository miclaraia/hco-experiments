Search.setIndex({docnames:["api/agents","api/config","api/db","api/index","api/plots","api/swap","api/utils","index","setup","test","usage"],envversion:53,filenames:["api/agents.rst","api/config.rst","api/db.rst","api/index.rst","api/plots.rst","api/swap.rst","api/utils.rst","index.rst","setup.rst","test.rst","usage.rst"],objects:{"":{swap:[5,0,0,"-"]},"swap.agents":{agent:[0,0,0,"-"],bureau:[0,0,0,"-"],ledger:[0,0,0,"-"],subject:[0,0,0,"-"],user:[0,0,0,"-"]},"swap.agents.agent":{Accuracy:[0,1,1,""],Agent:[0,1,1,""],BaseStat:[0,1,1,""],MultiStat:[0,1,1,""],Stat:[0,1,1,""],Stats:[0,1,1,""]},"swap.agents.agent.Accuracy":{__init__:[0,2,1,""],add:[0,2,1,""],score:[0,3,1,""],total:[0,2,1,""]},"swap.agents.agent.Agent":{__init__:[0,2,1,""],classify:[0,2,1,""],id:[0,4,1,""],score:[0,4,1,""],stats:[0,3,1,""]},"swap.agents.agent.MultiStat":{"export":[0,2,1,""],__init__:[0,2,1,""],add:[0,2,1,""],addNew:[0,2,1,""]},"swap.agents.agent.Stat":{"export":[0,2,1,""],__init__:[0,2,1,""]},"swap.agents.agent.Stats":{"export":[0,2,1,""],__init__:[0,2,1,""],add:[0,2,1,""],get:[0,2,1,""]},"swap.agents.bureau":{AgentIterator:[0,1,1,""],Bureau:[0,1,1,""]},"swap.agents.bureau.AgentIterator":{__init__:[0,2,1,""],next:[0,2,1,""]},"swap.agents.bureau.Bureau":{"export":[0,2,1,""],__init__:[0,2,1,""],add:[0,2,1,""],calculate_changes:[0,2,1,""],get:[0,2,1,""],has:[0,2,1,""],idset:[0,2,1,""],iter_ids:[0,2,1,""],notify_changes:[0,2,1,""],process_changes:[0,2,1,""],remove:[0,2,1,""],stats:[0,2,1,""]},"swap.agents.ledger":{Ledger:[0,1,1,""],MissingReference:[0,5,1,""],StaleException:[0,5,1,""],Transaction:[0,1,1,""]},"swap.agents.ledger.Ledger":{__init__:[0,2,1,""],add:[0,2,1,""],clear_changes:[0,2,1,""],get:[0,2,1,""],notify:[0,2,1,""],notify_agents:[0,2,1,""],print:[0,2,1,""],recalculate:[0,2,1,""],score:[0,4,1,""],update:[0,2,1,""]},"swap.agents.ledger.StaleException":{__init__:[0,2,1,""]},"swap.agents.ledger.Transaction":{__init__:[0,2,1,""],agent:[0,2,1,""],commit_change:[0,2,1,""],notify:[0,2,1,""]},"swap.agents.subject":{Ledger:[0,1,1,""],Subject:[0,1,1,""],Transaction:[0,1,1,""]},"swap.agents.subject.Ledger":{__init__:[0,2,1,""],add:[0,2,1,""],first_change:[0,4,1,""],recalculate:[0,2,1,""]},"swap.agents.subject.Subject":{__init__:[0,2,1,""],class_name:[0,4,1,""],classify:[0,2,1,""],gold:[0,4,1,""],isgold:[0,2,1,""],set_gold_label:[0,2,1,""]},"swap.agents.subject.Transaction":{__init__:[0,2,1,""],calculate:[0,2,1,""],commit_change:[0,2,1,""],get_prior:[0,2,1,""],notify:[0,2,1,""]},"swap.agents.user":{Counter:[0,1,1,""],Ledger:[0,1,1,""],Transaction:[0,1,1,""],User:[0,1,1,""]},"swap.agents.user.Counter":{__init__:[0,2,1,""],calculate:[0,2,1,""],match:[0,2,1,""],score:[0,4,1,""],see:[0,2,1,""],unmatch:[0,2,1,""],unsee:[0,2,1,""]},"swap.agents.user.Ledger":{__init__:[0,2,1,""],action:[0,2,1,""],add:[0,2,1,""],counter:[0,2,1,""],recalculate:[0,2,1,""],score:[0,4,1,""]},"swap.agents.user.Transaction":{__init__:[0,2,1,""],changed:[0,4,1,""],commit_change:[0,2,1,""],matched:[0,4,1,""],notify:[0,2,1,""]},"swap.agents.user.User":{__init__:[0,2,1,""],class_name:[0,4,1,""],classify:[0,2,1,""],stats:[0,3,1,""]},"swap.control":{Control:[5,1,1,""],MetaDataControl:[5,1,1,""]},"swap.control.Control":{__init__:[5,2,1,""],getSWAP:[5,2,1,""],get_classifications:[5,3,1,""],get_gold_labels:[5,2,1,""],init_swap:[5,2,1,""],reset:[5,2,1,""],run:[5,2,1,""],setSWAP:[5,2,1,""]},"swap.control.MetaDataControl":{__init__:[5,2,1,""],getClassifications:[5,2,1,""]},"swap.db":{_DB:[2,1,1,""],classifications:[2,0,0,"-"],controversial:[2,0,0,"-"],query:[2,0,0,"-"]},"swap.db._DB":{__init__:[2,2,1,""],close:[2,2,1,""],get_stats:[2,2,1,""],setBatchSize:[2,2,1,""]},"swap.db.classifications":{Classifications:[2,1,1,""]},"swap.db.classifications.Classifications":{exists:[2,2,1,""],getClassifications:[2,2,1,""],get_stats:[2,2,1,""],insert:[2,2,1,""],upload_project_dump:[2,2,1,""]},"swap.db.controversial":{Controversial:[2,1,1,""]},"swap.db.controversial.Controversial":{get_consensus:[2,2,1,""],get_controversial:[2,2,1,""]},"swap.db.db":{Collection:[2,1,1,""],Cursor:[2,1,1,""]},"swap.db.db.Collection":{__init__:[2,2,1,""],aggregate:[2,2,1,""],insert:[2,2,1,""],insert_many:[2,2,1,""],upload:[2,2,1,""]},"swap.db.db.Cursor":{__init__:[2,2,1,""],getCount:[2,2,1,""],getCursor:[2,2,1,""],next:[2,2,1,""]},"swap.db.query":{Group:[2,1,1,""],Query:[2,1,1,""],Sort:[2,1,1,""]},"swap.db.query.Group":{__init__:[2,2,1,""],build:[2,2,1,""],count:[2,2,1,""],id:[2,2,1,""],push:[2,2,1,""]},"swap.db.query.Query":{__init__:[2,2,1,""],build:[2,2,1,""],group:[2,2,1,""],limit:[2,2,1,""],match:[2,2,1,""],match_range:[2,2,1,""],out:[2,2,1,""],project:[2,2,1,""],sort:[2,2,1,""]},"swap.db.query.Sort":{__init__:[2,2,1,""],add:[2,2,1,""],addMany:[2,2,1,""],build:[2,2,1,""]},"swap.plots":{distributions:[4,0,0,"-"],performance:[4,0,0,"-"],traces:[4,0,0,"-"]},"swap.plots.distributions":{multivar_scatter:[4,6,1,""],plot_class_histogram:[4,6,1,""],plot_jenks_breaks:[4,6,1,""],plot_kde:[4,6,1,""],plot_pdf:[4,6,1,""],plot_seaborn_density:[4,6,1,""],plot_seaborn_density_split:[4,6,1,""],sklearn_purity_completeness:[4,6,1,""]},"swap.plots.performance":{p_diff:[4,6,1,""],plot_confusion_matrix:[4,6,1,""],plot_histogram:[4,6,1,""],plot_matrix_difference:[4,6,1,""],plot_roc:[4,6,1,""],plot_user_cm:[4,6,1,""],scatter_plot:[4,6,1,""]},"swap.plots.traces":{plot_subjects:[4,6,1,""],plot_tracks:[4,6,1,""],plot_user:[4,6,1,""]},"swap.swap":{DummySWAP:[5,1,1,""],SWAP:[5,1,1,""]},"swap.swap.DummySWAP":{"export":[5,2,1,""],__init__:[5,2,1,""],get_cursor:[5,3,1,""],process:[5,2,1,""],score_export:[5,2,1,""]},"swap.swap.SWAP":{"export":[5,2,1,""],__init__:[5,2,1,""],classify:[5,2,1,""],debug_str:[5,2,1,""],golds:[5,4,1,""],history_export:[5,2,1,""],manifest:[5,2,1,""],process_changes:[5,2,1,""],score_export:[5,2,1,""],set_gold_labels:[5,2,1,""],stats:[5,4,1,""],stats_str:[5,2,1,""]},"swap.ui":{run:[5,6,1,""]},"swap.utils":{Singleton:[6,1,1,""],classification:[6,0,0,"-"],golds:[6,0,0,"-"],scores:[6,0,0,"-"]},"swap.utils.classification":{ClKeyError:[6,5,1,""],ClValueError:[6,5,1,""],Classification:[6,1,1,""]},"swap.utils.classification.ClKeyError":{__init__:[6,2,1,""]},"swap.utils.classification.ClValueError":{__init__:[6,2,1,""]},"swap.utils.classification.Classification":{Validate:[6,3,1,""],__init__:[6,2,1,""],generate:[6,3,1,""]},"swap.utils.golds":{GoldGetter:[6,1,1,""],db_cv:[6,6,1,""]},"swap.utils.golds.GoldGetter":{__init__:[6,2,1,""],all:[6,2,1,""],consensus:[6,2,1,""],controversial:[6,2,1,""],golds:[6,4,1,""],random:[6,2,1,""],reset:[6,2,1,""],subjects:[6,2,1,""],these:[6,2,1,""]},"swap.utils.scores":{Score:[6,1,1,""],ScoreExport:[6,1,1,""],ScoreIterator:[6,1,1,""]},"swap.utils.scores.Score":{__init__:[6,2,1,""],dict:[6,2,1,""],is_retired:[6,4,1,""]},"swap.utils.scores.ScoreExport":{__init__:[6,2,1,""],completeness:[6,2,1,""],completeness_at_purity:[6,2,1,""],composition:[6,2,1,""],counts:[6,2,1,""],dict:[6,2,1,""],find_purity:[6,2,1,""],find_thresholds:[6,2,1,""],from_csv:[6,3,1,""],full:[6,2,1,""],full_dict:[6,2,1,""],get_real_golds:[6,3,1,""],purity:[6,2,1,""],retire:[6,2,1,""],retired_scores:[6,4,1,""],roc:[6,2,1,""],sorted_scores:[6,4,1,""]},"swap.utils.scores.ScoreIterator":{__init__:[6,2,1,""],next:[6,2,1,""]},swap:{control:[5,0,0,"-"],plots:[4,0,0,"-"],swap:[5,0,0,"-"],ui:[5,0,0,"-"],utils:[6,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","staticmethod","Python static method"],"4":["py","attribute","Python attribute"],"5":["py","exception","Python exception"],"6":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:staticmethod","4":"py:attribute","5":"py:exception","6":"py:function"},terms:{"boolean":[0,5],"class":[0,2,5,6,10],"default":[9,10],"export":[0,4,5,6,9,10],"final":10,"float":[0,6],"function":[0,2,5],"int":[0,2,6],"new":[0,5,10],"return":[0,2,5,6],"static":[0,5,6,9,10],"true":[0,2,5,6],"while":5,For:[0,5,8,10],Has:2,NOT:[9,10],The:[2,5],Then:5,There:10,Use:2,Used:[5,6],Useful:[2,5,7],Uses:[0,6],Will:[9,10],__init__:[0,2,5,6],__main__:10,_db:2,_id:2,_type:6,accept:5,access:[0,2],accord:0,accross:0,accuraci:0,act:[0,2],action:[0,5],add:[0,2,6,9,10],added:[5,9,10],adding:10,addit:[2,6,8],addmani:2,addnew:0,admin:7,affect:8,after:[2,8,9,10],agent:[3,5,7],agent_id:0,agent_typ:0,agentiter:0,aggreg:[2,9,10],agreeabl:2,algorithm:[5,9,10],all:[0,2,5,6],allow:[0,6],allowdiskus:2,alreadi:6,also:[0,5,8],amount:5,analysi:5,analyz:10,andspecifi:[9,10],ani:[2,5,6,9,10],annot:[0,6],api:7,app:[9,10],appropri:5,arbitrarili:[0,5],arg:[4,5,6],argument:7,around:2,arrai:2,arriv:6,asc:2,aspect:[4,9,10],aspect_ratio:[9,10],asses:5,assign:6,associ:6,assum:10,attributeerror:0,avail:[2,8],averag:4,axi:[9,10],back:[9,10],back_upd:[9,10],bar:0,base:[0,2,5,6,9,10],base_scor:4,baselin:5,basestat:0,batchsiz:2,being:[5,6],belong:0,between:[2,9,10],betweenmultipl:[9,10],bogu:0,bool:6,bootstrap:5,both:5,buil:2,build:2,bureau:[3,5,7],cach:6,caesar:7,calcul:[0,5],calculate_chang:0,call:[2,5],can:[0,8,10],categori:0,chang:[0,4,5,8],check:0,class_nam:0,classif:[0,3,4,5,7,9,10],classifi:[0,5,6],classification_id:2,clear:[0,6,9,10],clear_chang:0,clkeyerror:6,clone:8,close:2,clvalueerror:6,code:[2,5],cohort:5,collect:[0,3,5,7,10],com:8,come:2,command:[2,5,7,8],commit:5,commit_chang:0,compar:[9,10],comparison:5,compat:6,compil:[5,6],complet:[6,9,10],completeness_at_pur:6,complic:2,composit:6,cond:6,conda:8,condit:5,config:[3,6,7,9],confus:[5,9,10],connect:[0,5,6],consensu:[2,6,9,10],consid:[5,6],consist:10,consolid:5,construct:[5,6],consult:8,contain:[0,2,5],content:3,control:[3,7],controversi:[3,6,7,9,10],conveni:10,copi:10,correct:0,count:[2,6],counter:0,coupl:10,creat:[5,9,10],createa:[9,10],crowd:5,csv:[9,10],current:[0,6],cursor:[3,5,7],cursor_arg:2,curv:[5,6,9,10],custom:[0,2,5,6,7,9],cutoff:4,data:[0,2,4,5,6,9,10],databas:[2,5,6,9,10],dataset:[0,5],db_cv:6,debug_str:5,defin:[2,5,9,10],den:0,denomin:0,depend:[0,5,8],deprec:5,derefer:0,deriv:5,desc:2,deserv:2,desir:[6,10],desired_pur:6,detail:[7,8],determin:[5,6],dev:8,develop:8,deviat:0,dict:[2,5,6],dictionari:6,diff:[9,10],differ:[5,9,10],dir:[9,10],direct:0,directli:[0,8],directori:[8,9,10],discoveri:5,displai:[9,10],dist:[9,10],distribut:[3,7,9,10],distutil:10,divid:0,doc:8,document:2,doesn:[9,10],dpi:4,drop:[9,10],due:2,dummyswap:5,dump:[9,10],dynam:[0,9,10],each:[0,2,4,5,6,9,10],easier:5,edit:8,egg:8,either:5,element:6,empir:5,entir:[6,9,10],entri:2,environ:[8,10],epsilon:[0,5],equal:2,estim:5,etc:2,everi:[5,9,10],exampl:[0,7,8],except:[0,6],exist:[2,6,10],experi:[8,10],expert:6,expertli:5,explan:5,explicitli:5,extern:[9,10],extra:2,extractor:[9,10],fals:[2,9,10],faster:6,feed:5,fetch:6,fiduci:5,field:2,file:[4,7,9],filenam:[9,10],find:6,find_pur:6,find_threshold:6,first:[5,6],first_chang:0,fix:[9,10],flag:6,fname:[2,4,6],forc:[9,10],form:[4,6],formul:5,formula:2,fpr:6,fraction:[0,5],framework:5,frequenc:5,from:[0,2,3,5,6,8,9,10],from_csv:6,full:[6,10],full_dict:6,func:6,gen:[9,10],geneart:5,gener:[3,4,5,6,8,9,10],get:[0,2,5,6,7,10],get_classif:5,get_consensu:2,get_controversi:2,get_cursor:5,get_gold_label:5,get_prior:0,get_real_gold:6,get_stat:2,getclassif:[2,5],getcount:2,getcursor:2,getswap:5,getter:[0,5,6],git:8,github:8,given:[0,6],gold:[0,3,4,5,7,9,10],gold_label:[0,5,6],goldgett:6,gravit:5,greater:2,group:2,hard:5,has:[0,2,5],have:[0,5,9,10],hco:[8,10],here:[2,5,9,10],hereaft:5,highest:2,hist:[9,10],histogram:[4,9,10],histori:[4,5,6,10],history_export:[5,6,10],historyexport:[5,10],how:[2,4,6],howev:2,id_:[0,6,10],identifi:[0,5],ids:[0,6],idset:0,imag:[9,10],implement:[5,9,10],imposs:6,includ:[5,10],incorrect:6,index:7,indic:[0,6],individu:6,inform:[0,5,6,8],inherit:6,init_swap:5,initi:[0,5],insert:2,insert_mani:2,insid:[0,8],instal:[7,10],instanc:[5,6,9,10],instead:[2,4],intend:0,interact:[0,2,5,7],interest:5,interfac:5,invok:8,is_retir:6,isgold:0,iter:[0,4,5,6],iter_id:0,its:[0,2,5,8],judici:5,karg:2,keep:0,kei:[2,6],keyerror:6,kwarg:[2,4,6],label1:10,label2:10,label:[0,4,5,6,9,10],launch:7,learn:[9,10],leastconsensu:[9,10],leastcontroversi:[9,10],ledger:[3,5,7],ledger_typ:0,lens:5,less:[2,6],level:2,lightweight:10,like:[2,5,6],likelihood:5,limit:2,line:[5,10],linear:4,link:0,list:[0,2,4,5,6],load:[0,9,10],locat:0,log:[4,9,10],login:[9,10],lot:10,lower:2,machin:0,made:2,mai:10,main:2,make:[0,5,10],make_new:0,manag:[0,2,5],mani:6,manifest:5,manner:10,map:[5,6],mark:0,marshal:5,match:[0,2],match_rang:2,matplotlib:[4,9,10],matric:[5,9,10],matrix:[5,10],max_batch_s:5,mdr:6,mean:[0,8],measur:6,median:0,memori:0,mere:5,meta:5,meta_data:5,meta_low:5,meta_upp:5,metaclass:6,metadata:[5,6],metadatacontrol:5,method:[2,6,9,10],miclaraia:8,might:5,miss:[0,6],missingrefer:0,mnra:5,mode:[5,8,9,10],modifi:[9,10],modul:[2,3,7,9,10],mongo:[2,9,10],more:[2,8,10],most:[2,5,6,9,10],multiclass:[9,10],multipl:[0,2,5],multipli:[9,10],multistat:0,multivar_scatt:4,name:[0,2,6,7],navig:8,need:[5,6,9,10],network:2,new_gold:6,next:[0,2,6],noback:[9,10],none:[0,2,4,5,6],note:5,notifi:[0,5],notify_ag:0,notify_chang:0,num:[0,2],number:[0,2,6],numer:0,object:[0,2,5,6,9,10],occur:5,onc:2,one:[5,6],ones:[9,10],onli:[5,6,9,10],onlin:[0,10],oper:10,option:[5,6,9,10],order:[2,5],other:[2,4,5,9,10],other_bureau:0,otherwis:2,our:5,out:[2,5],output:[8,9,10],over:5,overrid:[0,9,10],own:2,p_diff:4,packag:10,page:7,panopt:[9,10],param:5,paramet:[0,2,4,5,6],part:0,particular:5,pass:[2,4,5],path:10,path_to_config_overrid:[9,10],penalti:2,percentag:6,perform:[2,3,5,7,9,10],pickl:[6,8,9,10],pip:8,pipelin:2,pkl:[8,10],plot:[3,5,6,7,9,10],plot_class_histogram:4,plot_confusion_matrix:4,plot_histogram:4,plot_jenks_break:4,plot_kd:4,plot_matrix_differ:4,plot_pdf:4,plot_roc:4,plot_seaborn_dens:4,plot_seaborn_density_split:4,plot_subject:4,plot_track:4,plot_us:4,plot_user_cm:4,plotwith:[9,10],png:10,point:10,port:[9,10],possibl:10,pow:[9,10],pre:[9,10],precis:[9,10],presrec:[9,10],print:[0,5],prior:[0,5,9,10],probabl:[0,5,6,9,10],proccesss:5,process:[5,6],process_chang:[0,5],project:[2,8,9,10],projectd:8,proper:5,properli:10,provid:[5,10],puriti:6,purpos:5,push:2,pymongo:2,python:[2,9,10],queri:[3,7],quick:0,rais:6,random:6,rank:2,ratio:[9,10],real:[0,5,6],rebuild:0,recal:[6,9,10],recalcul:[0,5],receiv:2,recept:5,recommend:8,record:0,reduc:[0,5,9,10],refer:[0,2],regener:[9,10],regist:[9,10],registr:[9,10],regular:[2,5],relev:[0,5],remov:0,render:[9,10],reorder:[9,10],repeat:5,repositori:8,repres:[0,6],represent:0,requir:5,reset:[5,6],restrict:[9,10],result:2,retir:6,retired_scor:6,right:5,roc:[5,6,7],rocinterfac:5,root:10,run:[2,5,8,9,10],run_swap:[8,9,10],runtim:[8,10],sampl:[6,9,10],save:[4,6,8,9,10],scale:4,scatter_plot:4,scikit:[9,10],score:[0,3,4,5,7],score_export1:10,score_export2:10,score_export:[4,5,9,10],scoreexport:[5,6,10],scoreiter:6,script:10,search:7,see:[0,5],set:[0,2,5,6,8,10],set_gold_label:[0,5],setbatchs:2,setswap:5,setup:10,shell:[9,10],should:[0,2,4,5],show:[4,9,10],similar:5,simpl:5,simul:[2,5],singl:[0,6],singleton:6,size:[2,6,9,10],sklearn_purity_complet:4,slight:2,snhunter:0,som:2,some:10,someth:10,sort:2,sorted_scor:6,sourc:[0,2,3,4,5,6,8],space:[5,6],specif:[0,5],specifi:[2,9,10],split:[5,9,10],stale:0,staleexcept:0,standard:[0,5],start:7,stat:[0,5,9,10],statement:2,statist:[0,5,9,10],stats_str:5,statu:5,still:5,store:6,str:[0,2,5,6],string:[0,5],strip:5,structur:[0,5],sub:7,subclass:[0,5],subdirectori:8,subject:[2,3,4,5,6,7,9,10],subject_id:[0,6],subsequ:5,sum:0,supernova:0,support:2,sure:10,swap:[3,8],swapinterfac:5,task:5,test:[5,8,9,10],text:5,than:[2,6],thei:[2,5],them:5,thi:[0,2,5,8,10],this_bureau:0,thould:2,threshold:6,through:[0,5],time:[5,6],titl:4,tool:[5,10],total:0,trace:[3,7],track:[0,4,9,10],tracker:0,train:[5,9,10],transact:0,treat:5,tree:0,tupl:[2,4],two:[9,10],type:[0,5,6],under:5,undocu:[9,10],unmatch:0,unregist:[9,10],unse:0,updat:[0,5],upload:[2,9,10],upload_dump:[9,10],upload_gold:[9,10],upload_project_dump:2,upon:5,upper:2,usag:[7,8,9],use:[0,5,6,8],used:[0,5,6,9,10],user:[3,4,5,6,7,9,10],user_ag:0,user_id:0,user_nam:0,using:[5,9,10],util:[3,5,7],valid:6,valu:[2,6],valueerror:6,variabl:[2,10],variou:10,verifi:6,version:[0,6,8,10],via:2,viewer:[9,10],virtual:[8,10],visual:[9,10],volunt:5,vote:5,want:10,warp:5,well:5,were:5,what:0,whatev:5,when:[2,5,6,10],where:2,whether:6,which:[2,5,10],whose:5,wide:5,with_bar:5,within:5,without:[9,10],wrapper:2,write:[2,9,10],wrong:6,x_axi:4,xaxi:[9,10],y_axi:4,yaxi:[9,10],you:[8,10],your:10},titles:["<code class=\"docutils literal\"><span class=\"pre\">swap.agents</span></code>","<code class=\"docutils literal\"><span class=\"pre\">swap.config</span></code>","<code class=\"docutils literal\"><span class=\"pre\">swap.db</span></code>","API Documentation","<code class=\"docutils literal\"><span class=\"pre\">swap.plots</span></code>","<code class=\"docutils literal\"><span class=\"pre\">swap</span></code>","<code class=\"docutils literal\"><span class=\"pre\">swap.utils</span></code>","Welcome to SWAP\u2019s documentation!","Getting Started","Named Arguments","UI Usage"],titleterms:{Useful:10,admin:[9,10],agent:0,api:3,argument:[9,10],bureau:0,caesar:[9,10],classif:[2,6],collect:2,command:[9,10],config:[1,10],content:[4,6,7],control:5,controversi:2,cursor:2,custom:10,detail:10,distribut:4,document:[3,7],exampl:10,file:10,get:8,gold:6,indic:7,instal:8,interact:10,launch:10,ledger:0,modul:[4,6],name:[9,10],perform:4,plot:4,queri:2,roc:[9,10],score:[6,9,10],start:8,sub:[9,10],subject:0,swap:[0,1,2,4,5,6,7,9,10],tabl:7,trace:4,usag:10,user:0,util:6,welcom:7}})