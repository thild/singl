import {Component, Input} from 'angular2/core';

@Component({
    selector: 'polo-list',
    styles: [`
        .zippy {
            background: green;
        }
    `],    
    template: `
    <ul class="list-unstyled">
        <li *ngFor="#item of polos">
            <div itemscope itemtype="http://schema.org/LocalBusiness">
                <strong><span itemprop="name">{{item.Nome}}</span></strong><br>
                <address>
                    {{item.Endereco}}<br>
                    Email(s): <span itemprop="email">{{item.Emails}}</span> <br>
                    Telefone(s): <span itemprop="telephone">{{item.Telefones}}</span> <br>
                </address>
                Coordenador(a): {{item.Coordenador}}
            </div>
        </li>
    </ul>
        
`,
})
export class PoloListComponent {
    @Input() polos: any;
}