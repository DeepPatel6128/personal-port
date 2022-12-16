import React from 'react'

export default function Skills() {
  return (
    <>
    <div className='skill-head'>
    <div className='skill-heading'>my skills</div>
    </div>
    <div className="statistics">
                <div className="html main-con">
                    <div className="percentage-container">
                        <svg className="svg" >
                            <circle cx='85' cy='90' r='55'></circle>
                            <circle cx='85' cy='90' r='55' className="bar"></circle>
                        </svg>
                        <div className="numb">
                            <h4 className="percent">85<span>%</span></h4>
                        </div>
                    </div>
                    <div className="text">HTML</div>
                </div>
                <div className="css main-con">
                    <div className="percentage-container">
                        <svg className="svg">
                            <circle cx='85' cy='90' r='55'></circle>
                            <circle cx='85' cy='90' r='55' className="bar"></circle>
                        </svg>
                        <div className="numb">
                            <h4 className="percent">90<span>%</span></h4>
                        </div>
                    </div>
                    <div className="text">CSS</div>
                </div>
                <div className="javascript main-con">
                    <div className="percentage-container">
                        <svg className="svg">
                            <circle cx='85' cy='90' r='55'></circle>
                            <circle cx='85' cy='90' r='55' className="bar"></circle>
                        </svg>
                        <div className="numb">
                            <h4 className="percent">76<span>%</span></h4>
                        </div>
                    </div>
                    <div className="text">JavaScript</div>
                </div>
                <div className="react main-con">
                    <div className="percentage-container">
                        <svg className="svg">
                            <circle cx='85' cy='90' r='55'></circle>
                            <circle cx='85' cy='90' r='55' className="bar"></circle>
                        </svg>
                        <div className="numb">
                            <h4 className="percent">70<span>%</span></h4>
                        </div>
                    </div>
                    <div className="text">ReactJS</div>
                </div>
            </div>
            <div className="statistics">
                <div className="mongo main-con">
                    <div className="percentage-container">
                        <svg className="svg" >
                            <circle cx='85' cy='90' r='55'></circle>
                            <circle cx='85' cy='90' r='55' className="bar"></circle>
                        </svg>
                        <div className="numb">
                            <h4 className="percent">80<span>%</span></h4>
                        </div>
                    </div>
                    <div className="text">MongoDB</div>
                </div>
                <div className="exp main-con">
                    <div className="percentage-container">
                        <svg className="svg">
                            <circle cx='85' cy='90' r='55'></circle>
                            <circle cx='85' cy='90' r='55' className="bar"></circle>
                        </svg>
                        <div className="numb">
                            <h4 className="percent">95<span>%</span></h4>
                        </div>
                    </div>
                    <div className="text">ExpressJS</div>
                </div>
                <div className="node main-con">
                    <div className="percentage-container">
                        <svg className="svg">
                            <circle cx='85' cy='90' r='55'></circle>
                            <circle cx='85' cy='90' r='55' className="bar"></circle>
                        </svg>
                        <div className="numb">
                            <h4 className="percent">70<span>%</span></h4>
                        </div>
                    </div>
                    <div className="text">NodeJS</div>
                </div>
                <div className="next main-con">
                    <div className="percentage-container">
                        <svg className="svg">
                            <circle cx='85' cy='90' r='55'></circle>
                            <circle cx='85' cy='90' r='55' className="bar"></circle>
                        </svg>
                        <div className="numb">
                            <h4 className="percent">60<span>%</span></h4>
                        </div>
                    </div>
                    <div className="text">NextJS</div>
                </div>
            </div>
    </>
  )
}
