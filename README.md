# hero-world
Hero drives a car, feeding a cat, doing somthing ...

## Architect

                                                                                                    
                            REQUEST                             RESPONSE                        
                               |                                    ↑                               
                               |                                    |                               
                               |                                    |                               
                               |                                    |                               
                               ↓                                    |                               
                            ............................................                            
                            ::                                        ::                            
                            ::                                        ::                            
                            ::                 ROUTER                 ::                            
                            ::                                        ::                            
                            ::                                        ::                            
                            :..........................................:                            
                               |                                    ↑                               
                               |                                    |                               
                               |                                    |                               
                               |                                    |                               
                               ↓                                    |                               
            ........................................................:...................            
            ::                                                                        ::            
            ::                                                                        ::            
            :.                             CONTROLLER                                 .:            
            ::                                                                        ::            
            ::                                                                        ::            
            :..........................................................................:            
                               |                                    ↑                               
                               |                                    |                               
                               |                                    |                               
                               |                                    |                               
                               ↓                                    |                               
            ............................................................................             
            ::                                                                        ::            
            ::                                                                        ::            
            ::                               SERVICES                                 ::            
            ::                                                                        ::            
            ::                                                                        ::            
            ::........................................................................::            
                               |                                    ↑                               
                               |                                    |                               
                               |                                    |                               
                               |                                    |                               
                               ↓                                    |                               
            ............................................................................            
            ::                                                                        ::            
            ::                                                                        ::            
            :.                            DATA ACCESS LAYER                           .:            
            ::                                                                        ::            
            ::                                                                        ::            
            :..........................................................................:            

### Data access layer
- Woking with data from DB
### Services
- Working with Controller & Data access layer
- Multiple services for specific case
### Controller
- Process logic
### Router
- Making route based on request 

## Organizing folders 
- config
- controllers
- dataAccess
- models
- routes
- scripts
- services
- thirdParty
index.js
swaggers.js
LICENSE.md
package.json
