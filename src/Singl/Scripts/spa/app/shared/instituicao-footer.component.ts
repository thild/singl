import {Component, Input, OnInit} from '@angular/core';
import {InstituicaoService}   from './../+instituicao';

@Component({
    selector: 'instituicao-footer',
    template: `
<section id="footer">
    <div class="container">
        <div class="row">    
            <div class="col-lg-8 col-lg-offset-2 text-center">
                <hr >
                <div itemscope itemtype="http://schema.org/LocalBusiness">
                    <address>
                        <strong><span itemprop="name">{{instituicao?.Nome}}</span></strong><br>
                        {{instituicao?.Endereco}}<br>
                        <abbr title="Telefone">Fone:</abbr> <span itemprop="telephone"><a href="tel:{{instituicao?.Telefone}}">{{instituicao?.Telefone}}</a></span> <br>
                        <abbr title="Fax">Fax:</abbr> {{instituicao?.Fax}}
                    </address>
                </div>
            </div>
        </div>
        <div class="row">    
            <div class="col-lg-8 col-lg-offset-2 text-center">
                <a href="{{instituicao?.UrlFaleConosco}}">Fale conosco</a> |
                <a href="{{instituicao?.UrlFaleComReitoria}}">Fale com a reitoria</a> |
                <a href="{{instituicao?.UrlOuvidoria}}">Ouvidoria</a> |
                <a href="{{instituicao?.PortalTransparencia}}">Portal da transparência</a>
            </div>
        </div>        
    </div>
</section>            
`
})
export class InstituicaoFooterComponent implements OnInit {
    @Input() instituicao: any;

    constructor(
        public instituicaoService: InstituicaoService
    ) { }

    ngOnInit() {

        if (this.instituicao == null) {
            this.instituicaoService.observableModel$
                .subscribe(m => this.instituicao = m);
            this.instituicaoService.get({});
        }
    }
}