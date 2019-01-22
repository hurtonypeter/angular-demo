import { Component, ViewChild, ElementRef, ViewChildren, QueryList, ContentChild } from '@angular/core';
import { RatingComponent } from 'src/app/shared/components/rating/rating.component';

@Component({
    selector: 'app-frame',
    templateUrl: 'frame.component.html'
})
export class FrameComponent {

    @ViewChild('cont') container: ElementRef;

    @ViewChildren(RatingComponent) ps: QueryList<RatingComponent>;
    @ViewChild(RatingComponent) vcRating: RatingComponent;

    @ContentChild(RatingComponent) ccRating: RatingComponent;

    clicked() {
        console.log('log viewchildren');
        this.ps.forEach(x => console.log(x));

        console.log('log viewchild rating');
        console.log(this.vcRating);

        console.log('log container');
        console.log(this.container);

        console.log('log contentchild rating');
        console.log(this.ccRating);
    }

    clicked2(el: ElementRef) {
        console.log(el);
    }

}
