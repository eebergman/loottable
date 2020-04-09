// tslint:disable: member-ordering
import { Injectable } from '@angular/core';
import { convertToParamMap, ParamMap } from '@angular/router';

import { BehaviorSubject, of } from 'rxjs';

@Injectable()
export class MockActivatedRoute {
  public data = of({
    suffixes: ['mon', 'green'],
  });
  private _testParamMap: ParamMap;

  private subjectParamMap = new BehaviorSubject(
    convertToParamMap(this.testParamMap)
  );
  paramMap = this.subjectParamMap.asObservable();

  private themeParamMap = new BehaviorSubject(
    convertToParamMap({ themeName: 'purple-green' })
  );
  queryParamMap = this.themeParamMap.asObservable();

  get testParamMap() {
    return this._testParamMap;
  }
  set testParamMap(params: {}) {
    this._testParamMap = convertToParamMap(params);
    this.subjectParamMap.next(this._testParamMap);
  }
}
