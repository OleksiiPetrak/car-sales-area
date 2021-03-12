import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appSelect]'
})
export class SelectDirective{
    @HostBinding('class.is-selected') isSelected = true;
    @HostBinding('class.is-selected-hovering') hovering = false;

    @HostListener('mouseenter') onMouseEnter(){
        this.hovering = true;
    }
    @HostListener('mouseleave') onMouseLeave(){
        this.hovering = false;
    }
    
    @Input() set appSelect(value){
        if(value === 'Petrol')
        {
            this.isSelected = true;
        }
        else{
            this.isSelected = false;
        }
    }
}