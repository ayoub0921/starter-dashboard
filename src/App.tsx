import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex bg-white w-full h-16 shrink-0 fixed items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="h-4 mr-2" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-col flex-1 w-full gap-4 px-4 pt-20">
          <div className="grid gap-4 auto-rows-min md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia alias porro amet eligendi laudantium, inventore accusamus debitis quas praesentium veniam facilis id rerum soluta perspiciatis laborum perferendis voluptatem, molestiae aut placeat nesciunt? Aliquid dolores eum sed quisquam neque sunt, fugit optio quaerat molestiae harum atque et earum labore architecto aut eveniet pariatur ratione nisi aspernatur impedit quod porro? Harum, doloribus id alias quidem deleniti non tenetur odit suscipit doloremque minima aperiam, expedita eius quisquam. Cupiditate, magni alias corporis quod qui accusamus, eveniet fuga ea fugiat ipsum dolore sed necessitatibus architecto voluptatibus suscipit, ad tempore? Voluptate, illum perferendis recusandae sed praesentium distinctio itaque totam, quo aliquid doloribus, facere nam voluptas! Ratione consectetur sit quidem distinctio repellat rem qui reprehenderit porro animi in laboriosam magni quo, iste modi nemo repellendus esse corporis harum deleniti commodi, sequi ducimus nam blanditiis? Voluptatum laborum non veritatis consequatur ut maxime delectus consequuntur accusantium explicabo nesciunt hic velit inventore quae perferendis rem dolorem sunt nam cumque porro libero reprehenderit, iusto sed rerum! Repellendus nobis reprehenderit unde similique cupiditate magni rerum voluptates id laudantium non? Deleniti totam eius aliquid dolores libero. Quod dolores inventore laudantium, a molestias voluptas optio natus! Eum dolorum maxime cumque possimus sequi architecto officiis, quaerat eos fuga. Voluptatibus harum facilis saepe vel architecto dicta. Aut sunt dolore animi asperiores distinctio eaque voluptas voluptatem eos nostrum ab maiores hic assumenda velit nulla quas consequuntur commodi, inventore voluptates reiciendis. Perferendis consequuntur vel amet quaerat modi accusamus iure veniam? Nam in blanditiis tempora odit id, omnis magnam animi obcaecati labore cum vel quibusdam recusandae cupiditate reprehenderit excepturi dolorum non tenetur quia eveniet. Debitis non libero adipisci dicta deserunt ratione dolorem, harum ea amet consectetur dolore eum facilis saepe laboriosam alias, doloribus necessitatibus, tempora similique quis nam nostrum. Recusandae perferendis minima aut earum nesciunt adipisci temporibus rem veritatis, exercitationem nam repudiandae quibusdam quod fugit excepturi enim fugiat. Doloribus neque magnam illo exercitationem nulla et fugit id veritatis! Veritatis esse fugiat, quam sit reprehenderit cumque laudantium accusantium! Laudantium modi voluptatibus error quia animi obcaecati similique atque esse accusamus, tenetur, illum enim corporis impedit dignissimos laboriosam fugit corrupti iusto nam ut quod maxime cupiditate eaque. Nihil dolorem doloribus maxime in provident dignissimos dicta atque, delectus ipsum corrupti voluptates corporis odio nostrum animi blanditiis perferendis nulla doloremque impedit dolores optio sed? Asperiores similique dicta repellendus tenetur dolorem neque earum amet consequatur, magnam inventore? Eum debitis doloribus animi error molestiae enim labore ducimus totam, asperiores vitae, dolor illum. Sint, ipsa blanditiis. Nisi, ratione facere. Iste facilis, numquam officiis repellendus maxime praesentium. Sapiente, minima? Nobis assumenda cupiditate laudantium ut exercitationem dolor animi? Dicta ducimus, consequuntur eos, repudiandae sequi impedit id laudantium voluptate incidunt eveniet doloribus vitae voluptatem facilis debitis molestias. Laboriosam, laudantium in voluptas ab vitae quae enim perspiciatis nobis atque mollitia amet temporibus obcaecati laborum magnam quod cum reiciendis officia minima! Hic mollitia veritatis provident possimus illum qui facere omnis aut quas atque iusto unde rerum deleniti, consequatur culpa nisi voluptatem a explicabo dolorem alias eius at. Non dignissimos sit sapiente assumenda quam sed sunt. Labore deleniti ab dolorem, vel molestiae harum dolore. Corrupti debitis iste deleniti dignissimos libero necessitatibus magni dolorem culpa. Quaerat omnis nisi magni voluptas. Explicabo ut, voluptatum quis illo voluptates illum sunt tempora saepe repellendus in mollitia reiciendis nulla modi enim quam molestiae non ullam voluptas necessitatibus cupiditate ad distinctio minima! Voluptatem possimus architecto iusto, officia assumenda iste ut dignissimos pariatur doloremque dolores ducimus ipsum aspernatur, blanditiis sed enim, consequatur at reprehenderit perferendis quia nam? Aut expedita maiores mollitia nam enim quas aliquam totam sed cum? Quas alias sit veniam asperiores temporibus error aperiam facere dolorem. Sapiente vel magni ad culpa facere alias fuga tempora corrupti quo sint sit dolor excepturi aliquam explicabo praesentium quaerat consequatur dolore sequi, soluta neque, id ratione aliquid aspernatur? Voluptas veniam facere distinctio sed cumque dolores magni saepe laboriosam. Tenetur, tempora eligendi eius accusamus laudantium sapiente laboriosam ex perferendis magni reprehenderit sit a atque, pariatur doloribus quidem vitae! Laborum similique blanditiis soluta omnis ipsam perspiciatis nemo reiciendis dolore consectetur ducimus officia sapiente dolor, accusamus quasi dolorum impedit in. Molestias laboriosam aliquid rem, nemo enim impedit officiis, accusamus odit quod nostrum minima quos illum fuga obcaecati sequi unde beatae doloremque consectetur optio tenetur rerum. Neque delectus provident laudantium quidem iste ullam consectetur unde mollitia. Accusamus sapiente nesciunt atque suscipit veniam porro perferendis, voluptate consequatur nulla nobis odit delectus, blanditiis molestias impedit! Reprehenderit, dolorum sint dignissimos eligendi dolore quasi exercitationem aperiam adipisci earum porro voluptas nulla dolorem, ex tempora facilis expedita accusamus quas! Ipsam, veritatis, laboriosam maiores perspiciatis tenetur nisi ad doloribus voluptates rem eius ratione exercitationem impedit aut voluptate cupiditate accusantium odit non sunt consequatur quidem, voluptatibus nesciunt molestiae illo. Autem enim omnis placeat nisi, alias cumque dicta vero fugiat quod veniam cum ad minima iusto repellendus dolorum exercitationem id quam, nesciunt nostrum beatae commodi, illo sed totam. Iste iusto, obcaecati consequatur blanditiis voluptatum molestias ipsam a officia similique dolore fuga sint accusamus qui! Sunt accusamus repudiandae itaque maxime natus deserunt. Dicta consequuntur provident exercitationem. Cupiditate, aspernatur sint saepe, repudiandae vero quas nobis fugiat aliquid velit rem neque voluptas sed! Ipsam, magnam quaerat nemo sunt officia dolores facilis ad eum laboriosam quos iure fugiat alias illum nihil obcaecati blanditiis quisquam! Debitis doloribus necessitatibus rerum odit eius quaerat, eaque dolore beatae quisquam inventore doloremque facilis eum autem dicta accusantium laborum cupiditate, neque voluptatum minus ad! Velit asperiores dolores distinctio fuga eum, commodi reprehenderit deserunt, tempora amet soluta alias perspiciatis sapiente et impedit pariatur at, id dolorum. Provident adipisci repellendus doloremque consequuntur. Nemo porro facilis animi delectus quasi neque deserunt rerum, non veniam. Iusto molestias atque maiores voluptates nulla eaque facilis animi commodi pariatur necessitatibus dicta dolorem ad inventore debitis, ducimus vel praesentium magni, quas optio ipsa perferendis facere quidem adipisci! Eum praesentium suscipit consequatur animi quisquam doloremque quibusdam. Eos vero, fugit, quisquam sed alias accusamus ratione, voluptate nulla illo voluptas sequi. Quae, doloribus quam aspernatur obcaecati ut et reiciendis sit vitae possimus voluptas hic numquam repudiandae inventore vero consectetur ex ullam quas consequuntur! Nihil, dolores!
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
