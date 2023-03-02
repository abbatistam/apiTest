import { userService } from '../services/TestService'
import { defineStore, storeToRefs } from 'pinia'
import { computed, ref, watch, onMounted } from 'vue'

export const useTestStore = defineStore(
    'test',
    () => {
        const allUsers = ref([])
        const aux = ref(0)

        const getUsers = async () => {
            const users = await userService.getUser()

            allUsers.value = users
        }

        onMounted(() => {
            getUsers()
        })

        return {
            allUsers,
            aux,
            getUsers
        }
    }
)