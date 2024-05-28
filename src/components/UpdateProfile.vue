<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="10">
                <v-card class="elevation-6 mt-10">
                    <v-card-text class="mt-12">
                        <h4 class="text-center">Update Your Account</h4>
                        <v-row align="center" justify="center">
                            <v-col cols="12" sm="8">
                                <v-text-field label="First Name" v-model="user.firstName" outlined dense color="blue"
                                    class="mt-16" />
                                <v-text-field label="Last Name" v-model="user.lastName" outlined dense color="blue"
                                    class="mt-16" />
                                <v-text-field label="Email" v-model="user.email" outlined dense color="blue"
                                    class="mt-16" />
                                <v-btn color="#5c6bc0" dark block tile @click="updateProfile">Update</v-btn>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import AuthService from "../services/AuthService.js";
import axios from 'axios';

export default {
    data() {
        return {
            user: {
                firstName: '',
                lastName: '',
                email: ''
            }
        };
    },
    methods: {
        async fetchUserData() {
            const currentUser = JSON.parse(localStorage.getItem('user'));
            if (currentUser) {
                try {
                    const response = await axios.get(`http://localhost:3000/users/${currentUser.userId}`, {
                        headers: {
                            'Authorization': `Bearer ${currentUser.token}`
                        }
                    });
                    this.user = {
                        firstName: response.data.firstName,
                        lastName: response.data.lastName,
                        email: response.data.email
                    };
                } catch (error) {
                    console.error('Failed to fetch user data:', error);
                    this.$router.push({ name: 'Profile' });
                }
            } else {
                this.$router.push({ name: 'Profile' });
            }
        },
        async updateProfile() {
            try {
                const response = await AuthService.update(this.user);
                alert('Profile updated successfully');
            } catch (error) {
                alert('Failed to update profile. Please try again.');
            }
        }
    },
    mounted() {
        const currentUser = JSON.parse(localStorage.getItem('user'));
        if (currentUser) {
            this.user = {
                firstName: currentUser.firstName,
                lastName: currentUser.lastName,
                email: currentUser.email // Leave password empty, user can enter new password if they want to change it
            };
        } else {
            this.$router.push({ name: 'Profile' });
        }
    },
    created() {
        this.fetchUserData();
    }
}
</script>