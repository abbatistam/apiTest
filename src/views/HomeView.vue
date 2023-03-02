<template>
    <table>
        <!--Headers-->
        <tr>
            <td>id</td>
            <td>Email</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Actions</td>
        </tr>
        <!--Items-->
        <tr v-for="user in allUsers.data">
            <td>{{ user.id }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.first_name }}</td>
            <td>{{ user.last_name }}</td>
            <td>
                <div>
                    <button @click="handleDelete(user.id)">delete</button>                    
                </div>
            </td>
        </tr>
    </table>
</template>

<script setup lang="ts">
    import { useTestStore } from '../stores/test'
    import { userService } from '../services/TestService'
    import { storeToRefs } from 'pinia'

    const { allUsers } = storeToRefs(useTestStore())
    
    const handleDelete = async (id) => {
        const deleteResponse = await userService.deleteUser(id)
        alert(id + ' Deleted')
        useTestStore().getUsers()
    }
</script>

<style scoped>

</style>