import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  constructor() { }
}

export const baseData = `
    <SAMU>
        <OBJEKTUM>
            <samuReportConfig>
                <fontSize type="number" max="40" min="1" value="16"/>
                <logo type="svg" value="PHN2Zz48cmVjdCBmaWxsPSJyZWQiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48L3JlY3Q+PC9zdmc+"/>
                <configuration value="testdata1"/>
                <headerButtons type="ObjectList">
                    <placeholder name="" id=""/>
                    <value name="AS-IS" id="'asis'" fixed="true"/>
                    <value name="My Systems" id="75C399A5-E6C1-42A8-B96E-BB137C2D1ECE"/>
                    <value name="TO-BE" id="'tobe'" fixed="true"/>
                </headerButtons>
            </samuReportConfig>
        </OBJEKTUM>
    </SAMU>`

export const baseUpdateData = `<SAMU><OBJEKTUM>This is an updaated report with new values<samuReportConfig>
    <newValue value="newvaluedata"/>
    <logo type="svg" value="PHN2Zz48cmVjdCBmaWxsPSJyZWQiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48L3JlY3Q+PC9zdmc+"/>
    <configuration value="testdata2"/>
    <headerButtons value="testdata2"/></samuReportConfig></OBJEKTUM></SAMU>`
