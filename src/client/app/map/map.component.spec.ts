import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  async
} from '@angular/core/testing';
import {
  BaseRequestOptions,
  ConnectionBackend,
  Http, HttpModule
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { NameListService } from '../shared/index';
import { MapModule } from './map.module';

export function main() {
  describe('Map component', () => {
    // setting module for testing
    // Disable old forms
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule, RouterModule, HttpModule, MapModule],
        declarations: [TestComponent],
        providers: [
          NameListService,
          BaseRequestOptions,
          MockBackend,
          {provide: Http, useFactory: function (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) {
              return new Http(backend, defaultOptions);
            },
            deps: [MockBackend, BaseRequestOptions]
          },
        ]
      });
    });

    it('should work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();

            let mapInstance = fixture.debugElement.children[0].componentInstance;
            let mapDOMEl = fixture.debugElement.children[0].nativeElement;

            expect(mapInstance.nameListService).toEqual(jasmine.any(NameListService));
            expect(mapDOMEl.querySelectorAll('li').length).toEqual(0);

            mapInstance.newName = 'Minko';
            mapInstance.addName();

            fixture.detectChanges();

            expect(mapDOMEl.querySelectorAll('li').length).toEqual(1);
            expect(mapDOMEl.querySelectorAll('li')[0].textContent).toEqual('Minko');
          });

      }));
  });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-map></sd-map>'
})
class TestComponent { }
