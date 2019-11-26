import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { NavController } from '@ionic/angular';
import { CONSTANTS } from 'src/app/constants';
import { AccountService } from 'src/app/shared/services/account/account.service';
import { UtilsService } from 'src/app/shared/services/utils/utils.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    public form: FormGroup;
    public hide: boolean = true;

    constructor(
        private fb: FormBuilder,
        private navCtrl: NavController,
        private loading: LoadingService,
        private toast: ToastService,
        private account: AccountService,
        private utils: UtilsService
    ) {
        this.form = this.fb.group({
            username: [null, Validators.compose([
                Validators.required,
            ])],
            password: [null, Validators.compose([
                Validators.required
            ])],
            remember_me: [false]
        });
    }

    ngOnInit() {
    }

    async submit() {
        if (this.form.invalid)
            return;

        console.log(this.form.value);

        // await this.loading.start(CONSTANTS.AUTHENTICATING);
        // try {
        //     const logged = await this.account.authenticate(this.form.value);
        //     this.loading.end();

        //     if (!logged)
        //         this.toast.error(CONSTANTS.MESSAGES.ERROR);

        //     // chama serviço para quardar dados do usuário
        //     this.navCtrl.navigateRoot('/pages/home');
        // } catch (error) {
        //     this.loading.end();
        //     this.toast.error(CONSTANTS.MESSAGES.ERROR);
        // }
    }

    toggleHide() {
        this.hide = !this.hide;
    }

    translate(text: string) {
        return this.utils.translation(text);
    }
}
