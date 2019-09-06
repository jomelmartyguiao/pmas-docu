---
id: api
title: API
---

## Pattern

- Create routes in `/pms/routes`.
![alt-text](/img/routebsc.png)

- Create models in `/pms/models`.
![alt-text](/img/modelbsc.png)

- Create controllers in `/pms/controllers`.
![alt-text](/img/controllerbsc.png)


## Routes

### Competency Routes - pms/controllers/crudUtils.js
- GET '/competency' - fetch/get all competency template
- POST '/competency-builder' - save competency template
- POST '/competency-add' - add competency KPI
- POST '/deleteCompetency' - delete Competency KPI
- POST '/updateCompetency' - update Competency KPI

### Section Routes - pms/controllers/sectionUtils.js
- GET '/section' - fetch/get all sections
- POST '/section' - create/add sections
- POST '/deleteSection' - delete section KPI
- POST '/updateSection' - update section KPI

### BSC Routes - pms/controllers/crudUtils.js
- GET '/bsc-builder' - fetch/get all bscs
- POST '/bsc-builder' - create/add bscs
- GET '/bsc-builderId/:_id' - fetch one bsc
- PUT '/bsc-builder-update/:id' - update bsc
- DELETE '/bsc-builder/:id' - delete bsc

### USER's BSC Routes - pms/controller/userBSC.js
- GET '/userBSCpos' - get all employees with BSC
- GET '/userBSC/:_id' - get user's bsc
- PUT '/userBSC/:id' - update user's bsc
- POST '/userBSC' - assign BSC to many employees
- POST '/userBSCdirect' - assign BSC to 1 employee
- POST '/user/subordinates' - fetch subordinates of manager
- POST '/user/peopleunderme' - fetch employees where you are tag as manager
- PUT '/editBSC/:id'

### USER Routes - pms/controller/user.js
- GET '/userGetAll' - get all users
- POST '/getReports' - get reports/filter users for reports
- POST '/getRatings' - get all user's final rating
- POST '/getScore' - get user's final rating
- POST '/getEmployeeScore' - get employee Section Score
- POST '/getEmployeeScoreSub' - get employee Sub-Section Score

### ASSESSED EMPLOYEE Routes - pms/controller/assessedemployee.js
- GET '/assessedemployee' - get assessed employees
- POST '/uploadScore' - upload all branch scores
- POST '/assessManyOps'- assess many Operations Employees

> Webhook for updates of HRIS not implemented.
