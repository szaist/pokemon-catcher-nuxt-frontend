<template>
    <Card class="max-w-[600px] w-full">
        <CardHeader class="border-b mb-4">
            <CardTitle class="flex justify-between items-center">
                <Skeleton class="w-[100px] h-[30px]"/>
                <Skeleton class="w-[120px] h-[35px]"/>

            </CardTitle>
        </CardHeader>
        <CardContent>
            <div class="flex flex-col items-center">
                <Skeleton class="w-[300px] h-[300px] border"/>
                <div class="grid grid-cols-2 justify-items-center w-full mt-10">
                    <div>
                        <div class="flex gap-2 mb-4">
                            <Skeleton class="w-[100px] h-[20px]"/>
                        </div>
                        <div class="flex gap-2">
                            <Skeleton class="w-[100px] h-[20px]"/>

                        </div>
                    </div>
                    <div>
                        <div>
                            <Skeleton class="w-[50px] h-[15px]" />
                            <ul>
                                <li v-for="i in 3" :key="i" class="my-1">
                                    <Skeleton class="w-[80px] h-[20px]"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </CardContent>
    </Card>
</template>