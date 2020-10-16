<template>
  <v-layout justify-center>
    <v-flex xs5>
      <v-toolbar color="pink">
        <v-toolbar-title class="white--text">
          Sign In using credentials
        </v-toolbar-title>
      </v-toolbar>
      <v-card>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          @keyup.native.enter="submit"
        >
          <v-container>
            <v-alert
              outline
              color="error"
              icon="warning"
              :value="errorSummary"
              >{{ errorSummary }}</v-alert
            >
            <v-layout column>
              <v-text-field
                v-model="userName"
                label="Email"
                required
                :rules="emailRules"
                :error-messages="errorResponse('userName')"
              ></v-text-field>

              <v-text-field
                v-model="password"
                label="Password"
                type="password"
                required
                :rules="passwordRules"
                :error-messages="errorResponse('password')"
              ></v-text-field>

              <v-checkbox v-model="rememberMe" label="Remember Me"></v-checkbox>
            </v-layout>
          </v-container>
        </v-form>
        <v-card-actions>
          <v-flex offset-xs2 mb-2>
            <v-btn flat href="/vuetify/register" :disabled="!valid || loading"
              >Register New User</v-btn
            >
            <v-btn color="primary" :disabled="!valid || loading" @click="submit"
              >Sign In</v-btn
            >
          </v-flex>
        </v-card-actions>
      </v-card>
      <v-flex>
        <v-toolbar>
          <v-toolbar-title> Quick Login </v-toolbar-title>
        </v-toolbar>
        <v-card>
          <v-layout>
            <v-flex>
              <v-btn flat @click="switchUser('admin@email.com')"
                >admin@email.com</v-btn
              >
            </v-flex>
            <v-flex>
              <v-btn flat @click="switchUser('new@user.com')"
                >new@user.com</v-btn
              >
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>

      <div class="src">
        <h4>Source Code and References</h4>
        <div>
          <a
            href="https://github.com/NetCoreApps/Validation/blob/master/world/wwwroot/vuetify/_layout.html"
            class="ref"
            >/vuetify/_layout.html</a
          >
        </div>
        <div>
          <a
            href="https://github.com/NetCoreApps/Validation/blob/master/world/wwwroot/vuetify/login.html"
            class="ref"
            >/vuetify/login.html</a
          >
        </div>
        <div>
          <a
            href="https://github.com/NetCoreApps/Validation/blob/master/world/wwwroot/vuetify/login.ts"
            class="ref"
            >/vuetify/login.ts</a
          >
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>
{{/raw}}

{{#capture appendTo scripts}}
<script>
// eslint-disable-next-line no-unused-vars
const CONTINUE = '{{ qs.redirect ?? "/vuetify/" }}'
</script>
<script src="login.js"></script>
{{/capture}}
